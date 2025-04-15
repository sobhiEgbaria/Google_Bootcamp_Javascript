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
