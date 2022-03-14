import Ship from "../factories/ship";

describe("Ship Test", () => {
  let ship = "";
  let cords = "";
  let type = "";

  beforeEach(() => {
    type = "Carrier";
    cords = ["A1", "A2", "A3", "A4", "A5"];
    ship = new Ship(cords, type);
  });

  test("check ship class makes a new ship", () => {
    expect(ship.type).toBe(type);
    expect(ship.loc).toEqual(cords);
    expect(ship.sunk).toBe(false);
  });

  test("check hit actually hit the target of the ship", () => {
    const attacks = ["A1", "A2", "A3", "A4"];
    for (let i = 0; i < attacks.length; i += 1) {
      ship.hit(attacks[i]);
      expect(ship.loc[i]).toBe(`${cords[i]}-hit`);
    }
  });

  test("check the ship is not sunk", () => {
    const attacks = ["A1", "A2", "A3", "A4"];
    for (let i = 0; i < attacks.length; i += 1) {
      ship.hit(attacks[i]);
      expect(ship.loc[i]).toBe(`${cords[i]}-hit`);
    }
    expect(ship.sunk).toBe(false);
  });

  test("check the ship is sunk", () => {
    const attacks = ["A1", "A2", "A3", "A4", "A5"];
    for (let i = 0; i < attacks.length; i += 1) {
      ship.hit(attacks[i]);
      expect(ship.loc[i]).toBe(`${cords[i]}-hit`);
    }
    expect(ship.sunk).toBe(true);
  });
});
