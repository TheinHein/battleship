import createBoard from "../helpers/create-board";
import alphabets from "../helpers/alphabets";
import createShip from "../helpers/create-ship";
import generateRandom from "../helpers/generate-random";

export default class GameBoard {
  constructor(size) {
    this.board = createBoard(size);
    this.ships = {};
    this.occupied = [];
    this.missed = [];
  }

  placeShip(firstCord, len, dir, type, size = 10) {
    if (firstCord.length === 0) return;
    const x = firstCord.slice(0, 1);
    const y = parseInt(firstCord.slice(1), 10);
    const cords = [];
    for (let i = 0; i < len; i += 1) {
      if (dir === "X") {
        if (y - 1 > 10 - len) throw new Error("Out of Boundary");
        cords.push(`${x}${y + i}`);
      } else if (dir === "Y") {
        const xIndex = alphabets.indexOf(x);
        if (xIndex > size - len) throw new Error("Out of Boundary");
        const alphabet = alphabets[xIndex + i];
        cords.push(`${alphabet}${y}`);
      }
      if (this.occupied.includes(cords[i]))
        throw new Error("Ship already exists");
    }
    const ship = createShip(cords, type);
    if (typeof this.ships[type] === "undefined") this.ships[type] = ship;
    this.board.map((row) =>
      row.map((tile) => {
        const at = tile;
        if (cords.includes(at.cord)) at.ship = ship;
        return at;
      })
    );
    this.occupied.push(...cords);
  }

  receiveAttack(cord) {
    const found = this.board.flat().find((tile) => tile.cord === cord);
    if (found.ship !== null) {
      found.ship.hit(cord);
      found.isHit = true;
    } else {
      found.isMissed = true;
      this.missed.push(cord);
    }
  }

  generateRandomPlacement(len, totalShips, type) {
    const { randCord, randDir } = generateRandom();
    const firstCord = randCord;
    const dir = randDir;
    try {
      this.placeShip(firstCord, len, dir, type);
    } catch (e) {
      if (!(e instanceof Error)) throw Error;
    }
    while (Object.keys(this.ships).length < totalShips)
      this.generateRandomPlacement(len, totalShips, type);
  }

  placeShipsRandomly(fleet) {
    for (let i = 0; i < fleet.length; i += 1)
      this.generateRandomPlacement(fleet[i].len, i + 1, fleet[i].type);
  }

  checkAllSunk() {
    let totalSunk = 0;
    const ships = Object.keys(this.ships);
    ships.forEach((ship) => {
      if (this.ships[ship].sunk === true) totalSunk += 1;
    });
    if (totalSunk === ships.length) return true;
    return false;
  }
}
