/**
 * Task description: Write a method that returns an object composed of key-value pairs.
 * Expected Result: [['a', 1], ['b', 2]] => { a: 1, b: 2 }
 * Task Complexity: 2 of 5
 * @param {Array} array - a deep array of pairs
 * @returns {Array}
 */
const fromPairs = (array) => {
  let fromPairs_obj = {};
  array.map((i) => {
    fromPairs_obj[i[0]] = i[1];
  });
  return fromPairs_obj;
};

console.log(
  fromPairs([
    ["a", 1],
    ["b", 2],
  ])
);
