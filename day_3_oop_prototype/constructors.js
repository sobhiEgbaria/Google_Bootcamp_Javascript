// Function used to create objects
// Should be named with a capital letter
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;

  // Add a method to the object
  this.getFullName = function () {
    return this.firstName + " " + this.lastName;
  };
}

function Employee(firstName, lastName, age) {}

Employee.prototype = new Person();

// Create an object using the constructor function
const nir = new Employee("Nir", "Kaufman", 30);
nir.getFullName(); // 'Nir Kaufman'
