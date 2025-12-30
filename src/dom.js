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
const winLoseModal = document.querySelector("#win-lose-modal");

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

  // If all ships sunk render win/lose screen
  if (game.isGameRunning === false) {
    container.style.display = "none";
    winLoseModal.style.display = "flex";
    renderWinLoseScreen();
  }
}

// Render board into wrapper
function renderBoard(board, wrapper, type) {
  const boardData = board.board;
  const ships = board.ships;

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

      let sunkShip = ships.find(
        (ship) =>
          ship.isSunk() &&
          ship.cellsOccupied.some(([x, y]) => x === i && y === j)
      );

      // Color cells based on state
      if (sunkShip) {
        cell.classList.add("sunk-ship");
        // Mark cell as X if ship sunk
        const x = document.createElement("p");
        x.classList.add("missed-mark");
        x.textContent = "•";
        cell.appendChild(x);
      } else if (value === "hit") {
        cell.classList.add("hit-cell");
        // Mark cell as X if ship is hit
        const x = document.createElement("p");
        x.classList.add("missed-mark");
        x.textContent = "•";
        cell.appendChild(x);
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
  renderBoard(game.playerOne.board, humanWrapper, "human");
  renderBoard(game.playerTwo.board, computerWrapper, "computer");

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
  // Disable button
  startBtn.disabled = true;
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
    // Enable button
    startBtn.disabled = false;
    // Create new board in memory
    game.start();
    // Clear wrapper first
    humanWrapper.innerHTML = "";
    // Render new ship layout
    renderBoard(game.playerOne.board, humanWrapper, "human");
  });

  // Create human board wrapper
  const humanWrapper = createBoardWrapper("human");

  // Render human board
  renderBoard(game.playerOne.board, humanWrapper, "human");

  // Append elements
  buttonContainer.append(randomFleetBtn, startBtn);
  playScreenContainer.append(humanWrapper, buttonContainer);
}

// Render win/lose screen UI
function renderWinLoseScreen() {
  // Clear win/lose modal first
  winLoseModal.innerHTML = "";

  const modal = document.createElement("div");
  modal.classList.add("modal");
  const winLoseText = document.createElement("h3");
  const underText = document.createElement("p");
  // Restart button
  const restartButton = document.createElement("button");
  restartButton.textContent = "Restart";
  restartButton.addEventListener("click", () => {
    container.innerHTML = "";
    playScreenContainer.style.display = "flex";
  });

  // Modal text
  if (game.playerOne.board.allShipsSunk()) {
    winLoseText.textContent = "YOU LOSE";
    underText.textContent = "All your ships have been sunk!";
  } else {
    winLoseText.textContent = "YOU WON";
    underText.textContent = "You sunk all opponent's ships!";
  }

  modal.append(winLoseText, underText, restartButton);
  winLoseModal.appendChild(modal);
}

// Render play screen
renderPlayScreen();
