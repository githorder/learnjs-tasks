'use strict';

let login = prompt('Who is it?', '');
let password;

if (login === 'Админ') {
  password = prompt('What is the password?', '');

  if (password === 'Я главный') {
    alert('Здравствуйте!');
  } else if (password === '' || password === null) {
    alert('Отменено');
  } else {
    alert('Неверный пароль');
  }
} else if (login === null || login === '') {
  alert('Отменено');
} else {
  alert('Я вас не знаю');
}
