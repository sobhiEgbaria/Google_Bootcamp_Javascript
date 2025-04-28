#!/usr/bin/env node
const fs = require("fs");
fs.readdir(process.cwd(), (err, filenames) => {
  if (err) {
    console.log("gogo lolo");
  }
  console.log("gogo lolo");
});
