import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Game} from '../classes/game';
import {PlayedGame} from '../classes/played-game';
import {CrossPageInformation} from '../services/crossPageInformation';

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
  public playedGames: PlayedGame[] = [];

  log(str: string): void{
    console.log(str);
  }

  ngOnInit(): void {
    this.game = this.crossPageInformation.chosedGame;
    if (!this.game.rules) {
      this.http.post<Game>('http://localhost:8080/app/game', this.game).subscribe(
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
    // this.playedGames.push(new PlayedGame('playedName1', 420, true),
    //   new PlayedGame('playedName2', 69, false));
    // this.http.post<Game>('http://localhost:8080/app/game/playedGames', this.game).subscribe(
    //   (game) => {
    //     if (game == null) {
    //       alert('неверный пароль');
    //     }
    //     else {
    //       this.game = game;
    //     }
    //   },
    //   err => {alert('соединение с сервером потеряно'); }
    // );
  }

}
