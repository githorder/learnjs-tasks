'use strict';

function Calculator() {
  this.operations = {
    ['+'](a, b) {
      return a + b;
    },
    ['-'](a, b) {
      return a - b;
    },
  };
}

Calculator.prototype.calculate = function (str = '') {
  const parsedOperation = str.split(' ');

  let a = +parsedOperation[0];
  let b = +parsedOperation[2];
  let operator = parsedOperation[1];

  if (operator === '/' && b === 0) {
    throw new Error('Error: you cannot divide by 0');
  }

  if (!this.operations[operator] || !isFinite(a) || !isFinite(b)) {
    return NaN;
  }

  let result = this.operations[operator](a, b);
  console.log(result);
  return result;
};

Calculator.prototype.addMethod = function (name = '', func = null) {
  this.operations[name] = func;
};

const calculator = new Calculator();
calculator.addMethod('*', (a, b) => a * b);
calculator.addMethod('/', (a, b) => a / b);
calculator.addMethod('**', (a, b) => a ** b);

calculator.calculate('2 / 0');
