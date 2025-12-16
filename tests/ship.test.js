// ===========================================================
// Test Ship Modules
// ===========================================================

import Ship from "../src/modules/ship";

// Failing test for now
test("Ship starts with zero hits", () => {
  const ship = new Ship(3);
  expect(ship.hits).toBe(0);
});
