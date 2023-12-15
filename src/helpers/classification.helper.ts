import { CLASSIFICATION_RANK_NAME } from "../enums/classifications.enum"

type TClassification = {
  path: string
  responseKey: string
  titleKey: string
}

export class ClassificationHelper {
  #path = ''
  #responseKey = ''
  #titleKey = ''

  constructor(private type: CLASSIFICATION_RANK_NAME, private tsn: string){}

  generatePath(): this {
    
    if(this.type ===  CLASSIFICATION_RANK_NAME.KINGDOM){
      this.#path = 'getKingdomNames'
      this.#responseKey = 'kingdomNames'
      this.#titleKey = 'kingdomName'
      return this
    }else{
      this.#path = 'getHierarchyDownFromTSN'
      this.#responseKey = 'hierarchyList'
      this.#titleKey = 'taxonName'
    }


    if(!this.tsn){
      throw new Error("Selecione uma classificação")
    }

    return this
  }

  build(): TClassification {
    const params = this.tsn ? `?tsn=${this.tsn}` : ''

    return {
      path: this.#path + params,
      responseKey: this.#responseKey,
      titleKey: this.#titleKey
    }
  }
}