'use strict';

const truncate = (str = '', maxlength = 0) => {
  if (str.length <= maxlength) return str;
  return str.slice(0, maxlength - 1) + '…';
};

console.log(truncate('abcdefg', 6));
