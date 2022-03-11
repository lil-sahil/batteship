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
      return true;
    }
    return false;
  };

  // Recieve attack
  let recieveAttack = () => {
    shipInfo.hitsTaken += 1;
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
