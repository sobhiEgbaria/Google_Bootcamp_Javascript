/*
  Swap the values of the two variables.
 */

let value1 = "one";
let value2 = "two";

// original values
console.log("original", value1); // should be 'one'
console.log("original", value2); // should be 'two'

// solution
let temp = value1;
value1 = value2;
value2 = temp;

console.log("swap", value1); // should be 'two'
console.log("swap", value2); // should be 'one'
