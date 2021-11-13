const fibonacci = require("../src/initial-custom-functions/fibonacci");

describe("fibonacci", () => {
  it("returns empty array when passed 0", () => {
    expect(fibonacci(0)).toEqual([]);
  });
  it("returns correct array when passed 1", () => {
    expect(fibonacci(1)).toEqual([0]);
  });
  it("returns correct array when passed 2", () => {
    expect(fibonacci(2)).toEqual([0, 1]);
  });
  it("returns correct array when passed 3", () => {
    expect(fibonacci(3)).toEqual([0, 1, 1]);
  });

  it("returns correct array when passed 10", () => {
    expect(fibonacci(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  });
});
