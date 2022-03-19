import { gameboardFactory } from "./factories/gameboard";
import { playerFactory } from "./factories/player";
import { mainDisplay } from "./components/displayAllComponents";
import { showShips } from "./components/show_ships";

let mainApp = (() => {
  // Component Display
  mainDisplay();

  // Initialize Gameboards
  let gameboard1 = gameboardFactory();
  let gameboard2 = gameboardFactory();

  // Create gameboards
  gameboard1.createGameboard();
  gameboard2.createGameboard();

  // Initialize players
  let player1 = playerFactory(true, gameboard1);
  let player2 = playerFactory(true, gameboard2);

  // Initialize Game
  player1.initialSetUp();
  player2.initialSetUp();

  showShips.controller(player1.ships);
})();
