/**
 * Task description: Write a method that makes a shallow check is object empty
 * Expected Result: ({}) => true, ({ a: undefined }) => true, ({ a: 1 }) => false
 * Empty values: '', null, NaN, undefined
 * Task complexity: 2 of 5
 * @param {Object} object - Object with values of primitive data types
 * @returns {boolean}
 */
const isEmpty = (object) => {
  if (Object.keys(object) == 0) {
    return true;
  } else {
    for (let key in object) {
      if (
        object[key] === undefined ||
        object[key] == null ||
        object[key] == NaN
      ) {
        return true;
      }
    }
  }
  return false;
};

console.log(isEmpty({ a: undefined })); // true
console.log(isEmpty({})); // true
console.log(isEmpty({ a: 1 })); // false
