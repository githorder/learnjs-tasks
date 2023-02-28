'use strict';

// O(n^2)
// const getMaxSubSum = (arr) => {
//   let subArr = [];
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     let curSum = 0;
//     const curSubArr = [];

//     for (let j = i; j < arr.length; j++) {
//       curSum += arr[j];
//       curSubArr.push(arr[j]);
//       if (curSum > sum) {
//         sum = curSum;
//         subArr = [].concat(curSubArr);
//       }
//     }
//   }

//   return { subArr, sum };
// };

// O(n)
const getMaxSubSum = (arr) => {
  let subArr = [];
  let sum = 0;
  let curSum = 0;
  let curSubArr = [];

  for (let num of arr) {
    curSum += num;
    curSubArr.push(num);
    if (curSum > sum) {
      subArr = [].concat(curSubArr);
      sum = curSum;
    }
    if (curSum < 0) {
      curSum = 0;
      curSubArr = [];
    }
  }

  return { subArr, sum };
};

console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([2, -1, 2, 3, -9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
console.log(getMaxSubSum([-2, -1, 1, 2]));
console.log(getMaxSubSum([100, -9, 2, -3, 5]));
console.log(getMaxSubSum([1, 2, 3]));
