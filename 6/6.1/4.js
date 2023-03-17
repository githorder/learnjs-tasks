'use strict';

const list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

const logListWhile = (list) => {
  let temp = list;

  while (temp) {
    console.log(temp.value);
    temp = temp.next;
  }
};

const logList = (list) => {
  console.log(list.value);
  if (list.next) printList(list.next);
};

logList(list);
logListWhile(list);
