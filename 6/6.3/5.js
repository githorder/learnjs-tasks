'use strict';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const inBetween = (a, b) => (x) => x >= a && x <= b;
const inArray = (arr) => (x) => arr.includes(x);

console.log(arr.filter(inArray([1, 2, 10])));
console.log(arr.filter(inBetween(3, 6)));
