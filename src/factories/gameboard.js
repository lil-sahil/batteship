// Utils
import { gameParamters } from "../utils/gameParameters";

export let gameboardFactory = () => {
  // Dimension of the gameboard
  let DIMENSIONS = {
    rows: gameParamters()["rows"].length,
    cols: gameParamters()["cols"].length,
  };

  // User selected spots
  let spotsPlayed = [];

  // Gameboard grid
  let gameboard = {};

  // Create the gameboard
  let createGameboard = () => {
    for (let i = 0; i < DIMENSIONS.rows; i++) {
      gameboard[`row_${i}`] = Array(DIMENSIONS.cols).fill("");
    }

    return gameboard;
  };

  // Place ships defined by coordinate
  let placeShip = (rowNumber, startingCol, ship, orientation = horizontal) => {
    let shipLength = ship.shipInfo["shipLength"];
    if (!isLegalPlacement(rowNumber, startingCol, shipLength, orientation))
      return false;

    // Place horizontally
    if (orientation === "horizontal") {
      let rowSlice = gameboard[`row_${rowNumber}`];
      gameboard[`row_${rowNumber}`] = rowSlice.map((el, ind) => {
        if (ind >= startingCol && ind < startingCol + shipLength) {
          ship.addShipCoordinate([rowNumber, ind]);
          return "-";
        } else {
          return "";
        }
      });
    }

    // place Vertically
    else if (orientation === "vertical") {
      for (let i = rowNumber; i < rowNumber + shipLength; i++) {
        gameboard[`row_${i}`][startingCol] = "-";
        ship.addShipCoordinate([i, startingCol]);
      }
    }

    // console.table(gameboard);
    // console.log(ship.shipInfo);

    return gameboard;
  };

  // Check if the spots taken by the ship are empty
  let isEmpty = (coordinateArray) => {
    let takenSpots = coordinateArray.filter((el) => {
      if (el === "-") {
        return el;
      }
    });

    return takenSpots.length === 0 ? true : false;
  };

  // Check if ship fits in grid and none of the spots are already taken.
  let isLegalPlacement = (
    startingRow,
    startingCol,
    shipLength,
    orientation
  ) => {
    let gameboardSpots = [];

    // Check vertical orientation
    if (orientation == "vertical") {
      // Return false if out of board
      if (startingRow + shipLength > DIMENSIONS.cols) return false;

      // get gameboard spots
      for (let i = startingRow; i < startingRow + shipLength; i++) {
        gameboardSpots.push(gameboard[`row_${i}`][startingCol]);
      }

      // Check if enough room in the vertical direction and empty spaces
      if (isEmpty(gameboardSpots)) return true;
      return false;
    }

    if (orientation === "horizontal") {
      // return false if out of board
      if (startingCol + shipLength > DIMENSIONS.rows) return false;

      for (let i = startingCol; i < startingCol + shipLength; i++) {
        gameboardSpots.push(gameboard[`row_${startingRow}`][i]);
        // console.log(gameboardSpots);
      }

      // Check if enough room in the horizontal direction and empty spaces
      if (isEmpty(gameboardSpots)) return true;
      return false;
    }
  };

  // User Attack
  let attack = (rowNumber, colNumber, allShips) => {
    // Check if user has already played the spot.
    for (let spot of spotsPlayed) {
      if (spot[0] === rowNumber && spot[1] === colNumber) return false;
    }

    for (let ship of allShips) {
      for (let coordinate of ship.shipInfo["shipCoordinates"]) {
        if (coordinate[0] === rowNumber && coordinate[1] === colNumber) {
          ship.recieveAttack();
        }
      }
    }

    // Add the spot to the spotsplayed list
    spotsPlayed.push([rowNumber, colNumber]);
  };

  // Determine if all ships have sunk
  let allSunk = (allShips) => {
    let initialVal = 0;
    let counter = allShips.reduce((prev, cur) => {
      if (cur.shipInfo["isSunk"] === true) return (prev += 1);
      if (cur.shipInfo["isSunk"] === false) return (prev -= 1);
    }, initialVal);

    return counter <= 0 ? false : true;
  };

  return { createGameboard, placeShip, attack, spotsPlayed, allSunk };
};
