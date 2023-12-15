import { useEffect, useState } from 'react'
import { useTheme } from 'styled-components'
import Container from '../../../components/container'
import { useGame } from '../../../hooks/useGame.hook'
import { gameApi } from '../../../api/api'
import Loading from '../../../components/loading'
import * as S from './styles'
import { ScoreProps } from '../../../models/score'
import QuizHeader from '../../../components/quiz/header'

export function FinishQuiz(): JSX.Element{
  const theme = useTheme()
 
  const { reset, ...game } = useGame()
  const [loading, setLoading] = useState<boolean>(true)
  const [userData, setUserData] = useState<ScoreProps.Model>()


  const getUserAnswer = async (): Promise<void> => {
    setLoading(true)

    try {
        const result = await gameApi.get("/game/my-score",{
          headers:{
            Authorization: game.uuid
          }
        })

        setUserData(result.data as ScoreProps.Model)
    } catch (error) {
      alert("Oops: " + (error as Error).message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if(game.uuid){
      getUserAnswer()
    }
  }, [])

  if(loading){
    return (
      <Loading 
        color={theme.colors.quiz.primary}
      />
    )
  }
 
  return (
    <S.ExternContainer>
      <QuizHeader />
      <Container>
        <S.Container>
          <img 
            src='https://cdn-icons-png.flaticon.com/512/5709/5709755.png'
          />

          <S.FinishMessage>Parabéns, {userData?.user.name}! Você concluiu o TaxoZoom quiz.</S.FinishMessage>
          <S.Score>Sua pontuação foi: <span>{`${userData?.certas}/${userData?.total}`}</span></S.Score>
            
          <S.Button
            title="Recomeçar"
            onClick={reset}
          />
        </S.Container>
      </Container>
    </S.ExternContainer>
  )
}