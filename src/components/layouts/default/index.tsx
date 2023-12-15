import { Outlet } from 'react-router-dom'
import * as S from './styles'

export default function DefaultLayout(): JSX.Element {
  return(
    <S.Container>
      <Outlet />
    </S.Container>
  )
}