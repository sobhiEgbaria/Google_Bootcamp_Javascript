// for loop:
let names = ["sobhi", "egbaria", "mohamed"];

for (i = 0; i < names.length; i++) {
  console.log(names[i]);
}

for (i = 0; i <= 10; i++) {
  console.log(`${i} * ${i} = ${i * i}`);
}

for (i = 200; i > 0; i -= 10) {
  console.log(i);
}

const students = [
  { firstName: "gogo", grade: 100 },
  { firstName: "lolo", grade: 49 },
  { firstName: "momo", grade: 45 },
  { firstName: "soso", grade: 77 },
];

for (i = 0; i < students.length; i++) {
  let student = students[i];
  console.log(`name: ${student.firstName} --> grade: ${student.grade}`);
}

// revers a word:
let word = "ABCDEFG";
let newWord = "";
for (i = word.length - 1; i >= 0; i--) {
  newWord += word[i];
  console.log(newWord);
}

// nested loop
const gameBoard = [
  [4, 32, 8, 4],
  [64, 8, 32, 2],
  [8, 32, 16, 4],
  [2, 8, 4, 2],
];

let sum = 0;
for (i = 0; i < gameBoard.length; i++) {
  let row = gameBoard[i];

  for (j = 0; j < row.length; j++) {
    sum += row[j];
  }
}
console.log(sum);

// while loop:
// guess and target number we are trying to guess
const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while (guess !== target) {
  console.log(`Target: ${target} Guess: ${guess}`);
  guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess: ${guess}`);
console.log(`CONGRATS YOU WIN!!`);

// forOf (don't need an index)
let onePiece = ["luffy", "nami", "zoro", "sanje", "franky"];

for (const character of onePiece) {
  console.log(character);
}

for (const char of "abcdefg") {
  console.log(char);
}

// forOf with obj
const movieReviews = {
  Arrival: 9.5,
  Alien: 9,
  Amelie: 8,
  "In Bruges": 9,
  Amadeus: 10,
  "Kill Bill": 8,
  "Little Miss Sunshine": 8.5,
  Coraline: 7.5,
};

// We CAN iterate over the keys of an object
for (let movie of Object.keys(movieReviews)) {
  console.log(`You rated ${movie} - ${movieReviews[movie]}`);
}

// We can also iterate over the values To calculate the average movie rating:
const ratings = Object.values(movieReviews);
let total = 0;
for (let r of ratings) {
  total += r;
}
let avg = total / ratings.length;
console.log("Average Rating: ", avg);

// forIn use with obj
const movieReviews2 = {
  Arrival: 9.5,
  Alien: 9,
  Amelie: 8,
  "In Bruges": 9,
  Amadeus: 10,
  "Kill Bill": 8,
  "Little Miss Sunshine": 8.5,
  Coraline: 7.5,
};

for (let key in movieReviews2) {
  console.log(`${key} : ${movieReviews[key]}`);
}
