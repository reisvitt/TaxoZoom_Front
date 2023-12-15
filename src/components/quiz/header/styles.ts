import styled from "styled-components";
import ButtonUI from "../../button";

export const Container = styled.header`
  margin-bottom: 1rem;
  padding: 0.3rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  box-shadow: 1px 2px 37px -11px rgba(0,0,0,0.75);

  img {
    width: 60px;
  }

  a {
    text-decoration: none;
    color: #FFF;
    display: flex;
    align-items: center;
    width: fit-content;

    h3 {
      font-weight: 500;
    }
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Button = styled(ButtonUI)`
  border: none;
  color: #fff;
  background-color: ${props => props.theme.colors.quiz.primary};
  padding: 0.4rem 1rem;
  font-size: 0.750rem;
`