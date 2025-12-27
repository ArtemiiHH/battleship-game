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

    // Ship objects for each player
    const playerOneShips = {
      Carrier: 5,
      Battleship: 4,
      Destroyer: 3,
      Submarine: 3,
      "Patrol Boat": 2,
    };
    const playerTwoShips = {
      Carrier: 5,
      Battleship: 4,
      Destroyer: 3,
      Submarine: 3,
      "Patrol Boat": 2,
    };

    // Place ships on each players board (random for now)
    Object.entries(playerOneShips).forEach((ship) => {
      const name = ship[0];
      const length = ship[1];
      this.playerOne.board.placeShipRandom(new Ship(name, length));
    });

    Object.entries(playerTwoShips).forEach((ship) => {
      const name = ship[0];
      const length = ship[1];
      this.playerTwo.board.placeShipRandom(new Ship(name, length));
    });

    // Human starts
    this.currentTurn = this.playerOne;
  }

  playerAttack(x, y) {
    // Mark game as running
    this.isGameRunning = true;
    // Set current turn to human player
    this.currentTurn = this.playerOne;
  }

  computerAttack() {}

  changeTurn() {}

  isGameOver() {}
}
