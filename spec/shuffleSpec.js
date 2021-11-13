const shuffle = require("../src/initial-custom-functions/shuffle");

describe("Shuffle", () => {
  const array = [1, 3, 5];
  it("correctly shuffles array", () => {
    expect(shuffle([])).toEqual([]);
  });

  it("correctly shuffles array", () => {
    expect(shuffle(array).length).toEqual(3);
  });
});
