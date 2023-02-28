'use strict';

// const camelize = (str = '') => {
//   const words = str.split('-');
//   let camelizedStr = words[0];
//   for (let i = 1; i < words.length; i++) {
//     camelizedStr += words[i][0].toUpperCase() + words[i].slice(1);
//   }
//   console.log(camelizedStr);
//   return camelizedStr;
// };

const camelize = (str = '') =>
  str
    .split('-')
    .map((word, i) => (i === 0 ? word : word[0].toUpperCase() + word.slice(1)))
    .join('');

camelize('background-color');
camelize('list-style-image');
camelize('-webkit-transition');

console.log(camelize('hello-there'));
