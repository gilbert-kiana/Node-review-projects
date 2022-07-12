const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("first.txt");

console.log(first);
