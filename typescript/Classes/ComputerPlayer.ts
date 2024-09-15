import Board from './Board.js';
import Player from './Player.js';

export default class ComputerPlayer extends Player {
  intelligence: number;

  constructor(name: string, marker: 'X' | 'O', intelligence: number) {
    super(name, marker);
    this.intelligence = intelligence;
  }
  makeMove(board: Board): number {
    let column: number;
    do {
      column = Math.floor(Math.random() * 7) + 1;
    } while (board.matrix[0][column - 1] !== null);

    return column;
  }
}
