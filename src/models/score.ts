import { UserProps } from "./user"

export namespace ScoreProps {
  export type Model = {
    certas: number,
    erradas: number,
    total: number,
    user: UserProps.Model
  }
}