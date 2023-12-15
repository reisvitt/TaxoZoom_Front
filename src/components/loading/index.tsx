import { useTheme } from 'styled-components'
import * as S from './styles'

type ILoadingProps = {
  color?: string
}

const Loading = ({ color }: ILoadingProps): JSX.Element => {
  const theme = useTheme()

  return (
    <S.Container className="loading">
      <S.Spinner style={{ borderLeftColor: color ?? theme.colors.primary }} />
    </S.Container>
  )
}

export default Loading
