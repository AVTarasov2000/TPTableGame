import { Injectable } from '@angular/core';

import {User} from '../classes/user';
import {Game} from '../classes/game';

@Injectable()
export class CrossPageInformation {
  constructor() { }

  // tslint:disable-next-line:variable-name
  private _currentUser: User;
  // tslint:disable-next-line:variable-name
  private _chosedGame: Game;


  get currentUser(): User {
    return this._currentUser;
  }

  set currentUser(value: User) {
    this._currentUser = value;
  }

  get chosedGame(): Game {
    return this._chosedGame;
  }

  set chosedGame(value: Game) {
    this._chosedGame = value;
  }
}
