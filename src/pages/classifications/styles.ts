import styled from "styled-components";
import Button from "../../components/button";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-weight: 600;
  }
`


export const HeaderContainer = styled.header`
  background-color: ${props => props.theme.colors.primary};
  padding: 1rem 2rem;

  display: flex;
  justify-content: flex-end;

  box-shadow: 1px 2px 37px -11px rgba(0,0,0,0.75);
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;

  .back {
    background-color: ${props => props.theme.colors.fourth};
    color: ${props => props.theme.colors.primary};
  }

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 0;
  }
`

export const Title = styled.h1`
  text-align: center;
  color: ${props => props.theme.colors.white};

  margin: 2rem 0;
`

export const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: unset;
  }
`

export const CardItem = styled.div`
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.primary};
  border-radius: 0.2rem;
  
  min-width: 175px;
  aspect-ratio: 1/0.85;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.3rem;

  cursor: pointer;
  box-shadow: 8px 8px 9px -12px rgba(0,0,0,0.38);

  transform: scale(1.05);
  transition: ease-in-out 100ms;

  font-size: 1rem;
  font-weight: 500;

  &:hover {
    transform: scale(1);
  }
`

export const ResetButton = styled(Button)`
  background-color: ${props => props.theme.colors.lightOrange};
`

export const HierarchyContainer = styled.div`
  margin: 1rem 0;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  margin-bottom: 2rem;

  div {
    h3{
      font-weight: 500;
      font-size: 0.875rem;
      color: ${props => props.theme.colors.white};
    }

    span {
      font-weight: 400;
    }
  }
`;

export const Description = styled.div`
  p{
    color: ${props => props.theme.colors.white};;
  }

  margin: 2rem 0 ;
`;
