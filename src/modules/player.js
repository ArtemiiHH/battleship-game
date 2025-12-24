// ===========================================================
// Player Class
// ===========================================================

import { Gameboard } from "./gameboard";

// Represents Player
export class Player {
  constructor(name, isComputer = false) {
    this.name = name;
    this.isComputer = isComputer;
    this.board = new Gameboard();
  }

  attack(enemyBoard, x, y) {
    // Check if user or computer
    if (this.isComputer === false) {
      // Human attack
      const attackResult = enemyBoard.receiveAttack(x, y);
      return attackResult;
    } else {
    }
  }
}
