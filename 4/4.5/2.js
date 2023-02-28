'use strict';

function Calculator() {
  this.read = function () {
    this.x = +prompt('Enter a fist numeric value', 0);
    this.y = +prompt('Enter a second numeric value', 0);
  };

  this.sum = function () {
    return this.x + this.y;
  };

  this.mul = function () {
    return this.x * this.y;
  };
}

const calculator = new Calculator();
calculator.read();

console.log('Sum=' + calculator.sum());
console.log('Mul=' + calculator.mul());
