import * as S from './styles'

type IProgressBarProps = {
  current: number;
  total: number;
};

const ProgressBar = ({ current, total }: IProgressBarProps): JSX.Element => {
  const percentage = (current / total) * 100;

  return (
    <S.ProgressBarContainer>
      <S.Progress percentage={percentage}>
        {`${current} de ${total}`}
      </S.Progress>
    </S.ProgressBarContainer>
  );
};


export default ProgressBar