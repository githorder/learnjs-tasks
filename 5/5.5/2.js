'use strict';

let arr = [5, 3, 8, 1];

const filterRange = (arr = [], a = 0, b = 0) =>
  arr.filter((el) => el >= a && el <= b);

console.log(filterRange(arr, 1, 4));
console.log(arr);
