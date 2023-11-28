// Primitive types
typeof "asdsdf"; // string
typeof 123; // number
typeof true; // boolean
typeof undefined; // undefined
typeof null; // object

// the nir object
const nir = {
  // Properties
  firstName: 'Nir',
  lastName: 'Kaufman',
  eyeColor: 'brown',
  hands: 2,
  height: 1.8,
  email: 'nirkaufman@gmail.com',
  phone: '051-5542580',
  address: 'zoran',
  birthDate: new Date(),
  age: 36,
  isMale: true,

  // Methods
  getFullName: function () {
    return this.firstName + ' ' + this.lastName;
  },

  talk: function () {
    console.log('Hello, my name is ' + this.firstName);
  }
}







