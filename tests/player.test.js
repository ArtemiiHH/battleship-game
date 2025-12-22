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
  test("Computer attack marks exactly one cell as attacked", () => {
    const gameboard = new Gameboard();
    const computer = new Player("computer", true);

    // Perform one computer attack
    computer.attack(gameboard);
    computer.attack(gameboard);
    computer.attack(gameboard);

    // Count attacked cells
    let attackedCells = 0;

    for (let x = 0; x < gameboard.size; x++) {
      for (let y = 0; y < gameboard.size; y++) {
        if (
          gameboard.board[x][y] === "hit" ||
          gameboard.board[x][y] === "miss"
        ) {
          attackedCells++;
        }
      }
    }

    expect(attackedCells).toBe(1);
  });

  test("Computer eventually hits a ship", () => {
    const gameboard = new Gameboard();
    const ship = new Ship(1);
    const computer = new Player("computer", true);

    // Place a 1-length ship
    gameboard.placeShip(ship, 0, 0, "horizontal");

    // Keep attacking until ship is hit
    let attempts = 0;
    while (ship.hits === 0 && attempts < 100) {
      computer.attack(gameboard);
      attempts++;
    }

    expect(ship.hits).toBe(1);
  });
});
