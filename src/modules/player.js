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
}
