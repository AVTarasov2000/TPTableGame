export class User {
  public name: string;
  public login: string;
  public password: string;


  constructor(userName: string, login: string, password: string) {
    this.name = userName;
    this.login = login;
    this.password = password;
  }
}
