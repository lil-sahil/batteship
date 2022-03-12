export let shipFactory = (shipLength) => {
  let shipInfo = {
    shipLength: shipLength,
    isSunk: false,
    shipCoordinates: [],
    hitsTaken: 0,
  };

  // Check if the ship has sunk
  let isSunk = () => {
    if (shipInfo.hitsTaken >= shipLength) {
      shipInfo["isSunk"] = true;
      return true;
    }
    return false;
  };

  // Recieve attack
  let recieveAttack = () => {
    shipInfo.hitsTaken += 1;
    isSunk();
  };

  // Add shipCoordinates after placement
  let addShipCoordinate = (arr) => {
    shipInfo["shipCoordinates"].push(arr);
  };

  return {
    shipInfo,
    addShipCoordinate,
    isSunk,
    recieveAttack,
  };
};

export let shipAttributes = () => {
  return {
    carrier: 5,
    Battleship: 4,
    Cruiser: 3,
    Submarine: 3,
    Destroyer: 2,
  };
};
