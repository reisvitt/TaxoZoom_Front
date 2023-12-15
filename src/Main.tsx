import { GlobalStyle } from './styles/global'
import Routes from './routes'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/styles'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  )
}

export default App
