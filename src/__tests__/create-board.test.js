import createBoard from "../helpers/create-board";

test("check a new board is created", () => {
  const test = createBoard(10);
  expect(test.flat().length).toBe(100);
});
