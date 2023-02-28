'use strict';

const arr = [1, 2, 3];

// const shuffle = (arr = []) => {
//   let randIndex1, randIndex2;

//   do {
//     randIndex1 = Math.floor(Math.random() * arr.length);
//     randIndex2 = Math.floor(Math.random() * arr.length);
//   } while (randIndex1 === randIndex2);

//   let temp = arr[randIndex1];
//   arr[randIndex1] = arr[randIndex2];
//   arr[randIndex2] = temp;

//   return arr;
// };

const shuffle = (arr = []) => {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));

    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  return arr;
};

console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));
