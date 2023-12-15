import styled from "styled-components";

export const Container = styled.button`
  padding: 0.75rem 3rem;
  border-radius: 2rem;
  text-align: center;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.primary};
  cursor: pointer;

  transition: 0.1s ease-in-out;

  box-shadow: 9px 9px 9px -10px rgba(0,0,0,0.38);
  -webkit-box-shadow: 9px 9px 9px -10px rgba(0,0,0,0.38);
  -moz-box-shadow: 9px 9px 9px -10px rgba(0,0,0,0.38);

  transform: scale(1.05);

  &:hover {
    transform: scale(1);
  }
`