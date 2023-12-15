
import * as S from './styles'

type TContainer = React.AllHTMLAttributes<HTMLElement>

export default function Container({ children }: TContainer){
  return (
    <S.Container>
      {children}
    </S.Container>
  )
}