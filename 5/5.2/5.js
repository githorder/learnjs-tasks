const random = (num1, num2) => {
  let min = Math.min(num1, num2);
  let max = Math.max(num1, num2);
  return Math.random() * (max - min) + min;
};

console.log(random(1, 5));
