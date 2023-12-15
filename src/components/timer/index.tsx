/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useTheme } from 'styled-components';
import * as S from './styles'

type TTimer = {
  id: any
  duration: number,
  onFinish: () => void 
  answered: boolean
}

export const Timer = ({ id, duration, onFinish, answered }: TTimer): JSX.Element => {
  const theme = useTheme()
  const [progress, setProgress] = useState<number>(duration);

  useEffect(() => {
    setProgress(duration)
    const intervalId = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress > 0) {
          return prevProgress - 1;
        } else {
          clearInterval(intervalId);
          onFinish()
          return 0
        }
      });
    }, 1000);

    return () => clearInterval(intervalId);

  }, [duration, id]);


  const percentage = ( progress * 100) / duration

  return (
    <S.Container>
      <CircularProgressbar 
        value={answered ? 0 : Math.ceil(percentage)}
        text={ answered ? '0s' : `${Math.ceil(progress)}s`}
        background
        styles={buildStyles({
          backgroundColor: '#FFF',
          textColor: theme.colors.quiz.primary,
          pathColor: theme.colors.quiz.primary,
          trailColor: theme.colors.quiz.secondary,
        })}
      />
    </S.Container>
  )
}