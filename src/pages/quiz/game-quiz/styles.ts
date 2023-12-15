/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";
import ButtonTemp from "../../../components/button";

export const Container = styled.div`
  display: flex;
  flex: 1;
  min-height: 60vh;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  gap: 2rem;

  padding: 2rem 0;

  width: 100%;
  max-width: 700px;
  margin: 0 auto;
`

export const QuestionContainer = styled.div`
  position: relative;

  box-shadow: 0px 5px 20px rgba(0,0,0,0.18);
  -webkit-box-shadow: 0px 5px 20px rgba(0,0,0,0.18);
  -moz-box-shadow: 0px 5px 20px rgba(0,0,0,0.18);

  background-color: #FFF;
  padding: 3rem 2rem;
  border-radius: 1rem;
  margin-top: 2rem;
  width: 100%;

  p {
    font-weight: bold;
    text-align: center;
    font-size: 0.875rem;
  }
`

export const OptionsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Message = styled.p<any>`
  border-radius: 1.5rem;
  background-color: ${props => props.correct ? props.theme.colors.quiz.success : props.theme.colors.quiz.fail};
  padding: 1rem;
  color: white;
  margin: -1rem;
  font-size: 0.875rem;
`

export const Button = styled(ButtonTemp)`
  background-color: ${props => props.theme.colors.quiz.primary};
  color: #FFF;
  width: 100%;
  padding: 1rem;
  border-radius: 1.5rem;
  transform: unset;
  max-width: 100%;

  &:hover {
    transform: scale(1.05);
  }
`