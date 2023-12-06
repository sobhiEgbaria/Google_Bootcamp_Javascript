const foods = ["sabich", "falafel", "hummus", "pizza with extra", "pineapple"];

const sort = () => {
  const sortToascending = foods.sort();
  return sortToascending;
};

const sort2 = () => {
  const sortTodecending = foods.sort().reverse();
  return sortTodecending;
};

console.log(sort(foods));
console.log(sort2(foods));
