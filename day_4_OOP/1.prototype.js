// section 19
// prototype
`
Prototypes are the mechanism by which JavaScript objects inherit features from one another.
`;

//String.prototype is a "template object" for every single string.
String.prototype.yell = function () {
  return `OMG!!! ${this.toUpperCase()}!!!!! AGHGHGHG!`;
};

console.log("bees".yell());

//We can overwrite an existing Array method like pop (not a good idea):
Array.prototype.pop = function () {
  return "SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF!";
};
const nums = [6, 7, 8, 9];
console.log(nums.pop());
