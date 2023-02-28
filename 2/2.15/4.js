'use strict';

let x = +prompt('Enter a number', 1);
let n = +prompt('Enter a power for a number', 1);

function pow(x, n) {
  if (n < 1) return NaN;
  let result = 1;

  let a = 1;
  while (a <= n) {
    result *= x;
    a++;
  }

  return result;
}

console.log(pow(2, 8));
