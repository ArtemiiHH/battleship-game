// ==========================
// Barrel Module - DOM
// ==========================

import { Game } from "./modules/game";

// Start game
const game = new Game();
game.start();

// App container
const container = document.querySelector("#container");

// Create board wrapper
function createBoardWrapper(type) {
  const wrapper = document.createElement("div");

  if (type === "human") {
    wrapper.classList.add("human-wrapper");
  } else {
    wrapper.classList.add("computer-wrapper");
  }

  return wrapper;
}

// Render board into wrapper
function renderBoard(boardData, wrapper) {
  // Create board
  for (let i = 0; i < boardData.length; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < boardData[i].length; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      row.appendChild(cell);
    }

    wrapper.appendChild(row);
  }
}

// Render entire game UI
function renderGame(game) {
  // Clear container
  container.innerHTML = '';

  // Create wrappers
  const humanWrapper = createBoardWrapper('human');
  const computerWrapper = createBoardWrapper('computer');

  // Render boards
  renderBoard(game.playerOne.board.board, humanWrapper);
  renderBoard(game.playerTwo.board.board, computerWrapper);

  container.append(humanWrapper, computerWrapper);
}

// Initial game render
renderGame(game);
