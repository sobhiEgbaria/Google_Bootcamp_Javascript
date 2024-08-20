// // array methods:
let nums = [1, 2, 3];
console.log(nums);

let words = ["sobhi", "egbaria"];
console.log(words);

// // for Each
nums.forEach((num, index) => {
  nums[index] = num + 1;
});
console.log(nums);

// // map --> return a new array
const doubles = nums.map((number) => {
  return number * 2;
});
console.log(doubles);

// // map return a obj
const is_even_obj = nums.map((num) => {
  return {
    number: num,
    is_even: num % 2 === 0,
  };
});
console.log(is_even_obj);

// // split and join with map.
let new_word = words.map((word) => {
  return word.split("").join("_");
});
console.log(new_word);

// // find --> return the first element
const sobhi = words.find((n) => {
  return n === "sobhi";
});
console.log(sobhi);

// every --> return a boolean

let array = ["man", "boy", "gog"];

const res = array.every((word) => {
  return word.length === 3;
});
console.log(res);

// sort
let numbers = [1, 2, 3, 10, 4, 2, 54, 2, 3, 1];

let sort_s_b = numbers.sort((a, b) => {
  return a - b;
});

console.log(sort_s_b);

let sort_b_s = numbers.sort((a, b) => {
  return b - a;
});

console.log(sort_b_s);

// // Reduce

let max = numbers.reduce((max, currVal) => {
  if (max > currVal) {
    return max;
  }
  return currVal;
});

console.log(max);
