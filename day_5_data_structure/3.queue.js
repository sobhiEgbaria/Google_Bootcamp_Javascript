// Implement a Queue class
// A queue is a data structure that allows adding and removing elements in a particular order.
// Every queue has a FIFO (first in first out) structure
// FIFO means that the first element added to the queue will be the first element removed from the queue
// A queue is an example of a linear data structure, or more abstractly a sequential collection
// use an array to implement a queue data structure
class Queue {
  constructor() {
    this.queue = [];
    this.index = 0;
  }

  enqueue(item) {
    this.queue[this.index] = item;
    this.index++;
  }

  dequeue() {
    // remove and return front item
    this.queue.splice(0, 1);
    this.index--;
  }

  peek() {
    // return front item
    return this.queue[0];
  }

  isEmpty() {
    if (!this.queue.length) {
      return "The queue is Empty";
    }
    return `Their are ${this.index} elements in the queue`;
  }
}

const first_queue = new Queue();

first_queue.enqueue(1);
first_queue.enqueue(2);
first_queue.enqueue(3);
first_queue.enqueue(4);
first_queue.enqueue(5);
console.log(first_queue.isEmpty());
console.log(first_queue.queue);

first_queue.dequeue();
first_queue.dequeue();
console.log(first_queue.queue);
console.log(first_queue.peek());

first_queue.dequeue();
first_queue.dequeue();
first_queue.dequeue();
console.log(first_queue.queue);
console.log(first_queue.isEmpty());
