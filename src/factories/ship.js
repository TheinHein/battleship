export default class Ship {
  constructor(cords, type) {
    this.loc = cords;
    this.type = type;
    this.sunk = false;
  }

  hit(cord) {
    this.loc = this.loc.map((pos) => {
      let at = pos;
      if (at === cord) {
        at = `${cord}-hit`;
      }
      return at;
    });
    this.isSunk();
  }

  isSunk() {
    if (this.loc.every((pos) => pos.includes("hit"))) this.sunk = true;
    else this.sunk = false;
  }
}
