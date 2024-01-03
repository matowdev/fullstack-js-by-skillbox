// не корректное/не понятное именование
function qazxsw(n, m) {
  let x = Math.abs(m - n);
  let y = Math.round(Math.random() * x);
  let z = Math.min(n, m);

  return z + y;
}

// корректное/понятное именование
function generateRandomNumber(n, m) {
  let range = Math.abs(m - n); // числовой диапазон
  let numberFromRange = Math.round(Math.random() * range); // произвольное число из диапазона
  let minNumber = Math.min(n, m); // минимальное число из передаваемых

  return minNumber + numberFromRange; // итоговое, рандомно сгенерированное число из указанного диапазона
}

// camelCase - как верблюд с горбом, отсюда и название
// первая буква строчная, каждое последующее слово с заглавной, в многословных конструкциях
function camelCaseFunction() {
  let camelCaseLet = null;
}

// данный файл называется namingConventions.js

// можно встретить и такое именование
// PascalCase
// kebab-case
// snake_case
