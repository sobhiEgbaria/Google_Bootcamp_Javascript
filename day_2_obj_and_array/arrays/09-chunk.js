/**
 * Task description: Write a method that splits an array into parts of determined size
 * Expected Result: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]
 * Task complexity: 3 of 5
 * @param {Array} array - An array of any elements
 * @param {number} size - size of chunks
 * @returns {Array}
 */
const chunk = (array, size) => {
  temp_array = [];
  chunk_array = [];

  for (let i = 0; i < array.length; i++) {
    temp_array.push(array[i]);

    if (array.length - i == 1 || temp_array.length == size) {
      chunk_array.push(temp_array);
      temp_array = [];
    }
  }
  return chunk_array;
};

console.log(chunk([1, 2, 3, 4, 5], 2));
