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

const logListReverse = (list) => {
  if (list.next) {
    logListReverse(list.next);
  }

  console.log(list.value);
};

function logListReverseWhile(list) {
  let arr = [];
  let tmp = list;

  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

logListReverse(list);
logListReverseWhile(list);
