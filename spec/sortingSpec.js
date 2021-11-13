const sort = require("../src/initial-custom-functions/sorting");

describe("sort", () => {
  it("returns empty array when passed an empty array", () => {
    expect(sort([])).toEqual([]);
  });

  it("returns array when passed an array with one 1", () => {
    expect(sort([1])).toEqual([1]);
  });

  it("returns sorted array for length 2", () => {
    expect(sort([1, 0])).toEqual([0, 1]);
  });

  it("returns sorted array for length 5", () => {
    expect(sort([1, 0, 1, 0, 1])).toEqual([0, 0, 1, 1, 1]);
  });

  it("returns correct array when given all 0s", () => {
    expect(sort([0, 0, 0, 0, 0])).toEqual([0, 0, 0, 0, 0]);
  });

  it("returns correct array when given all 1s", () => {
    expect(sort([1, 1, 1, 1, 1])).toEqual([1, 1, 1, 1, 1]);
  });
});
