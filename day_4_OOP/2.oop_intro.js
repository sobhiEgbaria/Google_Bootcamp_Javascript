// constructor

class pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating`;
  }
}

class Cat extends pet {
  constructor(name, age, numOfLifes = 9) {
    super(name, age);
    this.numOfLifes = numOfLifes;
  }
  meow() {
    return `mew mew `;
  }
}

class Dog extends pet {
  bark() {
    return ` ho ho ho`;
  }
}

const mycat = new Cat("lolo", 9);
const mydog = new Dog("soso", 9);

console.log(mycat);
console.log(mycat.eat());
console.log(mydog);
console.log(mydog.eat());
