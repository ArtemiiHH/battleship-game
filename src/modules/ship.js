// ==========================
// Ship Class
// ==========================

// Represents single ship
export class Ship {
  constructor(name, length) {
    this.name = name;
    this.length = length;
    this.hits = 0;
  }

  // Increase number of hits in my ship
  hit() {
    this.hits++;
  }

  // Calculate whether ship is sunk, based on length and number of hits
  isSunk() {
    return this.hits >= this.length;
  }
}
