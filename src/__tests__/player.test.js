import Player from "../factories/player";
import alphabets from "../helpers/alphabets";

describe("Player Class Test", () => {
  test("player should make its own game board", () => {
    const test = new Player();
    const board = [];
    for (let x = 0; x < 10; x += 1) {
      const row = [];
      board.push(row);
      for (let y = 0; y < 10; y += 1) {
        const cellData = {
          cord: `${alphabets[x]}${y + 1}`,
          ship: null,
          isHit: false,
          isMissed: false,
        };
        row.push(cellData);
      }
    }
    expect(test.gameBoard.board).toEqual(board);
  });

  test("player should know its enemy game board", () => {
    const test1 = new Player();
    const test2 = new Player();
    test1.assignEnemyGameBoard(test2.gameBoard);
    test2.assignEnemyGameBoard(test1.gameBoard);
    const board = [];
    for (let x = 0; x < 10; x += 1) {
      const row = [];
      board.push(row);
      for (let y = 0; y < 10; y += 1) {
        const cellData = {
          cord: `${alphabets[x]}${y + 1}`,
          ship: null,
          isHit: false,
          isMissed: false,
        };
        row.push(cellData);
      }
    }
    expect(test1.enemyGameBoard.board).toEqual(board);
    expect(test2.enemyGameBoard.board).toEqual(board);
  });

  test("attack() should attack enemy game board", () => {
    const test1 = new Player();
    const test2 = new Player();
    test1.assignEnemyGameBoard(test2.gameBoard);
    test2.assignEnemyGameBoard(test1.gameBoard);
    test1.attack("A1");
    expect(test2.gameBoard.missed).toEqual(["A1"]);
    test2.attack("B4");
    expect(test1.gameBoard.missed).toEqual(["B4"]);
  });

  test("aiAttacks should not repeat", () => {
    const test1 = new Player("ai");
    const test2 = new Player();
    test1.assignEnemyGameBoard(test2.gameBoard);
    test2.assignEnemyGameBoard(test1.gameBoard);
    for (let i = 0; i < 100; i += 1) {
      test1.aiAttack();
    }
    expect(test1.aiAttacks.length).toBe(0);
    const test2Board = test2.gameBoard.board.flat();
    test2Board.every((tile) => expect(tile.isMissed).toBe(true));
  });
});
