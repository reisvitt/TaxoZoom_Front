import { Outlet } from 'react-router-dom'
import { GameProvider } from '../../../contexts/game.context'
import * as S from './styles'

export default function QuizLayout(): JSX.Element {
  return(
    <GameProvider>
      <S.Container>
        <Outlet />
      </S.Container>
    </GameProvider>
  )
}