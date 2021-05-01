import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login-service';
import {User} from '../classes/user/user';
import { HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  password = '';
  repeatPassword = '';
  newPassword = '';
  newName = '';

  constructor(private router: Router,
              private loginService: LoginService,
              private http: HttpClient) { }

  ngOnInit(): void {
    alert('test');
  }

  changePass(): void {
    const user = new User(this.newName, this.loginService.me.login, this.password);
    this.http.post<User>('http://localhost:8080/app/personal/change/name', user).subscribe(
      (e) => {
        if (e == null) {
          alert('неверный пароль');
        }
        else {
          this.loginService.me = e;
        }
      },
      err => {alert('соединение с сервером потеряно'); }
    );
  }

  changeName(): void {
    const user = new User(this.newName, this.loginService.me.login, this.password);
    this.http.post<User>('http://localhost:8080/app/personal/change/password', user).subscribe(
      (e) => {
        if (e == null) {
          alert('ошибка пароль');
        }
        else {
          this.loginService.me = e;
        }
      },
      err => {alert('соединение с сервером потеряно'); }
    );
  }


}
