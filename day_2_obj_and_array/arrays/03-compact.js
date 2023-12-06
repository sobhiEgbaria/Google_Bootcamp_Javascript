/**
 * Task description: Write a method that clears array from all unnecessary elements,
 * like false, undefined, empty strings, zero, null
 * Expected Result: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]
 * Task Complexity: 1 of 5
 * @param {Array} array - An array of any elements
 * @returns {Array}
 */
const compact = (array) => {
  const compacted_array = array.filter((i) => {
    if (typeof i != "number" || i == 0) {
      return false;
    }
    return true;
  });
  return compacted_array;
};

console.log(compact([0, 1, false, 2, undefined, "", 3, null]));
