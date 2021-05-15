import { Component, OnInit } from '@angular/core';
import {Room} from '../classes/Room';
import {Session} from '../classes/Session';
import {CrossPageInformation} from '../services/crossPageInformation';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {

  constructor(private crossPageInformation: CrossPageInformation,
              private http: HttpClient) { }

  sessions: Session[] = [];

  ngOnInit(): void {
    this.http.get<Session[]>('http://localhost:8080/app/sessions/'
      + this.crossPageInformation.currentUser.login).subscribe(
      (sessions) => {
        if (sessions == null) {
          alert('неверный');
        }
        else {
          this.sessions = sessions;
        }
      },
      err => {alert('соединение с сервером потеряно'); }
    );
  }

}
