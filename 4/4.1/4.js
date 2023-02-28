'use strict';

const sumSalaries = (salariesObj = {}) => {
  let sum = 0;

  for (let employee in salariesObj) {
    sum += salariesObj[employee];
  }

  return sum;
};

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

console.log(sumSalaries(salaries));
