import { titleSection } from "../dom_manipulation/dom";

export let titleComponent = (() => {
  let controller = () => {
    let mainTitle = "BattleShip";
    let mainDiv = document.createElement("div");

    mainDiv.textContent = mainTitle;

    return mainDiv;
  };

  let renderComponent = () => {
    titleSection.appendChild(controller());
  };

  return { renderComponent };
})();
