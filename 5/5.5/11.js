'use strict';

const getAverageAge = (arr = []) => {
  if (!arr.length) return 0;
  let sumAge = 0;
  arr.forEach(({ age }) => (sumAge += age));
  return sumAge / arr.length;
};

let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 29 };

let arr = [vasya, petya, masha];

console.log(getAverageAge(arr));
