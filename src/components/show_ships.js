import { gameboardCellsPlayerOne } from "../dom_manipulation/dom";

export let showShips = (() => {
  let controller = (ships) => {
    for (let ship of ships) {
      for (let coordinate of ship.shipInfo["shipCoordinates"]) {
        gameboardCellsPlayerOne().forEach((i) => {
          if (
            parseInt(i.dataset.row) === coordinate[0] &&
            parseInt(i.dataset.col) === coordinate[1]
          ) {
            i.textContent = "X";
          }
        });
      }
    }
  };

  return { controller };
})();
