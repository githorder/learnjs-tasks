'use strict';

const formatDate = (date = new Date()) => {
  const now = new Date();
  let diffSeconds = Math.floor((now - date) / 1000);
  let diffMinutes = Math.floor(diffSeconds / 60);
  let diffHours = Math.floor(diffMinutes / 60);

  const formattedDateArr = [
    '0' + date.getDate(),
    '0' + (date.getMonth() + 1),
    '' + date.getFullYear(),
    '0' + date.getHours(),
    '0' + date.getMinutes(),
  ].map((datePart) => datePart.slice(-2));

  if (diffSeconds < 1) {
    return 'прямо сейчас';
  } else if (diffMinutes < 1) {
    return `${diffSeconds} сек. назад`;
  } else if (diffHours < 1) {
    return `${diffMinutes} мин. назад`;
  } else {
    return (
      formattedDateArr.slice(0, 3).join('.') +
      ' ' +
      formattedDateArr.slice(3).join(':')
    );
  }
};

console.log(formatDate(new Date(new Date() - 1)));
console.log(formatDate(new Date(new Date() - 30 * 1000)));
console.log(formatDate(new Date(new Date() - 5 * 60 * 1000)));
console.log(formatDate(new Date(new Date() - 86400 * 1000)));
