/**
 * Task description: Write a method that creates a new array with given values
 * Expected Result: (3, 'a') => ['a', 'a', 'a']
 * Task Complexity: 1 of 5
 * @param {number} arraySize - size of array
 * @param {?} value - value to fill
 * @returns {Array}
 */

const fill = (arraySize, value) => {
  const filled_array = [];

  for (let i = 0; i < arraySize; i++) {
    filled_array.push(value);
  }
  return filled_array;
};

console.log(fill(3, "a"));
