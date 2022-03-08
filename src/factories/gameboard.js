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
  };

  // Place ships defined by coordinate
  let placeShip = (rowNumber, startingCol, shipLength) => {
    rowSlice = gameboard[`row_${rowNumber}`];

    if (!isLegalPlacement(rowSlice.length, startingCol, shipLength)) return;

    gameboard[`row_${rowNumber}`] = rowSlice.map(el, (ind) => {
      if (ind >= startingCol && ind <= startingCol + shipLength) {
        return "-";
      }
    });
  };

  // Check if ship fits in grid and none of the spots are already taken.
  let isLegalPlacement = (rowLength, startingCol, shipLength) => {
    return true;
  };
};
