// ===========================================================
// Test Game Module
// ===========================================================

import { Game } from "../src/modules/game";
import { Ship } from "../src/modules/ship";
import { Gameboard } from "../src/modules/gameboard";

// Test start() function
describe("Start function", () => {
  test("start() initializes both boards and places ships", () => {
    const game = new Game();

    game.start();

    expect(game.isGameRunning).toBe(true);
    expect(game.playerOne.board).toBeDefined();
    expect(game.playerTwo.board).toBeDefined();
    expect(game.playerOne.board.ships.length).toBeGreaterThan(0);
    expect(game.playerTwo.board.ships.length).toBeGreaterThan(0);
  });

  test("start() sets current turn to human player", () => {
    const game = new Game();

    game.start();

    expect(game.currentTurn).toBe(game.playerOne);
  });
});

// Test playerAttack() function
describe("Player attack", () => {
  test("player attack hits a ship on the computer board", () => {
    const game = new Game();
    game.start();

    const ship = new Ship("Test ship", 3);
    game.playerTwo.board.placeShip(ship, 0, 0, "vertical");

    game.playerAttack(0, 0);

    expect(game.playerTwo.board.board[0][0]).toBe("hit");
  });

  test("player attack misses a ship on the computer board", () => {
    const game = new Game();
    game.start();

    game.playerAttack(5, 5);

    expect(game.playerTwo.board.board[5][5]).toBe("miss");
  });
});
