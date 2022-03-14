// parent constructor
function ShipMaker() {}

// methods of the parent
ShipMaker.prototype.hit = function hit() {
  return `My size is ${this.size}`;
};

ShipMaker.prototype.isSunk = function isSunk() {
  return "Is sunk?";
};

// static factory method
ShipMaker.factory = function factory(type) {
  const constr = type;
  let newShip = null;

  // error if the constructor doesn't exist
  if (typeof ShipMaker[constr] !== "function") {
    throw new Error(`${constr} doesn't exist`);
  }

  // inherit the parent but only once
  if (typeof ShipMaker[constr].prototype.hit !== "function") {
    ShipMaker[constr].prototype = new ShipMaker();
  }

  if (typeof ShipMaker[constr].prototype.isSunk !== "function") {
    ShipMaker[constr].prototype = new ShipMaker();
  }

  // create a new instance
  newShip = new ShipMaker[constr]();

  // optionally call some methods and then return...
  return newShip;
};

// define specific ship makers
ShipMaker.Carrier = function Carrier() {
  this.size = 5;
};

ShipMaker.Battleship = function Battleship() {
  this.size = 4;
};

const Carrier = ShipMaker.factory("Carrier");

const cord1 = "A10";
const cord2 = "A1";

console.log(cord1.slice(0, 1));
console.log(parseInt(cord1.slice(1), 10));
console.log(cord2.slice(1));
