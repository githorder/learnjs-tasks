'use strict';

function delay(f, ms) {
  return function () {
    setTimeout(() => f.apply(this, arguments), ms);
  };
}

let func1000 = delay(console, 1000);

func1000('hello');
