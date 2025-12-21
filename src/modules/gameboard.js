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
    this.ships = [];
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

    // Push placed ship into ship array
    this.ships.push(ship);
    return true;
  }

  // Place ships at random coordinates
  placeShipRandom(ship) {}

  // Track missed attacks
  missedAttacks() {
    this.missed++;
  }

  // Checks if attack hit or missed
  receiveAttack(x, y) {
    // Target coordinates
    const cell = this.board[x][y];

    // Check if cell is already attacked
    if (cell === "hit" || cell === "miss") {
      return "already-attacked";
    }

    // Check if cell is hit or miss
    if (cell instanceof Ship) {
      cell.hit();
      this.board[x][y] = "hit";
      return "hit";
    }
    if (cell === null) {
      this.board[x][y] = "miss";
      this.missedAttacks();
      return "miss";
    }
  }

  // Check if all ships sunk
  allShipsSunk() {
    return Object.values(this.ships).every((ship) => ship.isSunk());
  }
}
