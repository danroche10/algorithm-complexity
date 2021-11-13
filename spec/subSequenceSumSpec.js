const subSequenceSum = require("../src/initial-custom-functions/subSequenceSum");

describe("subSequenceSum", () => {
  it("returns true when array contains only the target number", () => {
    expect(subSequenceSum([1], 1)).toEqual(true);
  });

  it("returns true when array of three numbers contains only the target number", () => {
    expect(subSequenceSum([1, 2, 10], 10)).toEqual(true);
  });

  it("returns true when array of three numbers add up to target number", () => {
    expect(subSequenceSum([1, 2, 7], 10)).toEqual(true);
  });

  it("returns true when second two of three numbers add up to target number", () => {
    expect(subSequenceSum([7, 3, 1], 10)).toEqual(true);
  });

  it("returns true when second two of three numbers add up to target number", () => {
    expect(subSequenceSum([1, 3, 7], 10)).toEqual(true);
  });

  it("returns true when middle two numbers of four add up to target number", () => {
    expect(subSequenceSum([1, 3, 7], 10)).toEqual(true);
  });

  it("returns true when two middle numbers of 10 add up to target number", () => {
    expect(subSequenceSum([1, 7, 1, 8, 1, 1, 4, 11, 1, 2], 10)).toEqual(true);
  });

  it("returns false when no sequences add up to target in array of 5", () => {
    expect(subSequenceSum([1, 7, 1, 8, 3], 10)).toEqual(false);
  });

  it("returns false when no sequences add up to target in array of 5", () => {
    expect(subSequenceSum([40, 20, 4, 2, 3], 67)).toEqual(false);
  });

  it("returns true when middles sequence adds up to target in array of 10", () => {
    expect(subSequenceSum([1, 2, 70, 40, 20, 4, 2, 1, 50, 40], 67)).toEqual(
      true
    );
  });
});
