'use strict';

const count = (obj = {}) => Object.keys(obj).length;

const user = {
  name: 'John',
  age: 30,
};

console.log(count(user));
