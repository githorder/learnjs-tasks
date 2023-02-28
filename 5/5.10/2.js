'use strict';

const salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

const topSalary = (salaries = {}) => {
  const entries = Object.entries(salaries);
  let topSalary = 0;
  let topName = '';

  if (!entries.length) return null;

  for (let [name, salary] of entries) {
    if (topSalary < salary) {
      topSalary = salary;
      topName = name;
    }
  }

  return topName;
};

console.log(topSalary(salaries));
