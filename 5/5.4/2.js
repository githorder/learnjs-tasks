'use strict';

const styles = ['Джаз', 'Блюз'];
console.log(styles);
styles.push('Рок-н-ролл');
console.log(styles);
styles[Math.floor(styles.length / 2)] = 'Классика';
console.log(styles);
console.log(styles.splice(0, 1)[0]);
styles.unshift('Рэп', 'Регги');
console.log(styles);
