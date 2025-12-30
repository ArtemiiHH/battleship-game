// ===========================================================
// Test Game Module
// ===========================================================

import { Game } from "../src/modules/game";

// Test start() function
describe("Start function", () => {
  test("start() initializes both boards and places ships", () => {
    const game = new Game();

    game.start();

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
