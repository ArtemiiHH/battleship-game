// ==========================
// Game Controller Module
// ==========================

import { Gameboard } from "./gameboard";
import { Ship } from "./ship";
import { Player } from "./player";

// Full running match of Battleship
export class Game {
  constructor() {
    this.playerOne = new Player('human');
    this.playerTwo = new Player('computer', true);
    this.playerOneBoard = new Gameboard();
    this.playerTwoBoard = new Gameboard();
  }

  start() {}

  playerAttack(x, y) {}

  computerAttack() {}

  changeTurn() {}

  isGameOver() {}
}
