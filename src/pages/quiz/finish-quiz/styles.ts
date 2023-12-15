import styled from "styled-components";
import UiButton from "../../../components/button";

export const ExternContainer = styled.div`
  display: flex;
  flex: 1;
  min-height: 100vh;
  flex-direction: column;
  background-color: ${props => props.theme.colors.quiz.background};
`

export const Container = styled.div`
  display: flex;
  flex: 1;
  min-height: 80vh;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  gap: 2rem;

  img {
    width: 150px;
  }
`

export const FinishMessage = styled.div`
  font-size: 24px;
  color: ${props => props.theme.colors.white};
  font-weight: 600;
  letter-spacing: 1.3px;
  text-align: center;
`

export const Score = styled.p`
  color: ${props => props.theme.colors.white};
`

export const Button = styled(UiButton)`
  background-color: ${props => props.theme.colors.lightOrange};
  width: 100%;
  max-width: 330px;
`