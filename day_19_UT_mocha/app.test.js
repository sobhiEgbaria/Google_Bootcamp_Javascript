const { myForEtch, myMap } = require("./app");
const assert = require("assert");

// test without framework (( myForEtch))
const test1 = () => {
  try {
    let sum = 0;
    myForEtch([1, 2, 3], (value) => {
      sum += value;
    });
    assert.strictEqual(sum, 6, "expecting a su of 6");

    console.log("test is pass");
  } catch (error) {
    console.log(error);
  }
};

// map test
const test2 = () => {
  try {
    const result = myMap([1, 2, 3], (value) => {
      return value * 2;
    });

    for (let i = 0; i < result.length; i++) {
      let arr = [2, 4, 6];
      assert.strictEqual(result[i], arr[i], "expecting a su of 6");
      console.log("test is pass");
    }
  } catch (error) {
    console.log(error);
  }
};

test1();
test2();
