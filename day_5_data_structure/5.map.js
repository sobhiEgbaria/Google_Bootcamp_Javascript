// Implement a Map
// A Map is a collection of key-value pairs.
// In other words, it is a container that maps unique keys to values.
// A Map cannot contain duplicate keys: Each key can map to at most one value.
class Map {
  constructor() {
    // initialize storage
    this.map = [];
    this.index = 0;
  }

  set(key, value) {
    // add key-value pair
    if (!this.has(key)) {
      this.map[this.index] = [key, value];
      this.index++;
    } else {
      this.map[this.keys().indexOf(key)][1] = value;
    }
  }

  get(key) {
    // get value by key
    for (let i = 0; i < this.map.length; i++) {
      if (JSON.stringify(key) == JSON.stringify(this.map[i][0]))
        return this.map[i][1];
    }
  }

  has(key) {
    // returns boolean

    for (const iterator of this.map) {
      if (JSON.stringify(iterator[0]) == JSON.stringify(key)) {
        return true;
      }
    }
    return false;
  }

  delete(key) {
    // remove key-value pair
    this.map.splice(this.keys().indexOf(key), 1);
  }

  getSize() {
    return this.map.length;
  }

  clear() {
    this.map.splice(0, this.index);
  }

  keys() {
    // returns array of keys
    return this.map.map((i) => {
      return (i = i[0]);
    });
  }

  values() {
    // returns array of values
    return this.map.map((i) => {
      return (i = i[1]);
    });
  }

  entries() {
    // returns array of key-value pairs
    return this.map;
  }

  forEach(callback) {
    // executes callback for each key-value pair
  }
}

const map = new Map();

console.log(map.map);
map.set(1, 1);
map.set("a", 2);
map.set("a", 3);
map.set([2, 3], 3);
console.log(map.map);
console.log(map.has("a"));
map.set("to delete", 3);
console.log(map.map);
map.delete("to delete");
console.log(map.map);

console.log(map.map);
console.log(map.keys());
console.log(map.values());
map.clear();
console.log(map.map);
