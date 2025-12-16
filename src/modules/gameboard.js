// ===========================================================
// Game Board Class
// ===========================================================

// Represents player's game board
export class Gameboard {
  constructor() {}

  // Create 10 x 10 board
  createBoard(size = 10) {
    const board = [];

    // Create rows and columns
    for (let row = 0; row < size; row++) {
      board[row] = [];
      for (let col = 0; col < size; col++) {
        board[row][col] = null;
      }
    }

    return board;
  }

  receiveAttack(x, y) {}
}
