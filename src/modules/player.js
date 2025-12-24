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
    if (!this.isComputer) {
      // Human attack
      const result = enemyBoard.receiveAttack(x, y);
      return result;
    } else {
      // Computer attack
      let result = "already-attacked";

      // Generate until result is hit or miss
      while (result === "already-attacked") {
        const x = Math.floor(Math.random() * enemyBoard.size);
        const y = Math.floor(Math.random() * enemyBoard.size);

        result = enemyBoard.receiveAttack(x, y);
      }

      return result;
    }
  }
}
