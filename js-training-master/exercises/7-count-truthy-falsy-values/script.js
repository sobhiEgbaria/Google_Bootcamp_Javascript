/*
  Write a function which checks and count the truthy values from an array
*/

const valuesArray = [0, 1, "", undefined, false, true];

function checkCountTruthyFalsy(curArray) {
  let counter = 0;
  for (let i = 0; i < curArray.length; i++) {
    if (typeof curArray[i] == "number") {
      counter += 1;
    }
  }
  return counter;
}

// usage example:
console.log(checkCountTruthyFalsy(valuesArray)); // should return 2
