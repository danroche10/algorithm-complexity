const findDuplicates = require("../src/findDuplicates");

describe("findDuplicates", () => {
  it("returns empty array when passed an empty array", () => {
    expect(findDuplicates([])).toEqual([]);
  });
  it("returns empty array when passed an array of length 1 with no duplicates", () => {
    console.log(findDuplicates(["dan"]));
    expect(findDuplicates(["dan"])).toEqual([]);
  });

  it("returns empty array when passed an array of length 2 with no duplicates", () => {
    expect(findDuplicates(["dan", "text"])).toEqual([]);
  });

  it("returns array of duplicates for one word duplicatd in array of length 3", () => {
    expect(findDuplicates(["dan", "text", "dan"])).toEqual(["dan"]);
  });

  it("returns array of duplicates for multiple words duplicatd", () => {
    expect(findDuplicates([1, 2, 1, 3, 4, 3, 5])).toEqual([1, 3]);
  });
});
