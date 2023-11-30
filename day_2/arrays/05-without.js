/**
 * Task description: Write a method that returns an array without listed values
 * Expected Result: [1, 2, 3, 1, 2] without 1, 2 => [3]
 * Task Complexity: 2 of 5
 * @param {Array} array - Array of primitive data types
 * @param {?} args list of values to remove
 * @returns {Array}
 */
const without = (array, ...args) => {
  // ...args return a [1,2] => an array of the arguments

  const without_array = array.filter((array_element) => {
    let is_in_array = true;

    for (const number of args) {
      if (number === array_element) {
        is_in_array = false;
      }
    }
    return is_in_array;
  });
  return without_array;
};

console.log(without([1, 2, 3, 1, 2, 5], 1, 2));
