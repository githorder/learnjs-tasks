'use strict';

const checkSpam = (str = '') => {
  if (!str) return str;
  let newStr = str.toLowerCase();
  return newStr.includes('viagra') || newStr.includes('xxx');
};

console.log(checkSpam('buy ViAgRA now') == true);
console.log(checkSpam('free xxxxx') == true);
console.log(checkSpam('innocent rabbit') == false);
