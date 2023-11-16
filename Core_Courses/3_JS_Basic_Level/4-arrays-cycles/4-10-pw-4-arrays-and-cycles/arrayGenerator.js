// ? Что нужно сделать
// 1. Напишите генератор массивов длиной count со случайными числами от n до m. Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m.
// 2. Выведите результат с помощью console.log.

// первый вариант

function getRandomNum(n, m) {
  let range = Math.abs(m - n); // количество возможно сгенерированных чисел (не повторяющихся)
  // console.log(range);

  let numberInRange = Math.round(Math.random() * range); // округление рандомно сгенерированного числа
  // console.log(numberInRange);

  let min = Math.min(n, m); // ввод/понимание (возможно) отрицательного диапазона/границ
  // console.log(min);

  let randomNum = min + numberInRange; // получение итогового рандомного числа (согласно округлений, диапазонов..)
  // console.log(randomNum);

  return randomNum;
}

function arrayFilling(n, m, count) {
  let newArr = [];
  for (let i = 0; i < count - 1; i++) {
    newArr.push((newArr[i] = getRandomNum(n, m))); // логика i++ и сохранение в "индекс" (при завершающем шаге) увеличивают массив, именно из-за этого приходится от count отнимать - 1, что бы выйти на соответствующую/корректную длину массива
  }

  // console.log(newArr);
}

arrayFilling(0, 100, 100);

// *второй вариант

// функция для генерации случайного числа в заданном диапазоне (т.е. в  min, max переданном)
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// функция для наполнения массива случайно генерированными числами
function arrFill(min, max, count) {
  let arr = [];

  for (let i = 0; i < count; i++) {
    arr.push(getRandomNum(min, max));
  }

  return arr;
}

// инициализация/вывод тестовых массивов
let randomFillingArr = arrFill(0, 100, 100);
console.log(randomFillingArr); // (100) [39, 7, 17, 5, 21, 54, 88, 69, ..]

let randomFillingArr2 = arrFill(2, 5, 50);
console.log(randomFillingArr2); // (50) [3, 2, 4, 3, 4, 3, 5, 2, 3, 3, ..]

let randomFillingArr3 = arrFill(100, -5, 70);
console.log(randomFillingArr3); // (70) [-1, 40, 70, 99, 66, 68, 59, ..]

let randomFillingArr4 = arrFill(-3, -10, 42);
console.log(randomFillingArr4); // (42) [-5, -4, -8, -7, -8, -5, -7, ..]
