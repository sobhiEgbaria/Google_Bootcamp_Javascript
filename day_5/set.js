// Implement a Set
// A set is a collection of unique items. A set can be formed from an array from removing all duplicate items.
// Create a Set class with methods add, remove, and has.
// Should support these operations:
// s.add(1) -> {1}
// s.add(1) -> {1}
// s.add(2) -> {1, 2}
// s.has(1) -> true
// s.has(3) -> false
// s.remove(1) -> {2}
// s.has(1) -> false
// s.has(2) -> true
class Set {
  constructor() {
    // initialize storage
    this.set = [];
    this.index = 0;
  }

  add(item) {
    // add item to set
    if (!this.has(item)) {
      this.set[this.index] = item;
      this.index++;
    }
  }

  remove(item) {
    // remove item from set
    if (this.has(item)) {
      const item_index = this.set.indexOf(item);
      this.set.splice(item_index, 1);
      this.index--;
    }
  }

  has(item) {
    // check if set contains item
    return this.set.includes(item);
  }

  getSize() {
    // return size of collection
    return this.set.length;
  }

  getValues() {
    // return array of values
    return this.set;
  }

  /// ** Extra Credit **

  union(set) {
    // return union of two sets
  }

  intersection(set) {
    // return intersection of two sets as a new set
  }

  difference(set) {
    // return difference of two sets as a new set
  }

  isSubsetOf(set) {
    // set is a subset of another set if all its elements are contained in the other set
  }

  clone() {
    // return a new set that is a clone of the original set
  }
}

const my_set = new Set();

my_set.add(1);
my_set.add(1);
my_set.add(2);
my_set.add(3);
my_set.add(4);
my_set.add(5);

my_set.remove(5);
my_set.remove(2);
console.log(my_set.getValues());
console.log(my_set.getSize());
console.log(my_set);
