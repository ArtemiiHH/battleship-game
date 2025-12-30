// ===========================================================
// Test Game Module
// ===========================================================

import { Game } from "../src/modules/game";
import { Ship } from "../src/modules/ship";

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

    // Mock function
    jest.spyOn(game, "computerAttack").mockImplementation(() => {});

    game.playerAttack(5, 5);

    expect(game.playerTwo.board.board[5][5]).toBe("miss");
  });
});

// Test changeTurn() function
describe("Change player turn", () => {
  test("after player attack, switch turn", () => {
    const game = new Game();
    game.start();

    game.changeTurn();

    expect(game.currentTurn).toBe(game.playerTwo);
  });

  test("after computer attack, turn switches", () => {
    const game = new Game();
    game.start();

    game.computerAttack();

    expect(game.currentTurn).toBe(game.playerOne);
  });
});

// Test Game Over
describe("End game", () => {
  test("game ends if all ships of one player sunk", () => {
    const game = new Game();
    game.start();

    game.playerOne.board.ships.forEach((ship) => {
      ship.hits = ship.length;
    });

    game.isGameOver();

    expect(game.isGameRunning).toBe(false);
  });
});
