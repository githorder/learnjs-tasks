'use strict';

let age = +prompt('Enter the age: ', '');

if (!(age >= 14) || !(age <= 90)) {
  alert(`${age} is not in the range of 14 to 90`);
} else {
  alert(`${age} is in the range of 14 to 90`);
}

if (!(age >= 14 && age <= 90)) {
  alert(`${age} is not in the range of 14 to 90`);
} else {
  alert(`${age} is in the range of 14 to 90`);
}

if (age < 14 || age > 90) {
  alert(`${age} is not in the range of 14 to 90`);
} else {
  alert(`${age} is in the range of 14 to 90`);
}
