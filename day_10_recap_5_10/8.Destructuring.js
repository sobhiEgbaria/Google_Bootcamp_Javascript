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
