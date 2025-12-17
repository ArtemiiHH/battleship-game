// ===========================================================
// Game Board Class
// ===========================================================

// TODO:
// Fix direction strings

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
  placeShip(ship, x, y, direction) {
    const coordinates = [];

    // Check if ship is out of bounds
    if (x < 0 || x >= this.size || y < 0 || y >= this.size) {
      return;
    }

    // Generate coordinates
    for (let i = 0; i < ship.length; i++) {
      if (direction === "horizontal") {
        let newX = x;
        let newY = y + i;
        coordinates.push([newX, newY]);
      } else if (direction === "vertical") {
        let newX = x + i;
        let newY = y;
        coordinates.push([newX, newY]);
      }
    }

    return coordinates;
  }

  // Checks if attack hit or missed
  receiveAttack(x, y) {}

  // Track missed attacks
  missedAttacks() {}

  // Check if all ships sunk
  allShipsSunk() {}
}
