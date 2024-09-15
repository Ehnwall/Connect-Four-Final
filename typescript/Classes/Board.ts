export default class Board {
  matrix: (string | null)[][];
  gameOver: boolean;

  constructor() {
    this.matrix = [...new Array(6)].map(() => [...new Array(7)].map(() => null));
    this.gameOver = false;
  }
  print() {
    const horizontalSeparator = '+---'.repeat(7) + '+';
    const boardString = this.matrix
      .map((row) => {
        const rowString = row.map((cell) => ` ${cell === null ? ' ' : cell} `).join('|');
        return `${horizontalSeparator}\n|${rowString}|`;
      })
      .join('\n');
    console.log(boardString);
    console.log(horizontalSeparator);
    console.log('  1   2   3   4   5   6   7');
  }
}
