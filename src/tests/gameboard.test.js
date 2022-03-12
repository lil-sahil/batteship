import { gameboardFactory } from "../factories/gameboard";
import { shipFactory } from "../factories/ship";

// Create Gameboard
test("Create Gameboard", () => {
  let answer = {
    row_0: ["", "", "", "", "", "", "", "", "", ""],
    row_1: ["", "", "", "", "", "", "", "", "", ""],
    row_2: ["", "", "", "", "", "", "", "", "", ""],
    row_3: ["", "", "", "", "", "", "", "", "", ""],
    row_4: ["", "", "", "", "", "", "", "", "", ""],
    row_5: ["", "", "", "", "", "", "", "", "", ""],
    row_6: ["", "", "", "", "", "", "", "", "", ""],
    row_7: ["", "", "", "", "", "", "", "", "", ""],
    row_8: ["", "", "", "", "", "", "", "", "", ""],
    row_9: ["", "", "", "", "", "", "", "", "", ""],
  };
  expect(gameboardFactory().createGameboard()).toEqual(answer);
});

// Place ships
test("Place ship horizontally on gameboard", () => {
  let game = gameboardFactory();
  game.createGameboard();

  let ship = shipFactory(3);

  let answer = {
    row_0: ["-", "-", "-", "", "", "", "", "", "", ""],
    row_1: ["", "", "", "", "", "", "", "", "", ""],
    row_2: ["", "", "", "", "", "", "", "", "", ""],
    row_3: ["", "", "", "", "", "", "", "", "", ""],
    row_4: ["", "", "", "", "", "", "", "", "", ""],
    row_5: ["", "", "", "", "", "", "", "", "", ""],
    row_6: ["", "", "", "", "", "", "", "", "", ""],
    row_7: ["", "", "", "", "", "", "", "", "", ""],
    row_8: ["", "", "", "", "", "", "", "", "", ""],
    row_9: ["", "", "", "", "", "", "", "", "", ""],
  };
  expect(game.placeShip(0, 0, ship, "horizontal")).toEqual(answer);
});

test("Place ship vertically on gameboard", () => {
  let game = gameboardFactory();
  game.createGameboard();
  let ship = shipFactory(3);
  let answer = {
    row_0: ["-", "", "", "", "", "", "", "", "", ""],
    row_1: ["-", "", "", "", "", "", "", "", "", ""],
    row_2: ["-", "", "", "", "", "", "", "", "", ""],
    row_3: ["", "", "", "", "", "", "", "", "", ""],
    row_4: ["", "", "", "", "", "", "", "", "", ""],
    row_5: ["", "", "", "", "", "", "", "", "", ""],
    row_6: ["", "", "", "", "", "", "", "", "", ""],
    row_7: ["", "", "", "", "", "", "", "", "", ""],
    row_8: ["", "", "", "", "", "", "", "", "", ""],
    row_9: ["", "", "", "", "", "", "", "", "", ""],
  };
  expect(game.placeShip(0, 0, ship, "vertical")).toEqual(answer);
});

test("Place ship vertically out of board", () => {
  let game = gameboardFactory();
  game.createGameboard();
  let ship = shipFactory(3);
  let answer = {
    row_0: ["", "", "", "", "", "", "", "", "", ""],
    row_1: ["", "", "", "", "", "", "", "", "", ""],
    row_2: ["", "", "", "", "", "", "", "", "", ""],
    row_3: ["", "", "", "", "", "", "", "", "", ""],
    row_4: ["", "", "", "", "", "", "", "", "", ""],
    row_5: ["", "", "", "", "", "", "", "", "", ""],
    row_6: ["", "", "", "", "", "", "", "", "", ""],
    row_7: ["", "", "", "", "", "", "", "", "", ""],
    row_8: ["", "", "", "", "", "", "", "", "", ""],
    row_9: ["", "", "", "", "", "", "", "", "", ""],
  };
  expect(game.placeShip(9, 0, ship, "vertical")).toEqual(answer);
});

test("Place ship vertically in in-accesible position", () => {
  let game = gameboardFactory();
  game.createGameboard();
  let ship1 = shipFactory(3);
  let ship2 = shipFactory(3);
  game.placeShip(0, 0, ship1, "vertical");

  let answer = {
    row_0: ["-", "", "", "", "", "", "", "", "", ""],
    row_1: ["-", "", "", "", "", "", "", "", "", ""],
    row_2: ["-", "", "", "", "", "", "", "", "", ""],
    row_3: ["", "", "", "", "", "", "", "", "", ""],
    row_4: ["", "", "", "", "", "", "", "", "", ""],
    row_5: ["", "", "", "", "", "", "", "", "", ""],
    row_6: ["", "", "", "", "", "", "", "", "", ""],
    row_7: ["", "", "", "", "", "", "", "", "", ""],
    row_8: ["", "", "", "", "", "", "", "", "", ""],
    row_9: ["", "", "", "", "", "", "", "", "", ""],
  };
  expect(game.placeShip(1, 0, ship2, "vertical")).toEqual(answer);
});

test("Place ship horizontaly out of board", () => {
  let game = gameboardFactory();
  game.createGameboard();
  let ship = shipFactory(3);
  let answer = {
    row_0: ["", "", "", "", "", "", "", "", "", ""],
    row_1: ["", "", "", "", "", "", "", "", "", ""],
    row_2: ["", "", "", "", "", "", "", "", "", ""],
    row_3: ["", "", "", "", "", "", "", "", "", ""],
    row_4: ["", "", "", "", "", "", "", "", "", ""],
    row_5: ["", "", "", "", "", "", "", "", "", ""],
    row_6: ["", "", "", "", "", "", "", "", "", ""],
    row_7: ["", "", "", "", "", "", "", "", "", ""],
    row_8: ["", "", "", "", "", "", "", "", "", ""],
    row_9: ["", "", "", "", "", "", "", "", "", ""],
  };
  expect(game.placeShip(9, 9, ship, "horizontal")).toEqual(answer);
});

test("Place ship horizontaly in in-accesible position", () => {
  let game = gameboardFactory();
  game.createGameboard();

  let ship1 = shipFactory(3);
  let ship2 = shipFactory(3);
  game.placeShip(0, 0, ship1, "horizontal");

  let answer = {
    row_0: ["-", "-", "-", "", "", "", "", "", "", ""],
    row_1: ["", "", "", "", "", "", "", "", "", ""],
    row_2: ["", "", "", "", "", "", "", "", "", ""],
    row_3: ["", "", "", "", "", "", "", "", "", ""],
    row_4: ["", "", "", "", "", "", "", "", "", ""],
    row_5: ["", "", "", "", "", "", "", "", "", ""],
    row_6: ["", "", "", "", "", "", "", "", "", ""],
    row_7: ["", "", "", "", "", "", "", "", "", ""],
    row_8: ["", "", "", "", "", "", "", "", "", ""],
    row_9: ["", "", "", "", "", "", "", "", "", ""],
  };
  expect(game.placeShip(0, 1, ship2, "horizontal")).toEqual(answer);
});

test("Place multiple ships", () => {
  let game = gameboardFactory();
  game.createGameboard();
  let ship1 = shipFactory(3);
  let ship2 = shipFactory(3);
  game.placeShip(0, 0, ship1, "horizontal");

  let answer = {
    row_0: ["-", "-", "-", "", "", "", "", "", "", ""],
    row_1: ["-", "", "", "", "", "", "", "", "", ""],
    row_2: ["-", "", "", "", "", "", "", "", "", ""],
    row_3: ["-", "", "", "", "", "", "", "", "", ""],
    row_4: ["", "", "", "", "", "", "", "", "", ""],
    row_5: ["", "", "", "", "", "", "", "", "", ""],
    row_6: ["", "", "", "", "", "", "", "", "", ""],
    row_7: ["", "", "", "", "", "", "", "", "", ""],
    row_8: ["", "", "", "", "", "", "", "", "", ""],
    row_9: ["", "", "", "", "", "", "", "", "", ""],
  };
  expect(game.placeShip(1, 0, ship2, "vertical")).toEqual(answer);
});

// Attack
test("Play a spot specified by a coordinate", () => {
  let game = gameboardFactory();
  game.createGameboard();
  game.attack(1, 0, []);

  expect(game.spotsPlayed).toEqual([[1, 0]]);
});

test("Try to play a spot already played and ensure the coordinate is not saved twice", () => {
  let game = gameboardFactory();
  game.createGameboard();
  // First attack
  game.attack(1, 0, []);

  // Second attack at the same coordinate
  game.attack(1, 0, []);

  expect(game.spotsPlayed).toEqual([[1, 0]]);
});

test("Try to play a spot already played and ensure return false", () => {
  let game = gameboardFactory();
  game.createGameboard();
  // First attack
  game.attack(1, 0, []);

  // Second attack at the same coordinate

  expect(game.attack(1, 0, [])).toBe(false);
});

test("Attack a ship", () => {
  // Initialize Gameboard
  let game = gameboardFactory();
  game.createGameboard();

  // Initialize ship
  let ship1 = shipFactory(3);

  // Place ship on gameboard
  game.placeShip(0, 0, ship1, "horizontal");

  // Attack ship once
  game.attack(0, 0, [ship1]);

  // Attack ship twice
  game.attack(0, 1, [ship1]);

  // Expect hits taken to be 1
  expect(ship1.shipInfo["hitsTaken"]).toBe(2);
});

// AllSunk
test("Determine if all boats have sunk", () => {
  // Initialize Gameboard
  let game = gameboardFactory();
  game.createGameboard();

  // Initialize ship
  let ship1 = shipFactory(3);
  let ship2 = shipFactory(3);

  // Place ship on gameboard
  game.placeShip(0, 0, ship1, "horizontal");
  game.placeShip(1, 0, ship2, "horizontal");

  // Attack ships once
  game.attack(0, 0, [ship1]);
  game.attack(1, 0, [ship2]);

  // Attack ship twice
  game.attack(0, 1, [ship1]);
  game.attack(1, 1, [ship2]);

  // Attack ship three times - ship should sink
  game.attack(0, 2, [ship1]);
  game.attack(1, 2, [ship2]);

  // Expect gameboard to report that all ships have sunk
  expect(game.allSunk([ship1, ship2])).toBe(true);
});

test("Determine not all boats have sunk", () => {
  // Initialize Gameboard
  let game = gameboardFactory();
  game.createGameboard();

  // Initialize ship
  let ship1 = shipFactory(3);
  let ship2 = shipFactory(3);

  // Place ship on gameboard
  game.placeShip(0, 0, ship1, "horizontal");
  game.placeShip(1, 0, ship2, "horizontal");

  // Attack ship once
  game.attack(0, 0, [ship1]);

  // Attack ship twice
  game.attack(0, 1, [ship1]);

  // Attack ship three times - ship should sink
  game.attack(0, 2, [ship1]);

  // Expect gameboard to report that all ships have sunk
  expect(game.allSunk([ship1, ship2])).toBe(false);
});
