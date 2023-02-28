'use strict';

// const filterRangeInPlace = (arr = [], a = 0, b = 0) => {
//   for (let i = 0; i < arr.length; i++) {
//     let el = arr[i];
//     if (el < a || el > b) {
//       arr.splice(i, i);
//       i--;
//     }
//   }
// };

const filterRangeInPlace = (arr = [], a = 0, b = 0) =>
  arr.forEach((el, i) => (el >= a && el <= b ? el : arr.splice(i, 1)));

const arr = [5, 3, 8, 1, 10, 4, 2, 0];
filterRangeInPlace(arr, 1, 8);
console.log(arr);
