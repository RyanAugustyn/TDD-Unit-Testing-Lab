import {
  addTwoNumbers,
  subtractTwoNumbers,
  divideTwoNumbers,
  multiplyTwoNumbers,
} from "./mathFunctions";

describe("Math Functions", () => {
  //Add Tests
  describe("add", () => {
    it("should add two numbers 1 + 1", () => {
      expect(addTwoNumbers(1, 1)).toBe(2);
    });
    it("should say invalid Input", () => {
      expect(() => addTwoNumbers(4, "hello")).toThrow("Invalid Input");
    });
  });

  //Subtract Tests
  describe("subtract", () => {
    it("should subtract two numbers 3-1", () => {
      expect(subtractTwoNumbers(3, 2)).toBe(1);
    });
    it("should throw an error if input NaN", () => {
      expect(() => subtractTwoNumbers(4, "hello")).toThrow("Invalid Input");
    });
  });

  //Multiply Tests
  describe("multiply", () => {
    it("should multiply 2,5 to get 10", () => {
      expect(multiplyTwoNumbers(2, 5)).toBe(10);
    });
    it("should throw error if input NaN", () => {
      expect(() => multiplyTwoNumbers(3, "toaaster")).toThrow("Invalid Input");
    });
  });

  //Divide Tests
  describe("divide", () => {
    it("should dive 21 and 7 to get 3", () => {
      expect(divideTwoNumbers(21, 7)).toBe(3);
    });
    it("throw error if dividing by 0", () => {
      expect(() => divideTwoNumbers(21, 0)).toThrow(
        "Error, can't divide by zero"
      );
    });
  });
});
