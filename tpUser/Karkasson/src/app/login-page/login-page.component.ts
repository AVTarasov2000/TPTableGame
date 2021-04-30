import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LoginService} from '../services/login-service';
import {User} from '../classes/user/user';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private router: ActivatedRoute, private loginService: LoginService, private http: HttpClient) { }

  login = '';
  password = '';
  userName = '';

  ngOnInit(): void {
  }

  onLogInButton(): void{
    console.log(this.login);
    console.log(this.password);
  }

  onSignInButton(): void{
    this.trySignIn(this.userName, this.login, this.password);
    console.log(this.login);
    console.log(this.password);
  }

  public trySignIn(userName: string, login: string, password: string): boolean{
    const user = new User(userName, login, password);
    let result = false;
    this.http.post<User>('http://localhost:8080/login/check', user).subscribe(
      (e) => {
        if (e == null) {
          alert('ошибка регистрации');
        }
        else {
          this.loginService.me = e;
        }
      },
      err => {alert('соединение с сервером потеряно');
              result =  false; }
    );
    return result;
  }

}
