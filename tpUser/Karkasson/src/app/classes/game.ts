export class Game {
  public id: number;
  public name: string;
  public rules: string;
  public information: string;


  constructor(id: number, name: string, rules: string, information: string) {
    this.id = id;
    this.name = name;
    this.rules = rules;
    this.information = information;
  }

}
