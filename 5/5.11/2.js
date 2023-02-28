'use strict';

const getWeekDay = (date = new Date()) => {
  let fullWeekday = date.getDay();
  const weekdays = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  return weekdays[fullWeekday];
};

let date = new Date(2012, 0, 3);
console.log(getWeekDay(date));
