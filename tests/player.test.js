// ===========================================================
// Test Player Module
// ===========================================================

import { Gameboard } from "../src/modules/gameboard";
import { Player } from "../src/modules/player";
import { Ship } from "../src/modules/ship";

// Test attack() function
describe("Human attack", () => {
  test("returns miss", () => {
    const gameboard = new Gameboard();
    const player = new Player("human player");

    expect(player.attack(gameboard, 1, 0)).toBe("miss");
  });

  test("returns hit and increase hit count", () => {
    const gameboard = new Gameboard();
    const ship = new Ship(3);
    const player = new Player("human player");

    gameboard.placeShip(ship, 0, 0, "vertical");

    expect(player.attack(gameboard, 0, 0)).toBe("hit");
    expect(ship.hits).toBe(1);
  });

  test("returns already-attacked and does not increase hit count", () => {
    const gameboard = new Gameboard();
    const ship = new Ship(3);
    const player = new Player("human player");

    gameboard.placeShip(ship, 0, 0, "vertical");

    expect(player.attack(gameboard, 0, 0)).toBe("hit");
    expect(player.attack(gameboard, 0, 0)).toBe("already-attacked");
    expect(ship.hits).toBe(1);
  });
});

describe("Computer attack", () => {
  const gameboard = new Gameboard();
  const ship = new Ship(3);
  const player = new Player("computer player");
});
