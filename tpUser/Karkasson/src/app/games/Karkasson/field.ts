import {Card} from './card';

export class Field{
  cards: Card[] = [];


  constructor() {
  }

  public put_card(card: Card, x: number, y: number){
    for (let i = 0; i < this.cards.length; i++) {
      if (x == this.cards[i].x && this.cards[i].y == y){
        return false;
      }
    }
    card.x = x;
    card.y = y;
    this.cards.push(card);
    return true;
  }


}
