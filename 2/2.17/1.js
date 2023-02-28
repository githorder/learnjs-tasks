'use strict';

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

// ask(
//   'Вы согласны?',
//   function () {
//     alert('Вы согласились.');
//   },
//   function () {
//     alert('Вы отменили выполнение.');
//   }
// );

ask(
  'Are you agree?',
  () => console.log('You agreed'),
  () => console.log('You canceled the process')
);
