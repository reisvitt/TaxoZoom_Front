export namespace QuestionProps {
  export type Answer = {
    id: number,
    text: string,
    why_incorrect?: string
    correct?: boolean
  }

  export type Model = {
    id: number,
    text: string
    answers?: QuestionProps.Answer[]
  }
  
 
}