'use strict';

let number = +prompt('Enter a number', '');

if (number > 0) {
  alert(1);
} else if (number < 0) {
  alert(-1);
} else if (number === 0) {
  alert(0);
} else {
  alert('You should enter a number');
}
