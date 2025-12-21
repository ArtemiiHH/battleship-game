// ===========================================================
// Test Game Board Modules
// ===========================================================

import { Gameboard } from "../src/modules/gameboard";
import { Ship } from "../src/modules/ship";

// Test placeShip() function
test("Ship placement", () => {
  const gameboard = new Gameboard();
  const ship = new Ship(3);

  // Ship placement
  expect(gameboard.placeShip(ship, 0, 0, "vertical")).toBe(true);
  // Board contains the ship where expected
  expect(gameboard.board[0][0]).toBe(ship);
  expect(gameboard.board[1][0]).toBe(ship);
  // Check the ship was passed in array
  expect(gameboard.ships).toContain(ship);
});

// Test receiveAttack() function

// Test allShipsSunk() function
