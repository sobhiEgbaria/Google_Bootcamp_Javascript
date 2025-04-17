const person = {
  name: "sobhi",
  age: 20,
  job: "programer",
  100: "one hundred",
};

let work = "job";

console.log(person.age);
console.log(person[100]);
console.log(person[work]);

// =============== add and update from obj: =============================
console.log(person);

person["name"] = "gogo lolo";

console.log(person);

// ============= Using the new shorthand property syntax: ====================
const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];
const getStats = (arr) => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const sum = arr.reduce((sum, r) => sum + r);
  const avg = sum / arr.length;
  return {
    max,
    min,
    sum,
    avg,
  };
};

const stats = getStats(reviews);

// ================= USING COMPUTED PROPERTIES! and dynamic key ======================
const role = "host";
const person1 = "Jools Holland";
const role2 = "Director";
const person2 = "James Cameron";

const team = {
  [role]: person1,
  [role2]: person2,
  [1 + 6 + 9]: "sixteen",
};

//=========== copy the team obj and add new value =======================
const addProp = (obj, k, v) => ({
  ...obj,
  [k]: v,
});
const res = addProp(team, "happy", ":)");

//=============== Adding methods to an object! =========================
const math = {
  add: function (x, y) {
    return x + y;
  },
  multiply: function (x, y) {
    return x * y;
  },
};

console.log(math.add(5, 9), math.multiply(5, 9));

//=============== NEW SYNTAX Adding methods to an object! =========================
const math2 = {
  add(x, y) {
    return x + y;
  },
  multiply(x, y) {
    return x * y;
  },
};

console.log(math2.add(1, 9), math2.multiply(1, 9));

//=============== THIS  =========================

const person3 = {
  first: "Cherilyn",
  last: "Sarkisian",
  nickName: "Cher",
  fullName() {
    const { first, last, nickName } = this;
    return `${first} ${last} AKA ${nickName}`;
  },
  printBio() {
    console.log(`${this.fullName()} is a person!`);
  },
};

console.log(person3.printBio());
