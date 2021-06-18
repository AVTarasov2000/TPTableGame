import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from '../services/login.service';
import {User} from '../classes/user';
import { HttpClient} from '@angular/common/http';
import {CrossPageInformation} from '../services/crossPageInformation';
import {LoginUserDto} from '../classes/LoginUserDTO';
import {Game} from '../classes/game';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router,
              private crossPageInformation: CrossPageInformation,
              private http: HttpClient) { }

  login = '';
  password = '';
  userName = '';
  repeatePassword = '';

  ngOnInit(): void {
  }

  onSignInButton(): void{
    this.trySignIn(this.userName, this.login, this.password);
    console.log(this.login);
    console.log(this.password);
  }

  public trySignIn(userName: string, login: string, password: string){
    if (this.password != this.repeatePassword){
      alert('неправильно повторен пароль');
    }
    else {
      const user = {name: userName, login: login, password: password};
      let result = false;
      this.http.post<LoginUserDto>('https://abdyabdya.duckdns.org:27050/app/register', user).subscribe(
        (e) => {
          if (e == null) {
            alert('ошибка регистрации');
          } else {
            this.crossPageInformation.currentUser = e;
            this.http.get<Game[]>('https://abdyabdya.duckdns.org:27050/app/games').subscribe(
              (games) => {
                if (games == null) {
                  alert('неверный пароль');
                }
                else {
                  this.crossPageInformation.games = games;
                }
              },
              err => {alert('соединение с сервером потеряно'); }
            );
            this.router.navigate(['/main']);
          }
        },
        err => {
          alert('соединение с сервером потеряно');
          result = false;
        }
      );
    }
  }

}
