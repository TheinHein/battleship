import Ship from "../factories/ship";
import createShip from "../helpers/create-ship";

jest.mock("../factories/ship");

beforeEach(() => {
  Ship.mockClear();
});

test("check Ship class gets call", () => {
  const cords = ["A1", "A2", "A3", "A4", "A5"];
  const type = "Carrier";
  createShip(cords, type);
  expect(Ship).toHaveBeenCalledTimes(1);
});
