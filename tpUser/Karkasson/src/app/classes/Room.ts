export class Room{
  id: number;
  name: string;
  password: string;
  ref: string;


  constructor(id: number, name: string, password: string, ref: string) {
    this.id = id;
    this.name = name;
    this.password = password;
    this.ref = ref;
  }
}
