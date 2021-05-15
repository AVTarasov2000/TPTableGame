import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service';
import {User} from '../classes/user';
import { HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {CrossPageInformation} from '../services/crossPageInformation';

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

  changePass(): void {
    const user = new User(this.newName, this.crossPageInformation.currentUser.login, this.password);
    this.http.post<User>('http://localhost:8080/app/personal/change/name', user).subscribe(
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

  changeName(): void {
    // todo
    const user = new User(this.newName, this.crossPageInformation.currentUser.login, this.password);
    this.http.post<User>('http://localhost:8080/app/personal/change/password', user).subscribe(
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
