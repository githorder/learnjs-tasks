'use strict';

let arr = ['HTML', 'JavaScript', 'CSS'];

const copySorted = (arr = []) => arr.slice().sort();

let sorted = copySorted(arr);

console.log(sorted);
console.log(arr);
