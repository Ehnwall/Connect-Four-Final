export default class Player {
  name: string;
  marker: 'X' | 'O';
  constructor(name: string, marker: 'X' | 'O') {
    this.name = name;
    this.marker = marker;
  }
}
