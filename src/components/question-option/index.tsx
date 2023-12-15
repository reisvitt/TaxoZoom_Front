import { QuestionProps } from '../../models/question'
import check from '../../assets/icons/ri-check.svg'
import close from '../../assets/icons/ri-close.svg'
import * as S from './styles'

type IQuestionOption = {
  data: QuestionProps.Answer,
  isSelected: boolean
  answered: boolean
  disabled: boolean
  handleClick: (id: number) => void
}

const QuestionOption = ({ data, isSelected, handleClick, answered, disabled }: IQuestionOption): JSX.Element => {

  return (
   <S.ExternContainer>
     <S.Container
        data-selected={isSelected}
        key={data.id}
        onClick={() => handleClick(data.id)}
        disabled={disabled || !!answered}
        answered={answered}
        is-correct={!!data.correct}
      >
        <span>
          {data.text}
        </span>

       {answered && data.correct && isSelected && (
          <img src={check} />
        )}
        {answered && !data.correct && isSelected && (
          <img src={close} />
        )}
      </S.Container>

      {answered && (
        <S.Why>
          {data.why_incorrect}
        </S.Why>
      )}
   </S.ExternContainer>
  )
}

export default QuestionOption