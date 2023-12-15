import styled from "styled-components";
import Button from "../../../components/button";

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

  gap: 1rem;

  h3 {
    font-weight: 500;
  }
`

export const Circle = styled.img`
  width: 140px;
  aspect-ratio: 1/1;
  background-color: transparent;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: 600;
  color: ${props => props.theme.colors.tertiary};
`


export const Field = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  width: 100%;
  max-width: 350px;

  label {
    font-size: 1rem;
    font-weight: 600;
    color: ${props => props.theme.colors.white};
    margin-bottom: 0.5rem;
  }

  input {
    background-color: transparent;
    border: 1px solid ${props => props.theme.colors.white};
    border-radius: 1.4rem;
    padding: 1rem;
    font-size: 0.875rem;
    color: ${props => props.theme.colors.white};
    font-weight: 500;

    &::placeholder {
      color: #ddd;
    }
    
    box-shadow: 9px 9px 9px -10px rgba(0,0,0,0.38);
    -webkit-box-shadow: 9px 9px 9px -10px rgba(0,0,0,0.38);
    -moz-box-shadow: 9px 9px 9px -10px rgba(0,0,0,0.38);
  }
`

export const StartButton = styled(Button)`
  background-color: ${props => props.theme.colors.lightOrange};
  width: 100%;
  width: 96%;
  margin: 0 auto;
  margin-top: 2rem;
`