export let shipFactory = (shipLength) => {
  // Initialize Ship
  let ship = [];
  for (let i = 0; i < shipLength; i++) {
    ship.push("");
  }

  // Register the hit on ship by location
  let registerHit = (hitLocation) => {
    // if the hitlocation is already marked exit
    if (ship[hitLocation] === "X") return;

    // If not already marked then mark it with an X
    ship[hitLocation] = "X";
  };

  // Check if the ship has sunk
  let isSunk = () => {
    console.log(ship);
    const initialVal = 0;
    let checkhits = ship.reduce((prevVal, currVal) => {
      if (currVal === "X") {
        prevVal += 1;
        return prevVal;
      }
      return prevVal;
    }, initialVal);

    if (checkhits < ship.length) {
      return false;
    } else {
      return true;
    }
  };

  // helper functions only used for testing.
  let setShip = (shipArray) => {
    ship = shipArray;
  };

  let getShip = () => {
    return ship;
  };

  return { registerHit, isSunk, setShip, getShip };
};
