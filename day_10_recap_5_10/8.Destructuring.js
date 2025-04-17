const raceResults = [
  "Eliud Kipchoge",
  "Feyisa Lelisa",
  "Galen Rupp",
  "Ghirmay Ghebreslassie",
];

// Using Destructuring:
const [gold, silver, bronze] = raceResults;
console.log(gold);
console.log(silver);
console.log(bronze);

// Using Destructuring with spread
const [winner, ...others] = raceResults;
winner; //'Eliud Kipchoge' //string
others; //["Feyisa Lelisa", "Galen Rupp", "Ghirmay Ghebreslassie"] //array

const runner = {
  first: "Eliud",
  last: "Kipchoge",
  country: "Kenya",
  title: "Elder of the Order of the Golden Heart of Kenya",
};

// We can unpack the values we want right in the parameter list:
function print({ first, last, title }) {
  console.log(`${first} ${last}, ${title}`);
}

const response = ["HTTP/1.1", "200 OK", "application/json"];

// Also works with array parameters:
function parseResponse([protocol, statusCode, contentType]) {
  console.log(`Status: ${statusCode}`);
}
