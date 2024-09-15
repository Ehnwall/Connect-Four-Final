import Board from './Board.js';
import Player from './Player.js';

export default class ComputerPlayer extends Player {
  intelligence: number;

  constructor(name: string, marker: 'X' | 'O', intelligence: number) {
    super(name, marker);
    this.intelligence = intelligence;
  }
}
