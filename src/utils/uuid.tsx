import * as UuidLib from 'uuid';

export class Uuid {
  constructor(private uuid?: string){
  }

  static start(uuid?: string): Uuid {
    return new Uuid(uuid)
  }

  generate(): string {
    return UuidLib.v4()
  }

  validate(): boolean {
    if(!this.uuid){
      return false
    }

    const valid = UuidLib.validate(this.uuid)

    return valid
  }
}