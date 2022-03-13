import { shipFactory } from "./ship";

// Utils
import { randomChoice } from "../utils/randomPicker";
import { gameParamters } from "../utils/gameParameters";

export let playerFactory = (isComputer, ownGameboard) => {
  // All ships associated with the player
  let ships = [];

  let createAllShipObjects = () => {
    for (let ship in gameParamters()["ships"]) {
      ships.push(shipFactory(gameParamters()["ships"][ship]));
    }
    return ships;
  };

  let placeShips = () => {
    if (isComputer) {
      for (let ship of ships) {
        // Initial try
        let rowCoordinate = randomChoice(gameParamters().rows);
        let colCoordinate = randomChoice(gameParamters().cols);
        let orientation = randomChoice(gameParamters().orientation);

        while (
          ownGameboard.placeShip(
            rowCoordinate,
            colCoordinate,
            ship,
            orientation
          ) === false
        ) {
          rowCoordinate = randomChoice(gameParamters().rows);
          colCoordinate = randomChoice(gameParamters().cols);
          orientation = randomChoice(gameParamters().orientation);
        }
      }
    }
  };

  // Initial set up
  let initialSetUp = () => {
    // Create ships
    ships = createAllShipObjects();

    // Placeships
    placeShips();

    return true;
  };

  return { ships, initialSetUp };
};
