const insertionSort = require("../src/initial-custom-functions/fullSort");

describe("fullSort", () => {
  it("returns empty array when passed an empty array", () => {
    expect(insertionSort([])).toEqual([]);
  });

  it("returns array when passed an array of length 1", () => {
    expect(insertionSort(["a"])).toEqual(["a"]);
  });

  it("returns sorted array when passed an array of length 2", () => {
    expect(insertionSort([2, 1])).toEqual([1, 2]);
  });

  it("returns sorted array when passed an array of length 3", () => {
    expect(insertionSort([3, 2, 1])).toEqual([1, 2, 3]);
  });

  it("returns sorted array when passed an array of length 5", () => {
    expect(insertionSort([3, 2, 1, 5, 4])).toEqual([1, 2, 3, 4, 5]);
  });
});
