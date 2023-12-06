/**
 * Task description: Write a method that reverts input array
 * Expected Result: [1, 2, 3] => [3, 2, 1]
 * Task Complexity: 1 of 5
 * @param {Array} array - Array of any elements
 * @returns {Array}
 */
const reverse = (array) => {
  let reverse_array = [];
  for (let i = 0; i < array.length; i++) {
    reverse_array.unshift(array[i]); // unshift push to the first
  }

  return reverse_array;
};

console.log(reverse([1, 2, 3]));
