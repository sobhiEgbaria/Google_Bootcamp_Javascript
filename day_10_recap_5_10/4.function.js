// function declaration or statement
function rollDie() {
  let rolled = Math.floor(Math.random() * 6) + 1;
  console.log(`the roll is ${rolled}`);
}

function throwDies() {
  rollDie();
  rollDie();
  rollDie();
  rollDie();
  rollDie();
  rollDie();
}

throwDies();

function add() {
  console.log(2);
}

// Function Expressions
const add3 = function () {
  console.log(3);
};

const add4 = () => {
  console.log(444);
};

add();
add3();
add4();

// This function returns a function!
function multiplyBy(num) {
  return function (x) {
    return x * num;
  };
}

//triple holds a function:
const triple = multiplyBy(3);
//we can call it:
triple(4); //12
triple(10); //30

const double = multiplyBy(2);
double(3); //6
double(9); //18

const halve = multiplyBy(0.5);
halve(5); //2.5
halve(100); //50
