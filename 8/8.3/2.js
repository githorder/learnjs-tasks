'use strict';

Function.prototype.defer = function (ms) {
  let func = this;
  return (...args) => setTimeout(() => func.call(this, ...args), ms);
};
