export class User {
  public userName: string;
  public login: string;
  public password: string;


  constructor(userName: string, login: string, password: string) {
    this.userName = userName;
    this.login = login;
    this.password = password;
  }
}
