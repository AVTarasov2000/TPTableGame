import { Component, OnInit } from '@angular/core';
import {User} from '../classes/user';
import {ActivatedRoute, Router} from '@angular/router';
import { HttpClient} from '@angular/common/http';
import {LoginService} from '../services/login.service';
import {CrossPageInformation} from '../services/crossPageInformation';
import {Game} from '../classes/game';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})
export class SignInPageComponent implements OnInit {
  login = '';
  password = '';

  constructor(private router: Router,
              private crossPageInformation: CrossPageInformation,
              private http: HttpClient) { }

  ngOnInit(): void {
  }

  public trySignIn(userName: string, login: string, password: string): void{
    const user = new User(userName, login, password);
    this.http.post<User>('http://localhost:8080/app/login/authentication', user).subscribe(
      (e) => {
        if (e == null) {
          alert('ошибка входа');
        }
        else {
          this.crossPageInformation.currentUser = e;
          this.http.get<Game[]>('http://localhost:8080/app/games').subscribe(
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
      err => {alert('соединение с сервером потеряно');
      }
    );
  }

  signIn(): void{
    this.trySignIn('', this.login, this.password);
  }

}
