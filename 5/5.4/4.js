'use strict';

const sumInput = () => {
  const arrNums = [];
  let input;

  do {
    input = prompt('Enter a number or cancel');
    if (input === null || input === '' || !isFinite(input)) break;
    arrNums.push(+input);
  } while (true);

  return arrNums.reduce((sum, num) => sum + num, 0);
};
