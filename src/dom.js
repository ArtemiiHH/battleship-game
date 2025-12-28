// ==========================
// Barrel Module - DOM
// ==========================

import { Game } from "./modules/game";
import { Ship } from "./modules/ship";

// Start game
const game = new Game();

// App containers
const playScreenContainer = document.querySelector("#play-screen-container");
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
        const x = document.createElement("p");
        x.classList.add("missed-mark");
        x.textContent = "X";
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
  container.style.display = "grid";

  // Create wrappers
  const humanWrapper = createBoardWrapper("human");
  const computerWrapper = createBoardWrapper("computer");

  // Render boards
  renderBoard(game.playerOne.board.board, humanWrapper, "human");
  renderBoard(game.playerTwo.board.board, computerWrapper, "computer");

  container.append(humanWrapper, computerWrapper);
}

// Render play screen UI
function renderPlayScreen() {
  // Container to keep buttons
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container");

  // Start button
  const startBtn = document.createElement("button");
  startBtn.textContent = "Start";
  startBtn.addEventListener("click", () => {
    // Hide play screen
    playScreenContainer.style.display = "none";
    // Render game
    renderGame(game);
  });

  // Randomize fleet button
  const randomFleetBtn = document.createElement("button");
  randomFleetBtn.textContent = "Randomize";
  randomFleetBtn.addEventListener("click", () => {
    // Create new board in memory
    game.start();
    // Clear wrapper first
    humanWrapper.innerHTML = "";
    // Render new ship layout
    renderBoard(game.playerOne.board.board, humanWrapper, "human");
  });

  // Create human board wrapper
  const humanWrapper = createBoardWrapper("human");

  // Render human board
  renderBoard(game.playerOne.board.board, humanWrapper, "human");

  // Append elements
  buttonContainer.append(randomFleetBtn, startBtn);
  playScreenContainer.append(humanWrapper, buttonContainer);
}

// Render play screen
renderPlayScreen();
