export let gameboardFactory = () => {
  // Dimension of the gameboard
  let DIMENSIONS = {
    rows: 10,
    cols: 10,
  };

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
  let placeShip = (
    rowNumber,
    startingCol,
    shipLength,
    orientation = horizontal
  ) => {
    rowSlice = gameboard[`row_${rowNumber}`];

    if (!isLegalPlacement(rowNumber, startingCol, shipLength, orientation))
      return;

    gameboard[`row_${rowNumber}`] = rowSlice.map((el, ind) => {
      if (ind >= startingCol && ind <= startingCol + shipLength) {
        return "-";
      }
    });

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
      // get gameboard spots

      for (let i = startingRow; i < startingRow + shipLength; i++) {
        gameboardSpots.push(gameboard[`row_${i}`][startingCol]);
      }

      // Check if enough room in the vertical direction and empty spaces
      if (startingRow + shipLength < DIMENSIONS.cols && isEmpty(gameboardSpots))
        return true;
      return false;
    }

    if (orientation === "horizontal") {
      for (let i = startingCol; i < startingCol + shipLength; i++) {
        gameboardSpots.push(gameboard[`row_${i}`][startingCol]);
      }

      // Check if enough room in the horizontal direction and empty spaces
      if (startingCol + shipLength < DIMENSIONS.rows && isEmpty(gameboardSpots))
        return true;
      else false;
    }
  };

  return { createGameboard, placeShip };
};
