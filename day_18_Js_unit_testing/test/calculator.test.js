const { calculator } = require("../src/calculator");

describe("test calculator", () => {
  test("test the number params", () => {
    expect(() => calculator("1", 1, "+")).toThrow();
    expect(() => calculator(1, "1", "+")).toThrow();
  });

  test("check operators operation", () => {
    const operators = ["+", "-", "*", "/"];

    operators.forEach((operator) => {
      const res = calculator(2, 3, operator);

      expect(res).toBe(eval(`2 ${operator} 3`));
    });
  });

  test("valid operator", () => {
    const res = calculator(2, 3, "a");

    expect(res).toMatchObject({
      message: "invalid operator!",
      success: false,
    });
  });
});
