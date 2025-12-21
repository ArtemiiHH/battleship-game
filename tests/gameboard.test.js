// ===========================================================
// Test Game Board Modules
// ===========================================================

import { Gameboard } from "../src/modules/gameboard";
import { Ship } from "../src/modules/ship";

// Test createBoard() function
test("Return gameboard", () => {
  const gameboard = new Gameboard();
  expect(gameboard.createBoard()).toBe();
});

// Test placeShip() function
test("Check placeShip function", () => {
  const gameboard = new Gameboard();
  const ship = new Ship();

  const result = gameboard.placeShip(ship, 0, 0, "vertical");

  expect(result).toBe(true);
});

// Test missedAttack() function

// Test receiveAttack() function
test("Attacking an empty cell results in a miss", () => {
  expect(Gameboard.receiveAttack(0, 0)).toBe(false);
});
test("Empty cell attack returns miss", () => {
  const gameboard = new Gameboard();
  expect(gameboard.receiveAttack(0, 0)).toEqual("miss");
});
test('Record a hit', () => {
  const ship = new Ship();
  expect(ship.hit()).toBe('hit');
});
test('Check if missed', () => {
  const ship = new Ship();
  expect(ship.hit()).toBe('miss');
});
test('Check if all ships are sunk', () => {
  const gameboard = new Gameboard();
  expect(gameboard.allShipsSunk()).toBe(true);
});

// Test allShipsSunk() function
