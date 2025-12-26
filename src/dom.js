// ==========================
// Barrel Module - DOM
// ==========================

import { Game } from "./modules/game";

const game = new Game();
game.start();

// App container
const container = document.querySelector("#container");

function createBoardWrapper(type) {
  const wrapper = document.createElement("div");

  if (type === "human") {
    wrapper.classList.add("human-wrapper");
    return wrapper;
  } else {
    wrapper.classList.add("computer-wrapper");
    return wrapper;
  }
}

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

function renderGame(game) {
  game.start();
  createBoardWrapper();
  renderBoard();
  container.append(wrapper);
}
