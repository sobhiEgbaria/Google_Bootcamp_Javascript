// // prototype chain: boss --> employee --> person --> Object --> null

// // Prototype chain ("like inheritance, but not really")
// // think of it as a linked list
// // person by default has a prototype of Object
// const person = {
//   // private to person only!
//   printDate: function () {
//     console.log(new Date().getFullYear());
//   },

//   // log the name of who?? (who is the caller)
//   printIntroduction: function () {
//     console.log("My name is " + this.name);
//   },
// };

// // employee "inherits" from person
// // employee linked/point to person
// const employee = Object.create(person);
// employee.name = "John";

// employee.printDate();
// employee.printIntroduction();

// // boss "inherits" from employee
// // boss linked/point to employee
// const boss = Object.create(employee);

// boss.printDate();
// boss.printIntroduction(); // will print "My name is John" (!!)

// // will return an empty array
// console.log(Object.keys(boss));

// create an object
// const employee = {
//   name: "sobhi",
// };

// console.log(employee.name);

// //=================================================
// // Constructor function
// function employee2(first_name, last_name) {
//   this.first_name = first_name;
//   this.last_name = last_name;

//   this.get_first_name = function () {
//     return this.first_name;
//   };
// }

// // Create a new Person object
// const gogo = new employee2("momo");
// console.log(gogo.get_first_name());

// const lolo = new employee2("zozo");
// console.log(lolo.get_first_name());

// class to make an objects
class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get_name_age() {
    return `my name is ${this.name}, i'm ${this.age}`;
  }
}
const new_person = new person("sobhi", 29);
console.log(new_person.get_name_age());

// change the values of the class (new_person)
new_person.name = "lolo";
new_person.age = 100;
console.log(new_person.get_name_age());
