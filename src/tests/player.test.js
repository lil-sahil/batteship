import { playerFactory } from "../factories/player";
import { gameboardFactory } from "../factories/gameboard";

// Create all ships
test("Create all Ships", () => {
  let compGame = gameboardFactory();
  compGame.createGameboard();

  let computerPlayer = playerFactory(true, compGame);

  expect(computerPlayer.initialSetUp()).toBe(true);
});
