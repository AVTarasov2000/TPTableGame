import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CrossPageInformation} from '../services/crossPageInformation';
import {Game} from '../classes/game';
import {Router} from '@angular/router';


@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {


  constructor(public data: CrossPageInformation, private router: Router) {
  }

  ngOnInit(): void {
  }

  playButtonFunc(game: Game): void {
    this.data.chosedGame = game;
    this.data.room = '0';
    this.router.navigate(['/gamePage']);
  }
}
