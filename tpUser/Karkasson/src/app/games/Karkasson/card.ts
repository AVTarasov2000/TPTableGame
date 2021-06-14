import {Object} from './object';

export interface Card {
  up: Object;
  down: Object;
  left: Object;
  right: Object;
  center: Object;
  svg: string;
  x: number;
  y: number;
  rotation: number;
}
