const minNumberInArr = (arr) => {
  let min;
  min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
};

console.log(minNumberInArr([1, 2, 3, 4, 5, 6, 65, 43, 3, 323]));
