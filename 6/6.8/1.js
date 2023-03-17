'use strict';

function printNumbers(from, to) {
  let cur = from;

  let timerId = setInterval(function () {
    console.log(cur);
    if (cur == to) {
      clearInterval(timerId);
    }
    cur++;
  }, 1000);
}

function printNumbers(from, to) {
  let cur = from;

  setTimeout(function go() {
    console.log(cur);
    if (cur < to) {
      setTimeout(go, 1000);
    }
    cur++;
  }, 1000);
}
