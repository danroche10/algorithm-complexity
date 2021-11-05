const shuffle = require("../src/shuffle");

describe("Shuffle", () => {
  const array = [1, 3, 5];
  it("correctly shuffles array", () => {
    expect(shuffle([])).toEqual([]);
  });

  it("correctly shuffles array", () => {
    expect(shuffle(array)).toEqual(array);
  });
});
