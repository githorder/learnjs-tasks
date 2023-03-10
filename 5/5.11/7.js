'use strict';

const getSecondsToTomorrow = () => {
  const now = new Date();
  const tomorrow = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    23,
    59,
    59
  );
  return Math.round((tomorrow - now) / 1000);
};

// const getSecondsToTomorrow = () => {
//   let now = new Date();
//   let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
//   return Math.round((tomorrow - now) / 1000);
// };

console.log(getSecondsToTomorrow());
