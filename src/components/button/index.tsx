
import * as S from './styles'

type TButton = {
  title: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({title, ...props}: TButton){
  return (
    <S.Container {...props}>
      {title}
    </S.Container>
  )
}