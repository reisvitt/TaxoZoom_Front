import { useState } from 'react'
import Container from '../../../components/container'
import { useGame } from '../../../hooks/useGame.hook'
import logo from '../../../assets/images/logo.png'
import * as S from './styles'
import QuizHeader from '../../../components/quiz/header'

export function StartQuiz(): JSX.Element{
 
  const { initGame } = useGame()

  const [name, setName] = useState<string>("")

  const handleStart = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()

    if(!name){
      alert("Digite seu nome!")
      return
    }

    if(!initGame) return

    await initGame(name)
  }

  return (
    <S.ExternContainer>
      <QuizHeader />
      <Container>
        <S.Container>
            <S.Circle 
              src={logo}
            />

            <h3>TaxoZoom Quiz</h3>

            <S.Field onSubmit={handleStart}>
              <label>
                Digite seu nome
              </label>
              <input
                onChange={e => setName(e.target.value)}
                placeholder='Digite aqui...'
              />

              <S.StartButton
                title="Começar"
              />
            </S.Field>

      </S.Container>
      </Container>
    </S.ExternContainer>
  )
}