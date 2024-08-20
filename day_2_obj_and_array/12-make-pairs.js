// /**
//  * Task description: Write a method that returns a deep array like [[key, value]]
//  * Expected Result: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]
//  * Task complexity: 1 of 5
//  * @param {Object} object - Any object to transform into array
//  * @returns {Array} - a deep array
//  */
const makePairs = (object) => {
  let result = [];
  let keys = Object.keys(object);
  let values = Object.values(object);

  for (let i = 0; i < keys.length; i++) {
    result.push([keys[i], values[i]]);
  }
  return result;
};

let obj = {
  a: 1,
  b: 2,
};
console.log(makePairs(obj));
