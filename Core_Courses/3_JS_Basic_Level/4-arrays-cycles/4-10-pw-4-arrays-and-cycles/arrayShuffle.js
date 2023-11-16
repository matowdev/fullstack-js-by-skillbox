// ? Что нужно сделать
// 1. Создайте с помощью цикла for массив упорядоченных чисел с количеством чисел, равным count.
// 2. С помощью второго цикла перемешайте этот массив.
// 3. Выведите получившийся результат на экран с помощью console.log.

// функция для генерации упорядоченного массива
function getOrderedArr(count) {
  let orderArr = [];

  for (let i = 1; i <= count; i++) {
    orderArr.push(i);
  }

  return orderArr;
}

// функция для перемешивания массива
function getShuffledArr(count) {
  let arr = getOrderedArr(count);
  let temp;

  for (let i = 0; i < arr.length; i++) {
    let j = Math.floor(Math.random() * arr.length);
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  return arr;
}

// инициализация/вывод тестовых массивов
let shuffledArr = getShuffledArr(5);
console.log(shuffledArr); // (5) [2, 5, 1, 3, 4]

let shuffledArr2 = getShuffledArr(7);
console.log(shuffledArr2); // (7) [5, 1, 6, 4, 2, 7, 3]

let shuffledArr3 = getShuffledArr(3);
console.log(shuffledArr3); // (3) [2, 1, 3]
