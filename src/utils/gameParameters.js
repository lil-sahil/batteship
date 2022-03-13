export let gameParamters = () => {
  let rows = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let cols = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  let ships = {
    carrier: 5,
    Battleship: 4,
    Cruiser: 3,
    Submarine: 3,
    Destroyer: 2,
  };

  let orientation = ["horizontal", "vertical"];

  return { rows, cols, ships, orientation };
};
