/**
 * Task description: Write a method that returns a duplicate-free array
 * Expected Result: Duplicate-free array [1, 2, 3, 1, 2] => [1, 2, 3]
 * Task Complexity: 2 of 5
 * @param {Array<string | number>} array - Array of primitive data types
 * @returns {Array}
 */
const unique = (array) => {
  let unique = [];

  array.filter((i) => {
    let is_in = unique.includes(i);

    if (is_in == false) {
      unique.push(i);
    }
  });
  return unique;
};

console.log(unique([1, 2, 3, 1, 2]));
