import { PropsWithChildren, createContext, useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { QuestionProps } from "../models/question";
import { Uuid } from "../utils/uuid";
import { gameApi } from "../api/api";

type IQuestionModel = QuestionProps.Model & {
  answered?: boolean
}

export type IContextProps = {
  isLoadingGame: boolean,
  isLoadingQuestion: boolean,
  questions: QuestionProps.Model[],
  actual?: IQuestionModel
  answer?: {
    message: string,
    correct: boolean
  },
  actualIndex: number // id of actual question
  nextQuestion?: () => void
  initGame?: (name: string) => Promise<void>
  loadQuestion?: () => Promise<void>
  reset?: () => void
  finishGame?: () => void
  sendAnswer?: (answerId?: number) => Promise<void>
  uuid: string
}

const defaultValues: IContextProps  = {
  actualIndex: 0,
  isLoadingGame: true,
  isLoadingQuestion: true,
  questions: [],
  uuid: '',
}

export const GameContext = createContext<IContextProps>(defaultValues)


export function GameProvider({children}: PropsWithChildren ): JSX.Element {
  const [gameData, setGameData] = useState<IContextProps>(defaultValues)

  const navigate = useNavigate()

  const nextQuestion = (): void => {
    
    setGameData(prev => ({
      ...prev,
      actualIndex: prev.actualIndex + 1
    }))
  }

  const getQuestions = async (): Promise<void> => {
    try {
      const questions = await gameApi.get("/game/questions")

      setGameData(prev => ({
        ...prev,
        questions: questions.data
      }))
    } catch (error) {
      alert("Oops: " + (error as Error).message)
    }
  }

  const initGame = async (name: string): Promise<void> => {
    const uuid = new Uuid().generate()

    try {
      await gameApi.post("/game/init", {
        name,
        uuid
      })
  
      setGameData({
        ...defaultValues,
        uuid,
      })

      await getQuestions()
  
      navigate({
        pathname: "game",
        search: createSearchParams({
          uuid
        }).toString()
      });
    } catch (error) {
      alert("Oops: " + (error as Error).message)
    }
  }

  const loadQuestion = async (): Promise<void> => {
    if(gameData.questions.length === 0){
      getQuestions()

      setGameData(prev => ({
        ...prev,
        isLoadingGame: true,
      }))

      return
    }

    if(gameData.questions.length <= gameData.actualIndex){
      finishGame()
      return
    }
    

    const question = gameData.questions[gameData.actualIndex]

    setGameData(prev => ({
      ...prev,
      actual: question,
      isLoadingGame: false,
      isLoadingQuestion: false
    }))
  }

  const sendAnswer = async (answerId?: number): Promise<void> => {

    const question = await gameData.actual

    try {
      const answer = await gameApi.post(`/game/respond/${question?.id}`, {
        answerId: answerId
      }, {
        headers: {
          'Authorization': gameData.uuid
        }
      })
      

      setGameData({
        ...gameData,
        actual: {
          ...answer.data.question as IQuestionModel,
          answered: true
        },
        answer: {
          correct: answer.data.correct,
          message: answer.data.message
        }
      })

    } catch (error) {
      alert("Oops: " + (error as Error).message)
    }
    
  }

  const finishGame = (): void => {
    navigate({
      pathname: "finish",
      search: createSearchParams({
        uuid: gameData.uuid
      }).toString()
    });
  }

  const reset = (): void => {
    setGameData(defaultValues)
    navigate('/quiz', {replace: true})
  }

  return (
    <GameContext.Provider 
      value={{
        actual: gameData.actual,
        isLoadingGame: gameData.isLoadingGame,
        isLoadingQuestion: gameData.isLoadingQuestion,
        questions: gameData.questions,
        uuid: gameData.uuid,
        actualIndex: gameData.actualIndex,
        answer: gameData.answer,
        nextQuestion,
        initGame,
        loadQuestion,
        reset,
        sendAnswer,
        finishGame
      }}
    >
      {children}
    </GameContext.Provider>
  )
}