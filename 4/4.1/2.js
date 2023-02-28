'use strict';

const isEmpty = (obj) => {
  for (let key in obj) {
    return false;
  }
  return true;
};

const schedule = {};

console.log(isEmpty(schedule));

schedule['8:30'] = 'get up';

console.log(isEmpty(schedule));
