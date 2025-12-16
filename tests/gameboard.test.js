// ===========================================================
// Test Game Board Modules
// ===========================================================

import { Gameboard } from "../src/modules/gameboard";

// Wrong test for now
test('Return gameboard', () => {
  const gameboard = new Gameboard();
  expect(gameboard.createBoard(size = 10)).toBe();
});