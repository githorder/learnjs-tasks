'use strict';

const users = [
  { name: 'John', age: 20, surname: 'Johnson' },
  { name: 'Pete', age: 18, surname: 'Peterson' },
  { name: 'Ann', age: 19, surname: 'Hathaway' },
];

const byField = (field) => (a, b) => a[field] - b[field];

users.sort(byField('name'));
users.forEach((user) => console.log(user.name));

users.sort(byField('age'));
users.forEach((user) => console.log(user.name));
