// ===========================================================
// Test Game Board Module
// ===========================================================

import { Gameboard } from "../src/modules/gameboard";
import { Ship } from "../src/modules/ship";

// Test placeShip() function
test("Ship placement", () => {
  const gameboard = new Gameboard();
  const ship = new Ship(3);

  // Ship placement
  expect(gameboard.placeShip(ship, 0, 0, "vertical")).toBe(true);
  // Board contains the ship where expected
  expect(gameboard.board[0][0]).toBe(ship);
  expect(gameboard.board[1][0]).toBe(ship);
  // Check if ship was passed in array
  expect(gameboard.ships).toContain(ship);
});

// Test placeShipRandom() function
test("Random ship placement", () => {
  const gameboard = new Gameboard();
  const ship = new Ship(3);

  // Place ship
  gameboard.placeShipRandom(ship);

  // Random ship was passed in array
  expect(gameboard.ships).toContain(ship);
  // Correct number of cells contain the ship
  expect(ship.length).toEqual(3);
});

// Test receiveAttack() function
test("Miss on empty cell", () => {
  const gameboard = new Gameboard();

  expect(gameboard.receiveAttack(0, 0)).toBe("miss");
  expect(gameboard.board[0][0]).toBe("miss");
});
test("Hit ship cell", () => {
  const gameboard = new Gameboard();
  const ship = new Ship(3);

  // Place ship
  gameboard.placeShip(ship, 5, 5, "horizontal");

  expect(gameboard.receiveAttack(5, 5)).toBe("hit");
  expect(gameboard.board[5][5]).toBe("hit");
  expect(ship.hits).toBe(1);
});
test("Already-attacked cell", () => {
  const gameboard = new Gameboard();
  const ship = new Ship(3);

  // Place ship
  gameboard.placeShip(ship, 5, 5, "horizontal");
  // Attack cell
  gameboard.receiveAttack(5, 5);

  expect(gameboard.receiveAttack(5, 5)).toBe("already-attacked");
  expect(ship.hits).toBe(1);
});

// Test allShipsSunk() function
test("Not all ships sunk", () => {
  const gameboard = new Gameboard();
  const ship = new Ship(1);

  // Place ship
  gameboard.placeShip(ship, 0, 0, "vertical");
  // Attack cell
  gameboard.receiveAttack(5, 5);

  expect(gameboard.allShipsSunk()).toBe(false);
});
test("All ships sunk", () => {
  const gameboard = new Gameboard();
  const ship = new Ship(1);

  // Place ship
  gameboard.placeShip(ship, 0, 0, "vertical");
  // Attack cell
  gameboard.receiveAttack(0, 0);

  expect(gameboard.allShipsSunk()).toBe(true);
});
