'use strict';

const sortByAge = (arr = []) =>
  arr.sort((prevPerson, nextPerson) => prevPerson.age - nextPerson.age);

let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 28 };

let arr = [vasya, petya, masha];

sortByAge(arr);

console.log(arr[0].name);
console.log(arr[1].name);
console.log(arr[2].name);
