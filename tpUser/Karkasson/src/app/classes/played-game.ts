export class PlayedGame {
  public name: string;
  public score: number;
  public isVin: boolean;


  constructor(name: string, score: number, isVin: boolean) {
    this.name = name;
    this.score = score;
    this.isVin = isVin;
  }
}
