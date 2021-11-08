const mostCommonWords = require("../src/mostCommonWords");

describe("mostCommonWords", () => {
  it("returns empty array when passed empty array", () => {
    expect(mostCommonWords([])).toEqual([]);
  });

  it("returns correct array when passed array of one word", () => {
    expect(mostCommonWords(["dan"])).toEqual(["dan"]);
  });

  it("returns correct array when passed array of two words", () => {
    expect(mostCommonWords(["dan", "test"])).toEqual(["dan", "test"]);
  });

  it("returns correct array when passed array of length three containing two different words", () => {
    expect(mostCommonWords(["dan", "test", "dan"])).toEqual(["dan", "test"]);
  });

  it("returns correct array when passed array of length give containing three different words", () => {
    expect(mostCommonWords(["dan", "test", "dan", "test", "word"])).toEqual([
      "dan",
      "test",
    ]);
  });
});
