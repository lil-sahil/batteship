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
