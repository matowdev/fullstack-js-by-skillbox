// ? Что нужно сделать
// 1. Создайте функцию arrSort(), аргументом (параметром) которой будет массив. Задача функции — сделать сортировку элементов переданного массива по возрастанию.
// 2. Функция должна вернуть отсортированный массив, а результат выполнения функции должен быть выведен в консоль с помощью console.log.

// *первый вариант
function arrSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

console.log(arrSort([2, 5, 1, 3, 4])); // [1, 2, 3, 4, 5]
console.log(arrSort([12, 33, 3, 44, 100])); // [3, 12, 33, 44, 100]
console.log(arrSort([0, 1])); // [0, 1]

// второй вариант
// данный подход считается более эффективным чем два вложенных цикла for, которые всегда выполняются полностью
function arrSort2(arr) {
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

console.log(arrSort2([2, 5, 1, 3, 4])); // [1, 2, 3, 4, 5]
console.log(arrSort2([12, 33, 3, 44, 100])); // [3, 12, 33, 44, 100]
console.log(arrSort2([0, 1])); // [0, 1]

// третий вариант
function arrSort3(arr) {
  return arr.sort((a, b) => a - b);
}

console.log(arrSort3([2, 5, 1, 3, 4])); // [1, 2, 3, 4, 5]
console.log(arrSort3([12, 33, 3, 44, 100])); // [3, 12, 33, 44, 100]
console.log(arrSort3([0, 1])); // [0, 1]
