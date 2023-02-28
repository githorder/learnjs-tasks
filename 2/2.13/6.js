'use strict';

let number;
do {
  number = +prompt('Enter number greater than 100', 0);
} while (number <= 100 && number);
