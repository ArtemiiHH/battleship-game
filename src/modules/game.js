// ==========================
// Game Controller Module
// ==========================

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
    const playerShips = {
      Carrier: 5,
      Battleship: 4,
      Destroyer: 3,
      Submarine: 3,
      "Patrol Boat": 2,
    };

    // Place ships on each players board (random for now)
    Object.entries(playerShips).forEach((ship) => {
      const name = ship[0];
      const length = ship[1];
      this.playerOne.board.placeShipRandom(new Ship(name, length));
    });

    Object.entries(playerShips).forEach((ship) => {
      const name = ship[0];
      const length = ship[1];
      this.playerTwo.board.placeShipRandom(new Ship(name, length));
    });

    // Human starts
    this.currentTurn = this.playerOne;
  }

  playerAttack(x, y) {
    if (this.currentTurn !== this.playerOne) return;

    // Human attacks computer
    const launchAttack = this.playerOne.attack(this.playerTwo.board, x, y);

    // Check cell state after attack
    if (launchAttack === "hit" || launchAttack === "miss") {
      // Check if game over, otherwise continue
      if (this.playerTwo.board.allShipsSunk()) {
        this.isGameOver();
      } else {
        // If game not over change turn
        this.changeTurn();
        this.computerAttack();
      }
    }
  }

  computerAttack() {
    if (this.currentTurn !== this.playerTwo) return;

    // Computer attacks human
    const launchAttack = this.playerTwo.attack(this.playerOne.board);

    // Check cell state after attack
    if (launchAttack === "hit" || launchAttack === "miss") {
      // Check if game over, otherwise continue
      if (this.playerOne.board.allShipsSunk()) {
        this.isGameOver();
        // If game not over change turn
      } else {
        this.changeTurn();
      }
    }
  }

  changeTurn() {
    if (this.currentTurn === this.playerOne) this.currentTurn = this.playerTwo;
    else this.currentTurn = this.playerOne;
  }

  isGameOver() {
    if (
      this.playerOne.board.allShipsSunk() ||
      this.playerTwo.board.allShipsSunk()
    ) {
      this.isGameRunning = false;
    }
  }
}
