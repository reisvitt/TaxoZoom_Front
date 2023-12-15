import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *,
  ::after,
  ::before {
    box-sizing: border-box;
    outline: none;
  }
  :root {
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: transparent;
    scroll-behavior: smooth;
  }

  article,
  aside,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  nav,
  section {
    display: block;
  }

  button{
    border: none;
    font-family: ${props => props.theme.fonts.poppins};
  }

  body {
    color: ${props => props.theme.colors.white};
    padding: 0;
    margin: 0;
    line-height: 1.35;
    background-color: ${props => props.theme.colors.background};
  }

  body.modal-open{
    overflow: hidden;
  }

  body, input, textarea {
    font-family: ${props => props.theme.fonts.poppins};
    &:focus {
      outline: inherit;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fonts.poppins};
    margin-top: 0;
    margin-bottom: 0;
    font-weight: bold;
  }

  p {
    font-size: 1rem;
    color: ${props => props.theme.colors.dark};
  }

`
