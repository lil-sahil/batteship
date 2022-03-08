import { shipFactory } from "../factories/ship";

// isSunk
test("Test for isSunk to be false", () => {
  let shipOne = shipFactory(5);
  expect(shipOne.isSunk()).toBe(false);
});

test("Test for isSunk to be true", () => {
  let shipOne = shipFactory(5);
  shipOne.setShip(["X", "X", "X", "X", "X"]);
  expect(shipOne.isSunk()).toBe(true);
});

test("Test for isSunk to be false", () => {
  let shipOne = shipFactory(3);
  shipOne.setShip(["X", "", "X"]);
  expect(shipOne.isSunk()).toBe(false);
});

// Register Hit

test("Register a Hit", () => {
  let shipOne = shipFactory(3);
  shipOne.registerHit(0);
  expect(shipOne.getShip()).toStrictEqual(["X", "", ""]);
});
