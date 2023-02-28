'use strict';

function Accumulator(startingVal) {
  this.value = startingVal;

  this.read = function () {
    let newVal = +prompt('Enter a value', 0);
    this.value += newVal;
    return this.value;
  };
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

console.log(accumulator.value);
