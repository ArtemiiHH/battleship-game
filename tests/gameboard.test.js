// ===========================================================
// Test Game Board Modules
// ===========================================================

import { experiments } from "webpack";
import { Gameboard } from "../src/modules/gameboard";
import { Ship } from "../src/modules/ship";

// Wrong test for now
// test("Return gameboard", () => {
//   const gameboard = new Gameboard();
//   expect(gameboard.createBoard((size = 10))).toBe();
// });

// Attacking an empty cell results in a miss
// test("Attacking an empty cell results in a miss", () => {
//   expect(Gameboard.receiveAttack(0, 0)).toBe(false);
// });

// Place ship function
// test("Check plaeShip function", () => {
//   const gameboard = new Gameboard();
//   const ship = new Ship();

//   const result = gameboard.placeShip(ship, 0, 0, "vertical");

//   expect(result).toBe(true);
// });

// Attacking an empty cell returns a miss and records it
test("Empty cell attack returns miss", () => {
  const gameboard = new Gameboard();
  expect(gameboard.receiveAttack(0, 0)).toEqual("miss");
});
test('Record a hit', () => {
  const gameboard = new Gameboard();
  expect(gameboard.receiveAttack(0, 0)).toBe();
});
