'use strict';

// const getLastDayOfMonth = (year, month) => {
//   const date = new Date(year, month, 28);
//   let lastDay;

//   while (date.getMonth() === month) {
//     lastDay = date.getDate();
//     date.setDate(date.getDate() + 1);
//   }

//   return lastDay;
// };

const getLastDayOfMonth = (year, month) =>
  new Date(year, month + 1, 0).getDate();

console.log(getLastDayOfMonth(2024, 1));
