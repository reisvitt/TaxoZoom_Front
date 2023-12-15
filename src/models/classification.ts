import { CLASSIFICATION_RANK_NAME } from "../enums/classifications.enum"

export namespace ClassificationProps {
  export type Model = {
    tsn: string,
    title: string,
    rank: CLASSIFICATION_RANK_NAME
    rankName: string
  }
}