import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Game} from '../classes/game';
import {PlayedGame} from '../classes/played-game';
import {CrossPageInformation} from '../services/crossPageInformation';
import {Session} from '../classes/Session';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {

  users = [
    'user1',
    'user2',
    'user3',
  ];

  constructor(private router: Router,
              private http: HttpClient,
              public crossPageInformation: CrossPageInformation
  ) { }

  public game: Game;
  public playedGames: Session[] = [];

  log(str: string): void{
    console.log(str);
  }

  ngOnInit(): void {
    console.log(this.crossPageInformation.chosedGame);
    this.game = this.crossPageInformation.chosedGame;
    if (!this.game.rules) {
      this.http.post<Game>('https://abdyabdya.duckdns.org:27050/app/game', this.game).subscribe(
        (game) => {
          if (game == null) {
            alert('неверный пароль');
          } else {
            this.game = game;
          }
        },
        err => {
          alert('соединение с сервером потеряно');
        }
      );
    }
    // this.playedGames.push(new PlayedGame('Gamers', 420, true),
    //   new PlayedGame('Gamers', 69, false));
    this.http.get<Session[]>('https://abdyabdya.duckdns.org:27050/app/sessions/' + this.crossPageInformation.currentUser.login).subscribe(
      (game) => {
        if (game == null) {
        }
        else {
          this.playedGames = game;
        }
      },
      err => {alert('соединение с сервером потеряно'); }
    );
  }

}
