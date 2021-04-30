import { Injectable } from '@angular/core';

import {User} from '../classes/user/user';

@Injectable()
export class LoginService {
  constructor() { }


  // @ts-ignore
  // tslint:disable-next-line:variable-name
  private _me: User;


  get me(): User {
    return this._me;
  }

  set me(value: User) {
    this._me = value;
  }
}
