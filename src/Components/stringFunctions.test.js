import {
  capitalizeFirstLetter,
  concatenateTwoStrings,
  capitalizeSecondWord,
} from "./stringFunctions";

describe("string functions", () => {
  //capitalize first letter
  describe("capitalize first letter", () => {
    it("should take string 'dog' and capitalze the 'd'", () => {
      expect(capitalizeFirstLetter("dog")).toBe("Dog");
    });
    it("should fail if not a string", () => {
      expect(() => capitalizeFirstLetter(234)).toThrow("Invalid Input");
    });
  });
  //concatenate two strings
  describe("concatenate two strings", () => {
    it("should take strings 'hat' and 'rack' to make 'hatrack'", () => {
      expect(concatenateTwoStrings("hat", "rack")).toBe("hatrack");
    });
    it("should not accept numbers as args", () => {
      expect(() => concatenateTwoStrings("hat", 2)).toThrow("Invalid Input");
    });
  });
  //capitalize second word
  describe("capitalize the second word", () => {
    it("should take a string and return the 2nd word capitalized", () => {
      expect(capitalizeSecondWord("The house boat")).toBe("The House boat");
    });
    it("should not accept numbers as args", () => {
      expect(() => capitalizeSecondWord(234)).toThrow("Invalid Input");
    });
  });
});
