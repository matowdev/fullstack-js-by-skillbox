// привычное исполнение
let x = 0;

if (Math.random() > 0.5) {
  x = 1;
  console.log('Переменная "x" равна = ' + x);
} else {
  console.log('Переменная "x" равна = ' + x);
}

// альтернативная запись, с помощью ?
y = Math.random() > 0.5 ? 1 : 0;
console.log('Переменная "y" равна = ' + y);

// плохой пример использования тернарного оператора
let age = 23;
let isAdult = age > 18 ? true : false; // само по себе сравнение age > 18 выдаст или true или false

// вот так нужно
let isAdultDoneRight = age > 18;
