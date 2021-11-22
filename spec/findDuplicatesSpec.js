const findDuplicates = require("../src/initial-custom-functions/findDuplicates");
const secondFindDuplicates = require("../src/improved-custom-functions/secondFindDuplicates");

describe("findDuplicates", () => {
  it("returns empty array when passed an empty array", () => {
    expect(findDuplicates([])).toEqual([]);
  });
  it("returns empty array when passed an array of length 1 with no duplicates", () => {
    expect(findDuplicates(["dan"])).toEqual([]);
  });

  it("returns empty array when passed an array of length 2 with no duplicates", () => {
    expect(findDuplicates(["dan", "text"])).toEqual([]);
  });

  it("returns array of duplicates for one word duplicatd in array of length 3", () => {
    expect(findDuplicates(["dan", "text", "dan"])).toEqual(["dan"]);
  });

  it("returns array of duplicates for multiple elements duplicatd", () => {
    expect(findDuplicates([1, 2, 1, 3, 4, 3, 5])).toEqual([1, 3]);
  });

  it("returns array of duplicates when element is duplicated 3 times", () => {
    expect(findDuplicates([1, 2, 1, 3, 1, 3, 5])).toEqual([1, 3]);
  });

  it("returns array of duplicates when one element is duplicated 5 times", () => {
    expect(findDuplicates([1, 1, 1, 1, 1])).toEqual([1]);
  });
});

describe("secondFindDuplicates", () => {
  it("returns empty array when passed an empty array", () => {
    expect(secondFindDuplicates([])).toEqual([]);
  });
  it("returns empty array when passed an array of length 1 with no duplicates", () => {
    expect(secondFindDuplicates(["dan"])).toEqual([]);
  });

  it("returns empty array when passed an array of length 2 with no duplicates", () => {
    expect(secondFindDuplicates(["dan", "text"])).toEqual([]);
  });

  it("returns array of duplicates for one word duplicatd in array of length 3", () => {
    expect(secondFindDuplicates(["dan", "text", "dan"])).toEqual(["dan"]);
  });

  it("returns array of duplicates for multiple elements duplicatd", () => {
    expect(secondFindDuplicates([1, 2, 1, 3, 4, 3, 5])).toEqual([1, 3]);
  });

  it("returns array of duplicates when element is duplicated 3 times", () => {
    expect(secondFindDuplicates([1, 2, 1, 3, 1, 3, 5])).toEqual([1, 3]);
  });

  it("returns array of duplicates when one element is duplicated 5 times", () => {
    expect(secondFindDuplicates([1, 1, 1, 1, 1])).toEqual([1]);
  });
});
