import styled from 'styled-components';

type IProgressProps = {
  percentage: number;
};

export const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: #ccc;
  border-radius: 1rem;
  overflow: hidden;
`;


export const Progress = styled.div<IProgressProps>`
  height: 15px;
  width: ${({ percentage }) => percentage}%;
  background-color: ${props => props.theme.colors.quiz.success};
  color: #fff;
  text-align: center;
  line-height: 15px;
  transition: width 0.5s ease;
  font-size: 12px;
`;
