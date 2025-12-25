// ==========================
// Game Controller Module
// ==========================

import { Gameboard } from "./gameboard";
import { Ship } from "./ship";
import { Player } from "./player";

// Full running match of Battleship
export class Game {
  constructor(isGameRunning = false) {
    this.playerOne = new Player("human");
    this.playerTwo = new Player("computer", true);
    this.currentTurn = this.playerOne;
    this.isGameRunning = isGameRunning;
  }

  start() {
    // Mark game as running
    this.isGameRunning = true;

    // Reset player boards
    this.playerOne.reset();
    this.playerTwo.reset();
  }

  playerAttack(x, y) {}

  computerAttack() {}

  changeTurn() {}

  isGameOver() {}
}
