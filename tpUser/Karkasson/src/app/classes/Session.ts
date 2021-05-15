import {Game} from './game';

export interface Session{
  id: number;
  title: string;
  ref: string;
  password: string;
  sessionStatus: string;
  game: Game;
}
