'use strict';

const getSecondsToday = () => {
  const startDate = new Date();
  startDate.setHours(0, 0, 0, 0);
  return Math.round((Date.now() - startDate.getTime()) / 1000);
};

console.log(getSecondsToday());
