const person = {
  name: "sobhi",
  age: 20,
  job: "programer",
  100: "one hundred",
};

let work = "job";

console.log(person.age);
console.log(person[100]);
console.log(person[work]);

// add and update from obj:
console.log(person);

person["name"] = "gogo lolo";

console.log(person);
