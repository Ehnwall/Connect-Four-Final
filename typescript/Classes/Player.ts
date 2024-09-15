export default class Player {
  name: string;
  marker: 'X' | 'O'; // Correctly define marker type

  constructor(name: string, marker: 'X' | 'O') {
    this.name = name;
    this.marker = marker;
  }
}
