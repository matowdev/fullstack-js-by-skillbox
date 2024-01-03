// функция сортировки массива методом "пузырька"
function getSortBubblesArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // если поменять знак, на < сортировка начнёт работать на убывание
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

let arrNum = [3, 22, 34, 12, 55, 22, 12, 3];

let sortArr = getSortBubblesArr(arrNum);
console.log(sortArr); // (8) [3, 3, 12, 12, 22, 22, 34, 55]

//
// функция сортировки массива методом "пузырька" с проверкой на операцию обмена (хоть что то менялось местами..?)
function getSortBubblesArr2(arr) {
  let swapped = true;

  for (let i = 0; i < arr.length - 1 && swapped; i++) {
    swapped = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swapped = true;
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

let arrNum2 = [3, 22, 34, 12, 55, 22, 12, 3];

let sortArr2 = getSortBubblesArr(arrNum2);
console.log(sortArr2); // (8) [3, 3, 12, 12, 22, 22, 34, 55]
