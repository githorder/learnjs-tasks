'use strict';

let calculator = {
  read() {
    this.x = +prompt('Enter a fist numeric value', 0);
    this.y = +prompt('Enter a second numeric value', 0);
  },

  sum() {
    return this.x + this.y;
  },

  mul() {
    return this.x * this.y;
  },
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
