import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  p {
    color: ${props => props.theme.colors.white};
  }

  a {
    color: ${props => props.theme.colors.white};
  }

  img {
    margin: 0 auto;
    display: block;
    max-width: 90%;
  }

  i {
    font-size: 0.8rem;
    overflow-wrap: break-word;
  }

  .quiz {
    margin: 0 auto;
    display: block;
    background-color: ${props => props.theme.colors.lightOrange};
  }

  .navigation {
    margin: 0 auto;
    display: block;
    color: ${props => props.theme.colors.quiz.background};;
    background-color: ${props => props.theme.colors.fourth};
  }
`


export const Title = styled.h1`
  text-align: center;
  color: ${props => props.theme.colors.white};

  margin: 2rem 0;
`

export const Table = styled.section`
  width: 100%;
  max-width: 450px;
  display: flex;
  flex-direction: row;
  align-self: center;

  align-items: center;
  gap: 3rem;

  margin: 2rem auto;
`

export const ContainerClassifications = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;
`

type TClassification = {
  width: number,
  color: string,
}

export const Classification = styled.div<TClassification>`
  background-color: ${props => props.color};
  width: ${props => `${props.width < 10 ?  10 : props.width}%`};
  align-self: center;

  border-radius: 1.4rem;
  text-align: center;
  padding: 0.75rem;

  transition: 0.1s ease-in-out;
  
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`

export const ClassificationTitle = styled.h4`
  color: #FFF;
  font-size: 1.2rem;
`


export const HeaderContainer = styled.header`
  background-color: ${props => props.theme.colors.primary};
  padding: 1rem 2rem;

  display: flex;
  justify-content: space-between;

  box-shadow: 1px 2px 37px -11px rgba(0,0,0,0.75);
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;

  img {
    width: 60px;
    margin: 0;
  }

  span {
    display: flex;
    align-items: center;
    h3 {
      font-weight: 500;
    }
  }

  button {
    background-color: ${props => props.theme.colors.fourth};
    color: ${props => props.theme.colors.primary};
    margin-left: 1rem;
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 0;
    button {
      margin-bottom: 0;
    }
  }
`