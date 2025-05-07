const { emit } = require("process");
const {
  checkNumber,
  sayHello,
  array,
  Undefined,
  obj,
  logIn,
} = require("../src/app");

describe("checkNumber", () => {
  test("get a positive number and return the number itself", () => {
    const res = checkNumber(2);
    expect(res).toBe(2);
  });

  test("get a negative number and return 0", () => {
    const res = checkNumber(-2);
    expect(res).toBe(0);
  });

  test("get a 0 and return  0", () => {
    const res = checkNumber(0);
    expect(res).toBe(0);
  });
});

describe("say hello", () => {
  test("get a word as param and return hello + the word", () => {
    const res = sayHello("gogo");
    expect(res).toContain("gogo");
  });
});

describe("array of info", () => {
  test("", () => {
    const res = array("sobhi", "egbaria", "gogo", "201111");
    expect(res).toEqual(
      expect.arrayContaining(["sobhi", "egbaria", "gogo", "201111"])
    );
    expect(res).toHaveLength(4);
    expect(res).toBeDefined();
    expect(res).not.toBeNull();
  });
});

describe("function return undefined", () => {
  test("", () => {
    const res = Undefined();
    expect(res).toBeUndefined();
  });
});

describe("function return obj must have name and id ", () => {
  test("", () => {
    const res = obj({ name: "aaa", id: 300, family: "egbaria" });
    expect(res).toMatchObject({ name: "aaa", id: 300 });
    expect(res).toHaveProperty("id");
    expect(res).toHaveProperty("name");
  });
});

describe("check valid email", () => {
  // when we do a test for exception we should use callback in the expect().

  test("throw err if the email if falsy", () => {
    const falsyValue = [0, null, "", undefined, NaN, false];

    falsyValue.forEach((value) => {
      expect(() => logIn(value)).toThrow();
    });
  });

  test("throw err if the email if falsy", () => {
    const res = logIn("gogo@gmail.com");

    expect(res).toMatchObject({ email: "gogo@gmail.com" });
    expect(res.id).toBeDefined();
    expect(res.id).toBeGreaterThan(0);
  });
});
