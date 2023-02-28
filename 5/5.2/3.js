const readNumber = () => {
  let input;
  do {
    input = prompt('Enter a number: ');

    if (input === null || input === '') return null;
  } while (!isFinite(input));

  return +input;
};

let result = readNumber();
console.log(result);
