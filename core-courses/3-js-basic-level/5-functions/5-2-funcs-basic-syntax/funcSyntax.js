// вызов именованной/декларированной функции
funcName(); // Вызов декларированной функции.. состоялся!

// вызов посредствам имени переменной
// funcAsVariable(); // Uncaught ReferenceError: Cannot access 'funcAsVariable' before initialization

// объявление именованной функции / function declaration
function funcName() {
  // тело функции

  return console.log('Вызов декларированной функции.. состоялся!');
}

// присвоение/развёртывание функции, как значения для переменной / function expression
let funcAsVariable = function () {
  // тело функции

  return console.log('Вызов внутренней функции.. состоялся!');
};

// *вызов посредствам имени переменной
funcAsVariable(); // Вызов внутренней функции.. состоялся!
