import { titleComponent } from "./title";
import { gameboardComponent } from "./gameboard_grid";

export let mainDisplay = () => {
  titleComponent.renderComponent();

  gameboardComponent.renderComponent();
};
