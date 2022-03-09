import { gameboardFactory } from "../factories/gameboard";

// Create Gameboard
test("Create Gameboard", () => {
  let answer = {
    row_0: ["", "", "", "", "", "", "", "", "", ""],
    row_1: ["", "", "", "", "", "", "", "", "", ""],
    row_2: ["", "", "", "", "", "", "", "", "", ""],
    row_3: ["", "", "", "", "", "", "", "", "", ""],
    row_4: ["", "", "", "", "", "", "", "", "", ""],
    row_5: ["", "", "", "", "", "", "", "", "", ""],
    row_6: ["", "", "", "", "", "", "", "", "", ""],
    row_7: ["", "", "", "", "", "", "", "", "", ""],
    row_8: ["", "", "", "", "", "", "", "", "", ""],
    row_9: ["", "", "", "", "", "", "", "", "", ""],
  };
  expect(gameboardFactory().createGameboard()).toEqual(answer);
});
