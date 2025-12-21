// ===========================================================
// Test Game Board Modules
// ===========================================================

import { experiments } from "webpack";
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
test("Miss ship cell", () => {
  const gameboard = new Gameboard();

  expect(gameboard.receiveAttack(0, 0)).toBe("miss");
  expect(gameboard.board[0][0]).toBe("miss");
});
test("Hit ship cell", () => {
  const gameboard = new Gameboard();
  const ship = new Ship(3);

  // Place ship
  gameboard.placeShip(ship, 5, 5, 'horizontal');

  expect(gameboard.receiveAttack(5, 5)).toBe("hit");
  expect(gameboard.board[5][5]).toBe("hit");
  expect(ship.hits).toBe(1);
});

// Test allShipsSunk() function
