// ===========================================================
// Game Board Class
// ===========================================================

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

  receiveAttack(x, y) {}
}
