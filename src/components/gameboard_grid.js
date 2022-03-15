import { gameParamters } from "../utils/gameParameters";
import { playerOneSection } from "../dom_manipulation/dom";
import { playerTwoSection } from "../dom_manipulation/dom";

export let gameboardComponent = (() => {
  let controller = () => {
    let gameboardDiv = document.createElement("div");
    gameboardDiv.classList.add("gameboard");

    let rows = gameParamters().rows;
    let cols = gameParamters().cols;

    for (let r of rows) {
      for (let c of cols) {
        let gameCell = document.createElement("div");
        gameCell.classList.add("gameboard-cell");
        gameCell.setAttribute("data-row", r);
        gameCell.setAttribute("data-col", c);

        gameboardDiv.appendChild(gameCell);
      }
    }

    return gameboardDiv;
  };

  let renderComponent = () => {
    // Create gameboard grid for player1
    playerOneSection.appendChild(controller());

    // Create gameboard grid for player2
    playerTwoSection.appendChild(controller());
  };

  return { renderComponent };
})();
