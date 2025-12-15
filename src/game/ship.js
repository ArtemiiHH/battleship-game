// ===========================================================
// Ship Class
// ===========================================================

// Represents single ship
export class Ship {
  constructor(length, hits = 0, sunk = false) {
    this.length = length;
    this.hits = hits;
    this.sunk = sunk;
  }

  // Increase number of hits in my ship
  hit() {
    this.hits++;
  }

  // Calculate whether ship is sunk, based on length and number of hits
  isSunk() {
    if (this.hits >= this.length) {
      return this.sunk = true;
    }
  }
}
