import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Spinner = styled.div`
  border: 8px solid transparent;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${rotate} 1s linear infinite;
`
