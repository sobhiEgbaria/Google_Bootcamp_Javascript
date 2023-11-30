/**
 * Task description: Write a method that turns a deep array into a plain array
 * Expected Result: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]
 * Task complexity: 3 of 5
 * @param {Array} array - A deep array
 * @returns {Array}
 */
const flatten = (array) => {
  flatten_array = [];
  array_string = array.toString();

  for (element of array_string) {
    if (element != ",") {
      flatten_array.push(parseInt(element));
    }
  }
  return flatten_array;
};

console.log(flatten([1, 2, [3, 4, [5]]]));
