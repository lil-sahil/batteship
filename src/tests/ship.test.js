import { shipFactory } from "../factories/ship";

// isSunk
test("Test for isSunk to be false", () => {
  let ship = ["", "", ""];
  expect(shipFactory().isSunk(ship)).toBe(false);
});

test("Test for isSunk to be true", () => {
  let ship = ["X", "X", "X"];
  expect(shipFactory().isSunk(ship)).toBe(true);
});

test("Test for isSunk to be false", () => {
  let ship = ["X", "", "X"];
  expect(shipFactory().isSunk(ship)).toBe(false);
});
