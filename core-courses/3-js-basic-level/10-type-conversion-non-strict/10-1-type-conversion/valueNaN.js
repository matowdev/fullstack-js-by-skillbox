// ** отдельно про значение NaN, проверку isNaN()
console.log(NaN === 0); // false
console.log(NaN === NaN); // false
console.log(NaN > 0); // false
console.log(NaN < 0); // false
console.log(NaN > NaN); // false
console.log(NaN < NaN); // false
// и т.д.

const value = 'Точно не число!?';

if (Number(value) === NaN) {
  console.log('Не удалось разобрать число..!');
} // ! данная/такая проверка не корректна, т.к. NaN === NaN, будет всегда false

if (isNaN(Number(value))) {
  console.log('Не удалось разобрать число..!');
} // а/вот такая проверка сработает, как надо!
