// spread
function giveMeFour(a, b, c, d) {
  console.log("a", a);
  console.log("b", b);
  console.log("c", c);
  console.log("d", d);
}

const colors = ["red", "orange", "yellow", "green"];

// Without spread:
giveMeFour(colors);
// a ["red", "orange", "yellow", "green"]
// b undefined
// c undefined
// d undefined

// WITH SPREAD!!!
// Values are passed as separate args:
giveMeFour(...colors);
// a 'red'
// b 'orange'
// c 'yellow'
// d 'green'

const cephalopods = ["dumbo", "humboldt", "flamboyant"];

const gastropods = ["giant", "banana", "variable"];

const mollusca = [...cephalopods, ...gastropods];
//["dumbo", "humboldt", "flamboyant", "giant", "banana", "variable"]

const grades = [100, 80, 90, 76, 92];
const copy_grades = [...grades];
console.log(grades);
console.log(copy_grades);

console.log([..."sobhi"]);
console.log("sobhi".split(""));

// destructuring:
const raceResults = [
  "Eliud Kipchoge",
  "Feyisa Lelisa",
  "Galen Rupp",
  "Ghirmay Ghebreslassie",
  "Alphonce Simbu",
  "Jared Ward",
];

// Using Destructuring with array:
const [gold, silver, bronze] = raceResults;
// gold ==> 'Eliud Kipchoge'
// silver ==>'Feyisa Lelisa'
// bronze ==> 'Galen Rupp'

// escape elements in the obj
const [first, , , fourth] = raceResults;
// first ==> 'Eliud Kipchoge'
// fourth ==> 'Ghirmay Ghebreslassie'

// spread with Destructuring
const [winner, ...others] = raceResults;
// winner ==> 'Eliud Kipchoge'
// others == > ["Feyisa Lelisa", "Galen Rupp", "Ghirmay Ghebreslassie", "Alphonce Simbu", "Jared Ward"]

///  Using Destructuring with obj:

const runner = {
  name: "Eliud",
  family: "Kipchoge",
  country: "Kenya",
  title: "Elder of the Order of the Golden Heart of Kenya",
};

const { name, family, time } = runner;
console.log(name);
const { country: nation, title: honorific } = runner;
console.log(nation);

// Using Destructuring with functions:

// We can unpack the values we want right in the parameter list:
function print_name({ name, family, title }) {
  console.log(`${name} ${family}, ${title}`);
}
print_name(runner);

// Also works with array parameters:
const response = ["HTTP/1.1", "200 OK", "application/json"];
function parseResponse([protocol, statusCode, contentType]) {
  console.log(`protocol: ${protocol}`);
  console.log(`Status: ${statusCode}`);
  console.log(`contentType: ${contentType}`);
}

parseResponse(response);
