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
  gameLoop() {
    while (!this.board.gameOver) {
      console.clear();
      this.board.print();

      if (this.currentPlayer instanceof ComputerPlayer) {
        // Datorns drag
        console.log(`It's ${this.currentPlayer.name}'s turn.`);
        let move: number;
        do {
          move = (this.currentPlayer as ComputerPlayer).makeMove(this.board);
          console.log(`Computer ${this.currentPlayer.name} chooses column ${move}.`);
        } while (!this.makeMove(move, this.currentPlayer)); // Gör draget direkt i loopen

        if (this.board.gameOver) {
          console.clear();
          this.board.print();
          console.log(`Player ${this.currentPlayer.name} (${this.currentPlayer.marker}) wins!`);
          this.askToPlayAgain(); // Hantera omstart eller avslutning av spelet
          return;
        }

        this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1;

        // Pausa för att visa draget innan nästa dras
        this.pause(1000); // 1 sekunds paus (1000 ms)
      } else {
        // Mänsklig spelare
        let move = prompt(`Enter your move ${this.currentPlayer.marker} ${this.currentPlayer.name} - enter column: `);

        if (RegExp(/[a-zA-Z]/g).test(move)) {
          console.log('Invalid move, try again');
          continue;
        }

        if (this.makeMove(parseInt(move), this.currentPlayer)) {
          if (this.board.gameOver) {
            console.clear();
            this.board.print();
            console.log(`Player ${this.currentPlayer.name} (${this.currentPlayer.marker}) wins!`);
            this.askToPlayAgain(); // Hantera omstart eller avslutning av spelet
            return;
          }
          this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.currentPlayer;
        }
      }
    }
  }
  pause(duration: number) {
    const start = Date.now();
    while (Date.now() - start < duration) {
      // Enkelt sätt att skapa en paus
    }
  }
  askToPlayAgain() {
    const playAgain = prompt('Do you want to play again? (yes/no): ').toLowerCase();

    if (playAgain === 'yes' || playAgain === 'ja') {
      // Återställ spelet
      this.board = new Board(); // Återställ spelbrädet
      this.currentPlayer = this.player1; // Återställ till spelare 1
      console.log('Starting a new game...');
      this.gameLoop(); // Starta om spelet
    } else {
      console.log('Thanks for playing!');
    }
  }
}
