'use strict';

// const groupById = (arr = []) =>
//   arr.reduce((obj, el) => Object.assign(obj, { [el.id]: el }), {});

const groupById = (arr = []) =>
  arr.reduce((obj, el) => {
    obj[el.id] = el;
    return obj;
  }, {});

// const groupById = (arr = []) =>
//   arr.reduce((obj, el) => ({ ...obj, [el.id]: el }), {});

let users = [
  { id: 'john', name: 'John Smith', age: 20 },
  { id: 'ann', name: 'Ann Smith', age: 24 },
  { id: 'pete', name: 'Pete Peterson', age: 31 },
];

let usersById = groupById(users);
console.log(usersById);
