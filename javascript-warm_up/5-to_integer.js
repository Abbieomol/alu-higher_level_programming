#!/usr/bin/node
const arg = process.argv[2];

console.log(isNaN(Number(arg)) ? 'Not a number' : `My number: ${Number(arg)}`);