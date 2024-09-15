export default class Board {
  matrix: (string | null)[][];
  gameOver: boolean;

  constructor() {
    this.matrix = [...new Array(6)].map(() => [...new Array(7)].map(() => null));
    this.gameOver = false;
  }
}
