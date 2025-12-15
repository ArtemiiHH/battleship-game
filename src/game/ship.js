// ===========================================================
// Ship Class
// ===========================================================

// Represents single ship
class Ship {
  constructor(length, hit = 0, sunk = false) {
    this.length = length;
    this.hit = hit;
    this.sunk = sunk;
  }

  // Increase number of hits in my ship
  hit() {
    this.hit++;
  }

  // Calculate whether ship is sunk, based on length and number of hits
  isSunk() {
    if (this.hit > this.length) {
      this.sunk = true;
    }
  }
}
