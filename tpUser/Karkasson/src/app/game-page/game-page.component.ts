import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  log(str: string): void{
    console.log(str);
  }

  ngOnInit(): void {
  }

}
