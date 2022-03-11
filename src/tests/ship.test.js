import { shipFactory } from "../factories/ship";

// RecieveAttack

test("Recieve an attack", () => {
  let shipOne = shipFactory(3);
  shipOne.recieveAttack();
  expect(shipOne.shipInfo["hitsTaken"]).toBe(1);
});

// isSunk
test("Test for isSunk to be false", () => {
  let shipOne = shipFactory(5);
  expect(shipOne.isSunk()).toBe(false);
});

test("Test for isSunk to be true", () => {
  let shipOne = shipFactory(2);
  shipOne.recieveAttack();
  shipOne.recieveAttack();

  expect(shipOne.isSunk()).toBe(true);
});

// Add ship coordinate
test("Test to add coordinate", () => {
  let shipOne = shipFactory(2);
  shipOne.addShipCoordinate(["row_1", 0]);

  expect(shipOne.shipInfo["shipCoordinates"]).toStrictEqual([["row_1", 0]]);
});
