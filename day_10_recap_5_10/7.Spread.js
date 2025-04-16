const cephalopods = [
  "dumbo octopus",
  "humboldt squid",
  "flamboyant cuttlefish",
];

const gastropods = ["giant african snail", "banana slug", "variable neon slug"];

const cnidaria = ["fire coral", "moon jelly"];

// merge 2 array
const mollusca = [...cephalopods, ...gastropods];

// merge 3 array
const inverts = [...cnidaria, ...gastropods, ...cephalopods];

//copy an array
const cephCopy = [...cephalopods];
