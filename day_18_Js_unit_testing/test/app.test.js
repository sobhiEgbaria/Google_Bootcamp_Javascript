const { describe } = require("node:test");
const {
  checkNumber,
  sayHello,
  array,
  Undefined,
  obj,
  logIn,
  sum,
  getData,
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
  test("check sum function", () => {
    const res = sum(1, 2);
    expect(res).toBe(3);
  });
});

describe("say hello", () => {
  test("get a word as param and return hello + the word", () => {
    const res = sayHello("gogo");
    expect(res).toContain("gogo");
    expect(res).toMatch("gogo");
  });
});

//array testing:
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

// test for objects:
describe("function return obj must have name and id ", () => {
  test("", () => {
    const res = obj({ name: "aaa", id: 300, family: "egbaria" });
    expect(res).toMatchObject({ name: "aaa", id: 300 });
    expect(res).toHaveProperty("id");
    expect(res).toHaveProperty("name");
  });
});

// test for errors:
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

/// Setup Functions:
describe("Setup Functions", () => {
  beforeAll(() => {
    // it's run once before all tests start
    // connectToDB();
  });

  afterAll(() => {
    // it's run once after all tests finish
    // disconnect();
  });

  beforeEach(() => {
    // it's run before each test
  });

  afterEach(() => {
    // it's run after each test
  });

  test("test 1", () => {});
  test("test 2", () => {});
  test("test 3", () => {});
});

// test async and use mock data:
describe("get data", () => {
  test("test valid data ", async () => {
    const res = await getData();
    expect(res).toHaveLength(2);
  });
});
