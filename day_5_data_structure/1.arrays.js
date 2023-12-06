// const ids = [123,566,322,1238];

// // ids.push(123);
// // ids.unshift(555);

// // I got the value -need to know the position in the Array
// const index = ids.indexOf(322);

// // I don't have the value - need to know the position in the Array
// // walk through the array and find the index
// const indexIfUserAddress = ids.findIndex(
//     function (value) {
//       // return value === userInfo.address;
//     }
// )

// console.log(index);

// const numbers = [1,2,3,4,5,6,7,8,9,10];

// // filter - returns a new array
// const evenNumber = numbers.filter(function (number) {
//   return number % 2 === 0;
// });

// const greaterThen10 = numbers.filter(function (number) {
//   return number > 10
// });

// // find - returns the first value that matches the condition
// const res = numbers.find(function (number) {
//   return number === 2
// })

// // map - returns a new array
// const numObject = numbers.map(function (number) {
//   return number.toString()
// })

// console.log(evenNumber);
// console.log(greaterThen10);
// console.log(numObject);
// console.log(res);

// // create a function that will get an array of strings and a function
// // the function will return a new array with the strings manipulated
// // the function will get a string and return a string
// // the function will get a string and return a string
// function manipulateStringArrayAndReturnNewArray(arrayOfString, manipulateFn) {
//   const newArray = [...arrayOfString];
//   for(let i = 0; i < newArray.length; i++) {
//     if(typeof newArray[i] === 'string') {
//       newArray[i] = manipulateFn(newArray[i]);
//     }
//   }
//   return newArray;
// }

// const names = ['nir', 'ran', 'david', 'shlomi'];

// // ***************

// function findNirAndCapitalize(name) {
//   if (name === 'nir') {
//     return name.toUpperCase();
//   }
//   return name;
// }

// const results = manipulateStringArrayAndReturnNewArray(colors, findNirAndCapitalize);

// const array = ["sobhi", "gogo", "lolo"];

// for (const i in array) {
//   console.log(i);
// }

// for (const iterator of array) {
//   console.log(iterator);
// }

// const obj = {
//   name: "sobhi",
//   age: 17,
//   id: 204442309,
//   address: "alfahem",
// };

// for (const key in obj) {
//   console.log(key);
// }
