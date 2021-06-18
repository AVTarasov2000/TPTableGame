import { Component, OnInit } from '@angular/core';
import {PlayedGame} from '../classes/played-game';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {CrossPageInformation} from '../services/crossPageInformation';
import {Room} from '../classes/Room';

@Component({
  selector: 'app-games-in-progress-page',
  templateUrl: './games-in-progress-page.component.html',
  styleUrls: ['./games-in-progress-page.component.css']
})
export class GamesInProgressPageComponent implements OnInit {

  constructor(private router: Router,
              private http: HttpClient,
              private crossPageInformation: CrossPageInformation) { }

  rooms: Room[] = [];

  ngOnInit(): void {
    let id = '';
    if (this.crossPageInformation.chosedGame.id) {
      id = this.crossPageInformation.chosedGame.id.toString();
    }
    this.http.get<Room[]>('http://abdyabdya.duckdns.org:27050/app/activeSessions/' + id).subscribe(
      (rooms) => {
        if (rooms == null) {
          alert('неверный');
        }
        else {
          this.rooms = rooms;
        }
      },
      err => {alert('соединение с сервером потеряно'); }
    );
  }

}
