export class Card {
  public item: Object;
  public type: string;

  constructor(type: string, item: Object) {
    this.type = type;
    this.item = item;
  }
}
