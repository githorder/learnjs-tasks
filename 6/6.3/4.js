'use strict';

const sum = (a) => (b) => a + b;

console.log(sum(123)(131));
console.log(sum(100)(-50));
