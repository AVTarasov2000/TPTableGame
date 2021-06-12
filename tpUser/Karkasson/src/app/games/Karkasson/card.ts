import {Object} from './object';

export class Card {
  public up: Object;
  public down: Object;
  public left: Object;
  public right: Object;
  public center: Object;
  public svg: string;
  x: number;
  y: number;


  constructor(svg: string) {
    this.svg = svg;
  }
}
