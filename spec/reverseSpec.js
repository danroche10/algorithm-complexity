const reverse = require("../src/reverse");

describe("Reverse", () => {
  it("returns empty array when passed in empty array", () => {
    expect(reverse([])).toEqual([]);
  });

  it("return same array that was passed in if array is length 1", () => {
    expect(reverse([1])).toEqual([1]);
  });

  it("returns reversed version of array of length 2", () => {
    expect(reverse([1, 2])).toEqual([2, 1]);
  });

  it("returns reversed version of array of length 3", () => {
    expect(reverse([1, 2, 3])).toEqual([3, 2, 1]);
  });

  it("returns reversed version of array of letters", () => {
    expect(reverse(["a", "b", "c"])).toEqual(["c", "b", "a"]);
  });
});
