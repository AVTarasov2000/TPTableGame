import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service';
import {User} from '../classes/user';
import { HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {CrossPageInformation} from '../services/crossPageInformation';
import {LoginUserDto} from '../classes/LoginUserDTO';

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
              public crossPageInformation: CrossPageInformation,
              private http: HttpClient) { }

  ngOnInit(): void {
  }

  changeName(): void {
    const user = {name: this.newName, login: this.crossPageInformation.currentUser.login, password: this.password};
    this.http.post<User>('http://localhost:8080/app/update/name', user).subscribe(
      (e) => {
        if (e == null) {
          alert('неверный пароль');
        }
        else {
          this.crossPageInformation.currentUser = e;
        }
      },
      err => {alert('соединение с сервером потеряно'); }
    );
  }

  changePass(): void {
    // todo
    const user = {name: this.newName, login: this.crossPageInformation.currentUser.login, password: this.password, newPassword: this.newPassword};
    this.http.post<User>('http://localhost:8080/app/update/password', user).subscribe(
      (e) => {
        if (e == null) {
          alert('ошибка пароль');
        }
        else {
          this.crossPageInformation.currentUser = e;
        }
      },
      err => {alert('соединение с сервером потеряно'); }
    );
  }


}
