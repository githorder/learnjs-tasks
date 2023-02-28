'use strict';

const getDateAgo = (date = new Date(), days = 0) => {
  const months = [
    'JAN',
    'FEB',
    'MAR',
    'APL',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];

  // const dateAgo = new Date(
  //   date.getFullYear(),
  //   date.getMonth(),
  //   date.getDate() - days
  // );

  const dateAgo = new Date(date);
  dateAgo.setDate(date.getDate() - days);

  return `${dateAgo.getDate()} (${dateAgo.getDate()} ${
    months[dateAgo.getMonth()]
  } ${dateAgo.getFullYear()})`;
};

let date = new Date(2015, 0, 2);

console.log(getDateAgo(date, 1));
console.log(getDateAgo(date, 2));
console.log(getDateAgo(date, 365));
