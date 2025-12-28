// ==========================
// Barrel Module - DOM
// ==========================

import { Game } from "./modules/game";
import { Ship } from "./modules/ship";

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

// Handle cell clicks
function handleCellClicks(x, y) {
  // Launch attack
  game.playerAttack(x, y);
  renderGame(game);
}

// Render board into wrapper
function renderBoard(boardData, wrapper, type) {
  // Create board
  for (let i = 0; i < boardData.length; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < boardData[i].length; j++) {
      const cell = document.createElement("div");
      const value = boardData[i][j];

      // Base class for all cells
      cell.classList.add("cell");

      // Cell event listener
      if (type === "computer") {
        cell.addEventListener("click", () => {
          handleCellClicks(i, j);
        });
      }

      // Color cells based on state
      if (value === "hit") {
        cell.classList.add("hit-cell");
      } else if (value === "miss") {
        cell.classList.add("missed-cell");
        // Mark cell as X if missed
        const x = document.createElement('p');
        x.classList.add('missed-mark');
        x.textContent = 'X';
        cell.appendChild(x);
      } else if (value instanceof Ship && type === "human") {
        cell.classList.add("ship-cell");
      }

      row.appendChild(cell);
    }

    wrapper.appendChild(row);
  }
}

// Render entire game UI
function renderGame(game) {
  // Clear container
  container.innerHTML = "";

  // Create wrappers
  const humanWrapper = createBoardWrapper("human");
  const computerWrapper = createBoardWrapper("computer");

  // Render boards
  renderBoard(game.playerOne.board.board, humanWrapper, "human");
  renderBoard(game.playerTwo.board.board, computerWrapper, "computer");

  container.append(humanWrapper, computerWrapper);
}

// Initial game render
renderGame(game);
