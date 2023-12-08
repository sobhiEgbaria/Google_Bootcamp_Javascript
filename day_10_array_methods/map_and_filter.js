//array methods:
let nums = [1, 2, 3];
console.log(nums);
let words = ["sobhi", "egbaria"];
console.log(words);

// for Each
nums.forEach((num, index) => {
  nums[index] = num + 1;
});

console.log(nums);

// map --> return a new array
const doubles = nums.map((number) => {
  return number * 2;
});

console.log(doubles);

// map return a obj
const is_even_obj = nums.map((num) => {
  return {
    number: num,
    is_even: num % 2 === 0,
  };
});

console.log(is_even_obj);

// split and join with map.
let new_word = words.map((word) => {
  return word.split("").join("_");
});

console.log(new_word);

//find
const sobhi = words.find((n) => {
  return n === "sobhi";
});
console.log(sobhi);
