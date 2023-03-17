'use strict';

const sumTo = (number) => {
  let sum = 0;

  for (let i = 1; i <= number; i++) {
    sum += i;
  }

  return sum;
};

const sumToRecursive = (number) => {
  if (number === 1) return 1;
  return number + sumTo(number - 1);
};

const sumToFormula = (number) => (number * (number + 1)) / 2;

console.log(sumTo(50));
console.log(sumToRecursive(50));
console.log(sumToFormula(100));
