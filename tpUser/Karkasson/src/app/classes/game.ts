export class Game {
  public id: number;
  public name: string;
  public rules: string;
  public information: string;
  public capacity: number;
  public title: string;
  public images: string;


  constructor(id: number, name: string, rules: string, information: string, capacity: number, title: string, images: string) {
    this.id = id;
    this.name = name;
    this.rules = rules;
    this.information = information;
    this.capacity = capacity;
    this.title = title;
    this.images = images;
  }
}
