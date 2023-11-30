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
  }

  add(item) {
    // add item to set
  }

  remove(item) {
    // remove item from set
  }

  has(item) {
    // check if set contains item
  }

  getSize() {
    // return size of collection
  }

  getValues() {
    // return array of values
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
