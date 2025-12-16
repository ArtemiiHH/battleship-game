// ===========================================================
// Game Board Class
// ===========================================================

import { Ship } from "./ship";

// Represents player's game board
export class Gameboard {
  constructor(size = 10) {
    this.size = size;
    this.board = this.createBoard();
  }

  // Create 10 x 10 board
  createBoard() {
    const board = [];

    // Create rows and columns
    for (let row = 0; row < this.size; row++) {
      board[row] = [];
      for (let col = 0; col < this.size; col++) {
        board[row][col] = null;
      }
    }

    return board;
  }

  // Place ships at specific coordinates
  placeShip() {}

  // Checks if attack hit or missed
  receiveAttack(x, y) {}

  // Track missed attacks
  missedAttacks() {}

  // Check if all ships sunk
  allShipsSunk() {}
}
