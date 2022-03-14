import makePublisher from "../helpers/publisher";

let obj = "";
let pub = "";

const sub = {
  subFn(content) {
    return `${content}`;
  },
};

beforeEach(() => {
  obj = Object.create(null);
  pub = makePublisher(obj);
  pub.on("test", sub.subFn, sub);
});

afterEach(() => {
  jest.clearAllMocks();
});

test("check if an object becomes publisher", () => {
  const keys = Object.keys(pub);
  expect(keys).toEqual([
    "on",
    "off",
    "emit",
    "visitSubscribers",
    "subscribers",
  ]);
});

test("check if subscribers subscribe", () => {
  expect(pub.subscribers).toEqual({
    any: [],
    test: [
      {
        context: {
          subFn: sub.subFn,
        },
        fn: sub.subFn,
      },
    ],
  });
});

test("check if subscribers unsubscribe", () => {
  pub.off("test", sub.subFn, sub);
  expect(pub.subscribers).toEqual({
    any: [],
    test: [],
  });
});

test("check if publisher publishes", () => {
  const spy = jest.spyOn(sub, "subFn");
  pub.on("test", sub.subFn, sub);
  pub.emit("test", "success!");
  expect(spy).toHaveBeenCalled();
  expect(spy).toBeCalledWith("success!");
});
