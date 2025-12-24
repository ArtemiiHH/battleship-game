// ==========================
// Game Controller Module
// ==========================

import { Gameboard } from "./gameboard";
import { Ship } from "./ship";
import { Player } from "./player";

// Full running match of Battleship
export class Game {
  constructor(players, turn, gameRunning) {
    this.players = players;
    this.turn = turn;
    this.gameRunning = gameRunning;
  }

  start() {
    // Players
    const playerOne = new Player('human');
    const playerTwo = new Player('computer', true);
  }

  playerAttack(x, y) {}

  computerAttack() {}

  changeTurn() {}

  isGameOver() {}
}
