const numbers = [1, -5, 666, 2, 400, 11];

const sort = () => {
  const sortToascending = numbers.sort((a, b) => a - b);
  return sortToascending;
};

const sort2 = () => {
  const sortTodecending = numbers.sort((a, b) => b - a);
  return sortTodecending;
};

console.log(sort(numbers));
console.log(sort2(numbers));
