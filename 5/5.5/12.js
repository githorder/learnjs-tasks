'use strict';

// function unique(arr = []) {
//   const result = [];

//   for (let str of arr) {
//     if (!result.includes(str)) {
//       result.push(str);
//     }
//   }

//   return result;
// }

// optimized for time complexity at the cost of space complexity
function unique(arr = []) {
  const uniqueMap = {};
  return arr.filter((el) => {
    if (!uniqueMap[el]) {
      uniqueMap[el] = 1;
      return true;
    }
    uniqueMap[el]++;
    return false;
  });
}

let strings = [
  'кришна',
  'кришна',
  'харе',
  'харе',
  'харе',
  'харе',
  'кришна',
  'кришна',
  ':-O',
];

console.log(unique(strings));
