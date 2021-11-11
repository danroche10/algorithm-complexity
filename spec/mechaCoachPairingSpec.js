const mechaCoachPairing = require("../src/mechaCoachPairing");

fdescribe("mechaCoachPairing", () => {
  it("returns empty array when receives empty array", () => {
    expect(mechaCoachPairing([])).toEqual([]);
  });

  it("returns one array within array when it receives two names", () => {
    expect(mechaCoachPairing(["Bob", "Alice"])).toEqual([["Alice", "Bob"]]);
  });

  it("returns correct array of arrays when it receives three names", () => {
    expect(mechaCoachPairing(["Bob", "Alice", "Margaret"])).toEqual([
      ["Margaret", "Alice"],
      ["Margaret", "Bob"],
      ["Alice", "Bob"],
    ]);
  });

  it("returns correct array of arrays when it receives four names", () => {
    expect(mechaCoachPairing(["Bob", "Alice", "Margaret", "Barry"])).toEqual([
      ["Barry", "Margaret"],
      ["Barry", "Alice"],
      ["Barry", "Bob"],
      ["Margaret", "Alice"],
      ["Margaret", "Bob"],
      ["Alice", "Bob"],
    ]);
  });
});
