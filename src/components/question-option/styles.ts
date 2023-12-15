/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";


export const ExternContainer = styled.div`


`

export const Container = styled.button<any>`
  border-radius: 1.5rem;
  padding: 1rem 1.3rem;

  font-weight: bold;
  font-size: 0.750rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  background-color: #FFF;
  min-width: 100%;

  transition: 0.1s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  cursor: pointer;

  ${props => {
    if(props['answered']){
      if(props['is-correct']){
        return `background-color: ${props.theme.colors.quiz.secondary}; color: ${props.theme.colors.quiz.primary}`
      }else{
        return `background-color: ${props.theme.colors.quiz.fail}; color: ${props.theme.colors.white}`
      }
    }else{
      if(props['data-selected']){
        return `background-color: ${props.theme.colors.quiz.secondary}; color: ${props.theme.colors.quiz.primary}`
      }
    }
    
    return '#FFF'
  }};


  img {
    width: 20px;
    height: 20px;
  }

  span {
    text-align: left
  }
`

export const Why = styled.p`
  margin: 0;
  margin-left: 1rem;
  margin-top: 0.3rem;
  font-size: 0.750rem;
  color: ${props => props.theme.colors.white};
`