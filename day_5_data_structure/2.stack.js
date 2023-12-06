// Implement a Stack class
// A stack is a data structure where stack are added and removed in a
// last in, first out (LIFO) fashion.
// use an array as the underlying data structure
class Stack {
  constructor() {
    this.stack = [];
    this.top = 0;
  }

  push(item) {
    this.stack[this.top] = item;
    this.top++;
  }

  pop() {
    this.stack.splice(-1);
    this.top--;
  }

  peek() {
    return this.stack[this.top - 1];
  }

  isEmpty() {
    if (!this.stack.length) {
      //this.stack.length == 0
      return "The Stack is Empty";
    }
    return `Their are ${this.top} elements in the Stack`;
  }

  reverse() {
    let reversed_stack = this.stack.reverse();
    return reversed_stack;
  }
}

// create a first_stack object with Stack class
let first_stack = new Stack();

first_stack.push("first");
first_stack.push("second");
first_stack.push("third");
console.log(first_stack.isEmpty());
console.log(first_stack.stack);
console.log("====================================\n");
console.log(first_stack.reverse());

console.log("====================================\n");
first_stack.pop();
console.log(first_stack.peek());
console.log(first_stack.isEmpty());
console.log(first_stack.stack);

console.log("====================================\n");
first_stack.pop();
first_stack.pop();
console.log(first_stack.isEmpty());
console.log(first_stack.stack);
