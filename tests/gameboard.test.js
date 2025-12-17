// ===========================================================
// Test Game Board Modules
// ===========================================================

import { Gameboard } from "../src/modules/gameboard";

// Wrong test for now
test("Return gameboard", () => {
  const gameboard = new Gameboard();
  expect(gameboard.createBoard((size = 10))).toBe();
});

// Attacking an empty cell results in a miss
test("Attacking an empty cell results in a miss", () => {
  expect(Gameboard.receiveAttack(0, 0)).toBe(false);
});

// Place ship function
test("Check plaeShip function", () => {
  expect(Gameboard.placeShip(ship = 3, 0, 0, 'vertical')).toBe([
    [0, 0],
    [1, 0],
    [2, 0],
    [3, 0],
  ]);
});
