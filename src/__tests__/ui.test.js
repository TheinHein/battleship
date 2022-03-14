/**
 * @jest-environment jsdom
 */

import ui from "../dom/ui";
import GameBoard from "../factories/game-board";

afterEach(() => {
  jest.clearAllMocks();
});

test("check if game board is appended", () => {
  document.body.innerHTML = `<div class="p1-container"></div>`;
  const appendTo = document.querySelector(".p1-container");
  const board = new GameBoard(10);
  const spy = jest.spyOn(appendTo, "appendChild");
  ui.renderBoard({ appendTo, boardData: board.board });
  expect(spy).toHaveBeenCalled();
});

test("check if game board is appended only once", () => {
  document.body.innerHTML = `<div class="p1-container"></div>`;
  const appendTo = document.querySelector(".p1-container");
  const board = new GameBoard(10);
  const spy = jest.spyOn(appendTo, "appendChild");
  ui.renderBoard({ appendTo, boardData: board.board });
  ui.renderBoard({ appendTo, boardData: board.board });
  expect(spy).toHaveBeenCalled();
  expect(appendTo.childElementCount).toBe(1);
});
