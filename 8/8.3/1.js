'use strict';

Function.prototype.defer = function (ms) {
  setTimeout(this, ms);
};
