// ===========================================================
// Test Main Game Modules
// ===========================================================

import Ship from "../src/modules/ship";

test("Ship starts with zero hits", () => {
  const ship = new Ship(3);
  expect(ship.hits).toBe(0);
});
