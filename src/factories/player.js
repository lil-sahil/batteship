import { shipFactory } from "./ship";
import { gameboardCellsPlayerOne } from "../dom_manipulation/dom";
import { showShips } from "../components/show_ships";

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
      return true;
    } else if (isComputer === false) {
      let shipIndex = 0;

      gameboardCellsPlayerOne().forEach((cell) => {
        cell.addEventListener("click", (e) => {
          if (shipIndex >= ships.length) return true;
          let rowCoordinate = e.target.dataset.row;
          let colCoordinate = e.target.dataset.col;
          let orientation = "horizontal";

          if (
            ownGameboard.placeShip(
              parseInt(rowCoordinate),
              parseInt(colCoordinate),
              ships[shipIndex],
              orientation
            )
          ) {
            shipIndex++;
            showShips.controller(ships);
            console.log(shipIndex);
          }
        });
      });
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
