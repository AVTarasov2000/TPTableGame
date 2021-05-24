import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Game} from '../classes/game';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {CrossPageInformation} from '../services/crossPageInformation';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {


  options: FormGroup;
  games: Game[];

  constructor(fb: FormBuilder,
              private router: Router,
              private http: HttpClient,
              private crossPageInformation: CrossPageInformation
  ) {
    this.options = fb.group({
      bottom: 0,
      fixed: false,
      top: 0
    });
  }

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

  ngOnInit(): void {
    this.http.get<Game[]>('http://localhost:8080/app/games').subscribe(
      (games) => {
        if (games == null) {
          alert('неверный пароль');
        }
        else {
          this.games = games;
        }
      },
      err => {alert('соединение с сервером потеряно'); }
    );
  }

  playButtonFunc(game: Game): void{
    this.crossPageInformation.chosedGame = game;
    this.crossPageInformation.room = '0';
    this.router.navigate(['/gamePage']);
  }

  findGamesButton(game: Game): void{
    this.crossPageInformation.chosedGame = game;
    this.router.navigate(['/gamesInProgress']);

  }

}
