/**
 * Task description: Write a method that creates an array of unique values that
 * are included in all given arrays
 * Expected Result: ([1, 2], [2, 3]) => [2]
 * Task complexity: 4 of 5
 * @param {?} arrays - Arrays of primitive data types
 * @returns {Array}
 *
 */

// //***solving with filter

// const intersection = (...arrays) => {
//   const intersection_array = arrays[0].filter((i) => {
//     return arrays[1].includes(i);
//   });

//   return intersection_array;
// };

// // ***solving with for_loop

// const intersection = (...arrays) => {
//   let intersection_array = [];
//   for (let i = 0; i < arrays[0].length; i++) {
//     let is_in = arrays[1].includes(arrays[0][i]);
//     if (is_in == true) {
//       intersection_array.push(arrays[0][i]);
//     }
//   }
//   return intersection_array;
// };

console.log(intersection([1, 2, 5], [2, 3, 5])); //[2,5]
