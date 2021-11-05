const shuffle = require("../src/shuffle");

describe("Shuffle", () => {
  const array = [1, 3, 5, 7, 1, 6, 7, 9];
  it("correctly shuffles array", () => {
    expect(shuffle(array)).toEqual(array);
  });
});
