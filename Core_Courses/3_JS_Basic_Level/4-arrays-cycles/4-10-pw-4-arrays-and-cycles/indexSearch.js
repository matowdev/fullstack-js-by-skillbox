// ? Что нужно сделать (задача 3)
// С помощью цикла найдите индекс (порядковый номер) элемента массива из предыдущего задания с числом n. Если такой элемент не будет найден, то выведите соответствующее сообщение на экран.

// function getOrderedArr(count) {
//   let orderArr = [];

//   for (let i = 1; i <= count; i++) {
//     orderArr.push(i);
//   }

//   return orderArr;
// }

// function getShuffledArr(count) {
//   let arr = getOrderedArr(count);
//   let temp;

//   for (let i = 0; i < arr.length; i++) {
//     let j = Math.floor(Math.random() * arr.length);
//     temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//   }

//   return arr;
// }

// let shuffledArr = getShuffledArr(5);
// let shuffledArr2 = getShuffledArr(7);
// let shuffledArr3 = getShuffledArr(3);

// *первый вариант

// функция поиска индекса элемента в массиве (возврат сообщения)
function getIndex(arr, n) {
  let resp = false;

  for (let i in arr) {
    if (+i == n) {
      resp = true;
    }
  }

  return resp
    ? console.log(`Есть такой индекс! Индекс ${n}`)
    : console.log(`Такого индекса, как ${n} нет..`);
}

// вызов/получение результатов
getIndex(shuffledArr, 3); // Есть такой индекс! Индекс 3
getIndex(shuffledArr2, 1); // Есть такой индекс! Индекс 1
getIndex(shuffledArr3, 7); // Такого индекса, как 7 нет..

// второй вариант

// функция поиска индекса элемента в массиве
// function getIndex(arr, n) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === n) {
//       return console.log(`Найден индекс ${i} для элемента ${n}`);
//     }
//   }

//   console.log(`Элемент ${n} не найден в массиве`);
// }

// инициализация
// getIndex(shuffledArr, 3);
// getIndex(shuffledArr2, 1);
// getIndex(shuffledArr3, 7);
