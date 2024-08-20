/**
 * Task description: Write a method that makes a shallow compare of two objects
 * Expected Result: True if objects are identical, false if objects are different
 * ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true
 * Task complexity: 2 of 5
 * @param {Object<string | number>} firstObj - Object with values of primitive data types
 * @param {Object<string | number>} secondObj - Object with values of primitive data types
 * @returns {boolean}
 */
const isEqual = (firstObj, secondObj) => {
  let firstObj_key = Object.keys(firstObj);
  let firstObj_values = Object.values(firstObj);

  let secondObj_key = Object.keys(secondObj);
  let secondObj_values = Object.values(secondObj);

  for (let i = 0; i < firstObj_key.length; i++) {
    if (
      firstObj_key[i] != secondObj_key[i] ||
      firstObj_values[i] != secondObj_values[i]
    ) {
      return false;
    }
  }
  return true;
};

console.log(isEqual({ a: 1, b: 2 }, { a: 1, b: 2 }));
