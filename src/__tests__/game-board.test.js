import GameBoard from "../factories/game-board";
import alphabets from "../helpers/alphabets";
import fleet from "../helpers/fleet";

test("check game board make a new game board", () => {
  const board = [
    [
      { cord: "A1", ship: null, isHit: false, isMissed: false },
      { cord: "A2", ship: null, isHit: false, isMissed: false },
    ],
    [
      { cord: "B1", ship: null, isHit: false, isMissed: false },
      { cord: "B2", ship: null, isHit: false, isMissed: false },
    ],
  ];
  const test = new GameBoard(board.length);
  expect(test.board).toEqual(board);
});

test("check ships are placed at correct tiles on board for horizontal", () => {
  const test = new GameBoard(10);
  const cords = ["A1", "A2", "A3", "A4", "A5"];
  const type = "Carrier";
  const carrier = { loc: cords, type, sunk: false };
  test.placeShip("A1", 5, "X", "Carrier");
  for (let i = 0; i < cords.length; i += 1) {
    expect(test.board[0][i].ship).not.toBeNull();
    expect(test.board[0][i].ship).toEqual(carrier);
  }
  expect(test.ships.Carrier).toEqual(carrier);
});

test("check ships are placed at correct tiles on board for vertically", () => {
  const test = new GameBoard(10);
  const cord = "A1";
  const len = 5;
  const dir = "Y";
  const cords = ["A1", "B1", "C1", "D1", "E1"];
  const type = "Carrier";
  const carrier = { loc: cords, type, sunk: false };
  test.placeShip(cord, len, dir, type);
  for (let i = 0; i < cords.length; i += 1) {
    expect(test.board[i][0].ship).not.toBeNull();
    expect(test.board[i][0].ship).toEqual(carrier);
  }
  expect(test.ships.Carrier).toEqual(carrier);
});

test("check error if out of boundary for horizontal", () => {
  const test = new GameBoard(10);
  const cord = "A7";
  const len = 5;
  const dir = "X";
  expect(() => test.placeShip(cord, len, dir)).toThrow("Out of Boundary");
});

test("check error if out of boundary for vertical", () => {
  const test = new GameBoard(10);
  const cord = "G5";
  const len = 5;
  const dir = "Y";
  expect(() => test.placeShip(cord, len, dir)).toThrow("Out of Boundary");
});

test("check error if ship already exists", () => {
  const cord = "G5";
  const len = 5;
  const dir = "X";
  const test = new GameBoard(10);
  test.placeShip(cord, len, dir, "Carrier");
  const newCord = "G5";
  const newLen = 4;
  expect(() => test.placeShip(newCord, newLen, dir, "Battleship")).toThrow(
    "Ship already exists"
  );
});

test("check ship and tile if attack hits a ship", () => {
  const test = new GameBoard(10);
  test.placeShip("C1", 5, "X", "Carrier");
  test.receiveAttack("C2");
  const loc = ["C1", "C2-hit", "C3", "C4", "C5"];
  expect(test.board[2][1].ship.loc).toEqual(loc);
  expect(test.board[2][1].isHit).toBe(true);
});

test("check missed record if attack misses a ship", () => {
  const test = new GameBoard(10);
  test.placeShip("C1", 5, "X", "Carrier");
  test.receiveAttack("D2");
  test.receiveAttack("E5");
  test.receiveAttack("G4");
  const missed = ["D2", "E5", "G4"];
  expect(test.missed).toEqual(missed);
});

test("check all five ships are placed randomly", () => {
  const test = new GameBoard(10);
  test.placeShipsRandomly(fleet);
  const totalShips = Object.keys(test.ships).length;
  expect(totalShips).toBe(fleet.length);
});

test("checkAllSunk() should report whether or not all of their ships have been sunk", () => {
  const test = new GameBoard(10);
  test.placeShipsRandomly(fleet);
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      test.receiveAttack(`${alphabets[i]}${j + 1}`);
    }
  }
  const ships = Object.keys(test.ships);
  ships.forEach((ship) => {
    test.ships[ship].loc.every((pos) => expect(pos.includes("hit")).toBe(true));
  });
  expect(test.checkAllSunk()).toBe(true);
});
