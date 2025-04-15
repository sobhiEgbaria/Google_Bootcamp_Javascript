// basic array functions
let numbers = [1, 2, 3, 4];
let colors = ["red", "green", "black", "gray"];
console.log(numbers);
console.log(colors[colors.length - 1]);
console.log(colors.length);

// modifying array
let names = ["sobhi", "egbaria", "gogo", "lolo"];
console.log(names[1]);
names[1] = "new name ";
console.log(names[1]);
console.log(names);

// add to the last of the array
names[names.length] = "last new name";
console.log(names);

// add and remove methods from array.

let letters = ["a", "b", "c"];
// push add to the end.
letters.push("d");
console.log(letters);

//pop remove the last item:
letters.pop();
console.log(letters);

// add to the beginning:
letters.unshift("new a ");
console.log(letters);

//remove from the beginning
let lastItem = letters.shift();
console.log(letters);
console.log(lastItem);

// merge tow arrays.
let lettersAndNAMES = letters.concat(names);
console.log(lettersAndNAMES);

// revers an array
let num = [1, 2, 3, 4];
console.log(num);
num.reverse();
console.log(num);

// join convert array to string
let lettersJoin = letters.join(" ");
console.log(lettersJoin);

//splice(startIdx, deleteCount, itemsToInsert);
let animals = ["shark", "salmon", "whale", "bear", "lizard", "tortoise"];

// INSERTING w/ SPLICE ==> 'at index 1, delete 0 items and insert "octopus"'
animals.splice(1, 0, "octopus");

// DELETING w/ SPLICE ==> at index 5, delete 2 items'
animals.splice(5, 2);

// REPLACING w/ SPLICE ==> 'at index 3, delete 2 items and replace them with "orca" and "grizzly"'
console.log(animals);

animals.splice(3, 2, "orca", "grizzly");
// ["shark", "octopus", "salmon", "orca", "grizzly"]
console.log(animals);
