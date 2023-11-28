// prototype chain: boss --> employee --> person --> Object --> null

// Prototype chain ("like inheritance, but not really")
// think of it as a linked list
// person by default has a prototype of Object
const person = {
  // private to person only!
  printDate: function () {
    console.log(new Date().getFullYear());
  },

  // log the name of who?? (who is the caller)
  printIntroduction: function () {
    console.log('My name is ' + this.name );
  },
};

// employee "inherits" from person
// employee linked/point to person
const employee = Object.create(person);
employee.name = 'John';

employee.printDate();
employee.printIntroduction();

// boss "inherits" from employee
// boss linked/point to employee
const boss = Object.create(employee);

boss.printDate();
boss.printIntroduction(); // will print "My name is John" (!!)

// will return an empty array
console.log(Object.keys(boss));

