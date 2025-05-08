const { myForEtch, myMap } = require("./app");

// test without framework (( myForEtch))
let sum = 0;
myForEtch([1, 2, 3], (value) => {
  sum += value;
});

if (sum !== 6) {
  throw new Error("expecting a su of 6");
} else {
  console.log("test is pass");
}

// map test

const result = myMap([1, 2, 3], (value) => {
  return value * 2;
});

for (let i = 0; i < result.length; i++) {
  let arr = [2, 4, 6];
  if (result[i] !== arr[i]) {
    throw new Error("expecting arr of [2,4,6]");
  }
  console.log("test is pass");
}
