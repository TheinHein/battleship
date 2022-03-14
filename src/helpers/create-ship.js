import Ship from "../factories/ship";

function createShip(cords, type) {
  const ship = new Ship(cords, type);
  return ship;
}

export default createShip;
