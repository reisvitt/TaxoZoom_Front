/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useTheme } from 'styled-components'
import Container from '../../../components/container'
import { useGame } from '../../../hooks/useGame.hook'
import QuestionOption from '../../../components/question-option'
import ProgressBar from '../../../components/progress-bar'
import Loading from '../../../components/loading'
import * as S from './styles'
import { Timer } from '../../../components/timer'
import QuizHeader from '../../../components/quiz/header'

export function GameQuiz(): JSX.Element{
  const theme = useTheme()
  const { loadQuestion, reset, sendAnswer, actual, answer, nextQuestion, ...game } = useGame()
  const [selected, setSelected] = useState<number>()
  const [disabled, setDisabled] = useState<boolean>(false)

  useEffect(() => {
    if(loadQuestion){
      loadQuestion()
    }
  }, [game.actualIndex])

  const handleAnswer = (): void => {
    if(sendAnswer){
      sendAnswer(selected)
    }
  }

  const handleRestart = (): void => {
    if(reset){
      reset()
    } 
  }

  const handleNext = (): void => {
    if(nextQuestion){
      setDisabled(false)
      nextQuestion()
    } 
  }

  if(game.isLoadingGame || game.isLoadingQuestion){
    return (
      <Loading 
        color={theme.colors.quiz.primary}
      />
    )
  }

  if(!actual){
    return (
      <Container>
        <S.Container>
          <p>
            Questão não encontrada
          </p>
  
          <S.Button
            title="Reiniciar"
            onClick={handleRestart}
          />
        </S.Container>
      </Container>
    )
  }

  return (
    <>
      <QuizHeader showFinish />
      <Container>
        <S.Container>
          <ProgressBar 
            current={game.actualIndex + 1} 
            total={game?.questions?.length  || 0}
          />
          
          <S.QuestionContainer>
            <Timer
              id={actual.id}
              duration={10}
              onFinish={() => {
                if(!actual.answered){
                  handleAnswer()
                  setDisabled(true)
                }
              }}
              answered={!!actual.answered}
            />
            <p>
              {actual?.text}
            </p>
          </S.QuestionContainer>

          {!!actual.answered && (
            <S.Message correct={answer?.correct}>
              {answer?.message}
            </S.Message>
          )}

          <S.OptionsContainer>
            {actual?.answers?.map(question => (
              <QuestionOption 
                data={question}
                handleClick={(e) => setSelected(e)}
                isSelected={selected === question.id}
                key={question.id}
                answered={!!actual.answered}
                disabled={disabled}
              />
            ))}
          </S.OptionsContainer>

          {actual.answered ? (
            <S.Button
              title="Próxima"
              onClick={handleNext}
            />
          ) : (
            <S.Button
              title="Enviar resposta"
              onClick={handleAnswer}
            />
          )}
        </S.Container>
      </Container>
    </>
  )
}