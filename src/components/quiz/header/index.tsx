import { Link } from 'react-router-dom'
import logo from '../../../assets/images/logo.png'
import { useGame } from '../../../hooks/useGame.hook'
import * as S from './styles'
import Container from '../../container'

type TQuizHeader = {
  showFinish?: boolean,
}

const QuizHeader = ({showFinish}:TQuizHeader): JSX.Element => {
  const {finishGame} = useGame()

  return (
    <S.Container>
      <Container>
        <S.Content>
          <Link to="/">
              <img src={logo} />
              <h3>TaxoZoom Quiz</h3>
          </Link>

          {!!showFinish && (
            <S.Button 
              onClick={finishGame}
              title='Finalizar Quiz'
            />
          )}
        </S.Content>
      </Container>
    </S.Container>
  )
}

export default QuizHeader