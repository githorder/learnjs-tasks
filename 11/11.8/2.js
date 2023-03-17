'use strict';

async function demoGithubUser() {
  let user;
  while (true) {
    let name = prompt('Введите логин?', 'iliakan');

    try {
      user = await loadJson(`https://api.github.com/users/${name}`);
      break;
    } catch (err) {
      if (err instanceof HttpError && err.response.status == 404) {
        console.log(
          'Такого пользователя не существует, пожалуйста, повторите ввод.'
        );
      } else {
        throw err;
      }
    }
  }

  console.log(`Полное имя: ${user.name}.`);
  return user;
}
