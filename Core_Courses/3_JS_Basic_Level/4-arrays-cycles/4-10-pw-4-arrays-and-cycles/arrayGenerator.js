// Что нужно сделать
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

function arrayFilling2(n, m, count) {
  let newArr = [];
  for (let i = 0; i < count - 1; i++) {
    newArr.push((newArr[i] = getRandomNum(n, m))); // логика i++ и сохранение в "индекс" (при завершающем шаге) увеличивают массив, именно из-за этого приходится от count отнимать - 1, что бы выйти на соответствующую/корректную длину массива
  }

  console.log(newArr);
}

arrayFilling2(0, 100, 100);

// второй вариант

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

// запуск/вывод результата
let randomFillingArr = arrFill(0, 100, 100);
console.log(randomFillingArr); // (100) [39, 7, 24, 5, 21, 54, 88, 88, ..]
