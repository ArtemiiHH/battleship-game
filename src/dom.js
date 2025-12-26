// ==========================
// Barrel Module - DOM
// ==========================

import { Game } from "./modules/game";

// Start game
const game = new Game();
game.start();

// App container
const container = document.querySelector("#container");

// Board cell wrappers
const humanBoardWrapper = document.createElement("div");
humanBoardWrapper.classList.add("human-wrapper");
const computerBoardWrapper = document.createElement("div");
computerBoardWrapper.classList.add("computer-wrapper");

// Get player board data
const humanBoard = game.playerOne.board.board;
const computerBoard = game.playerTwo.board.board;

// Create human board (visual)
for (let i = 0; i < humanBoard.length; i++) {
  const row = document.createElement("div");
  row.classList.add('row');

  for (let j = 0; j < humanBoard[i].length; j++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    row.appendChild(cell);
  }

  humanBoardWrapper.appendChild(row);
}
container.appendChild(humanBoardWrapper);

// Create computer board (visual)
for (let i = 0; i < computerBoard.length; i++) {
  const row = document.createElement("div");
  row.classList.add('row');

  for (let j = 0; j < computerBoard[i].length; j++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    row.appendChild(cell);
  }

  computerBoardWrapper.appendChild(row);
}
container.appendChild(computerBoardWrapper);
