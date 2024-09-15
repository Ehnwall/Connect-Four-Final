import Player from './Player.js';
import Board from './Board.js';
import ComputerPlayer from './ComputerPlayer.js';
import prompt from '../helpers/prompt.js';

export default class Game {
  player1!: Player;
  player2!: Player;
  board: Board;
  currentPlayer: Player;
  isComputerGame!: boolean;

  constructor() {
    console.log('Welcome to Connect-Four!');
    const gameType = prompt('Choose game type: 1. Human vs Human 2. Human vs Computer 3. Computer vs Computer: ').toLowerCase();

    if (gameType === '1') {
      this.player1 = new Player(prompt('Enter player 1 name:'), 'X');
      this.player2 = new Player(prompt('Enter player 2 name:'), 'O');
      this.isComputerGame = false;
    } else if (gameType === '2') {
      this.player1 = new Player(prompt('Enter your name:'), 'X');
      this.player2 = new ComputerPlayer('DumbComputer', 'O', 1);
      this.isComputerGame = true;
    } else if (gameType === '3') {
      this.player1 = new ComputerPlayer('DumbComputer1', 'X', 1);
      this.player2 = new ComputerPlayer('DumbComputer2', 'O', 1);
      this.isComputerGame = true;
    }

    this.board = new Board();
    this.currentPlayer = this.player1;
    this.gameLoop();
  }
  start() {
    console.log('Game started');
    this.gameLoop();
  }
}
