'use strict';

const getLocalDay = (date = new Date()) => {
  let fullWeekday = date.getDay();
  const weekdays = [7, 1, 2, 3, 4, 5, 6];
  return weekdays[fullWeekday];
};

// function getLocalDay(date) {
//   let day = date.getDay();
//   return day === 0 ? 7 : day;
// }

let date = new Date(2012, 0, 3);
console.log(getLocalDay(date));
