/**
 * Task description: Write a method that makes a shallow compare of two arrays and
 *  returns true if they are identical.
 * Expected Result: ([1, 2, 3], [1, 2, 3]) => true
 * Task Complexity: 2 of 5
 * @param {Array} firstArray - Array of primitive data types
 * @param {Array} secondArray - Array of primitive data types
 * @returns {boolean}
 */
const isEqual = (firstArray, secondArray) => {
  res_isEqual = true;

  if (firstArray.length != secondArray.length) {
    return false;
  }

  firstArray.forEach((element, index) => {
    if (element != secondArray[index]) {
      res_isEqual = false;
      return res_isEqual;
    }
  });
  return res_isEqual;
};

console.log(isEqual([1, 2, 3], [1, 2, 3, 4]));
