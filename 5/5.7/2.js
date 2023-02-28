'use strict';

const aclean = (arr = []) => {
  const map = new Map();
  arr.forEach((word) => {
    let sortedWord = word.toLowerCase().split('').sort().join('');
    cleanMap.set(sortedWord, word);
  });
  return Array.from(map.values());
};

let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

console.log(aclean(arr));
