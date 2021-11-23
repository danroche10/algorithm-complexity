const {
  insertionSort,
  selectionSort,
  mergeSort,
} = require("../src/initial-custom-functions/fullSort");

describe("insertionSort", () => {
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

describe("fullSort", () => {
  it("returns empty array when passed an empty array", () => {
    expect(selectionSort([])).toEqual([]);
  });

  it("returns array when passed an array of length 1", () => {
    expect(selectionSort(["a"])).toEqual(["a"]);
  });

  it("returns sorted array when passed an array of length 2", () => {
    expect(selectionSort([2, 1])).toEqual([1, 2]);
  });

  it("returns sorted array when passed an array of length 3", () => {
    expect(selectionSort([3, 2, 1])).toEqual([1, 2, 3]);
  });

  it("returns sorted array when passed an array of length 5", () => {
    expect(selectionSort([3, 2, 1, 5, 4])).toEqual([1, 2, 3, 4, 5]);
  });
});

describe("mergeSort", () => {
  it("returns empty array when passed an empty array", () => {
    expect(mergeSort([])).toEqual([]);
  });

  it("returns array when passed an array of length 1", () => {
    expect(mergeSort(["a"])).toEqual(["a"]);
  });

  it("returns sorted array when passed an array of length 2", () => {
    expect(mergeSort([2, 1])).toEqual([1, 2]);
  });

  it("returns sorted array when passed an array of length 3", () => {
    expect(mergeSort([3, 2, 1])).toEqual([1, 2, 3]);
  });

  it("returns sorted array when passed an array of length 5", () => {
    expect(mergeSort([3, 2, 1, 5, 4])).toEqual([1, 2, 3, 4, 5]);
  });
});
