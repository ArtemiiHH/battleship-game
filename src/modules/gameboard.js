// ===========================================================
// Game Board Class
// ===========================================================

import { Ship } from "./ship";

// Represents player's game board
export class Gameboard {
  constructor(size = 10, missed = 0) {
    this.size = size;
    this.board = this.createBoard();
    this.missed = missed;
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

    // Validate coordinates
    for (const [coordX, coordY] of coordinates) {
      // Check if coordinates are out of board bounds
      if (
        coordX < 0 ||
        coordX >= this.size ||
        coordY < 0 ||
        coordY >= this.size
      ) {
        return false;
      }

      // Check if coordinates overlap taken cells
      if (this.board[coordX][coordY] !== null) {
        return false;
      }
    }

    // Place ship on coordinates
    for (const [coordX, coordY] of coordinates) {
      this.board[coordX][coordY] = ship;
    }

    return true;
  }

  // Checks if attack hit or missed
  receiveAttack(x, y) {
    // Target coordinates
    const target = this.board[x][y];

    if (target !== null) {
      target = Ship.hit();
      return "hit";
    }

    if (target === null) {
      target = this.missedAttacks();
      return "miss";
    }

    return target;
  }

  // Track missed attacks
  missedAttacks() {
    this.missed++
  }

  // Check if all ships sunk
  allShipsSunk() {}
}
