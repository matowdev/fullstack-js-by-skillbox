// ** удаление/добавление элементов из/в массив, методы: shift/unshift(), pop/push()
const numArr = [0, 1, 2, 3, 4, 5];

// ! работа с началом массива
// удаление/возврат первого элемента
const firstEl = numArr.shift();
console.log(firstEl); // 0
console.log(numArr); // [1, 2, 3..], т.е. без нуля

// добавление элемента/элементов в начало
numArr.unshift(0);
console.log(numArr); // [0, 1, 2, 3, 4, 5]

// ! работа с концом массива
// удаление/возврат последнего элемента
const lastEl = numArr.pop();
console.log(lastEl); // 5
console.log(numArr); // [0, 1, 2, 3, 4], т.е. без 5

// добавление элемента/элементов в конец
numArr.push(5, 6);
console.log(numArr); // [0, 1, 2, 3, 4, 5, 6]

// ? интересный пример, на уменьшение
while (numArr.length) {
  console.log(`Another One Bites the Dust: ${numArr.pop()}`); // Another One Bites the Dust: 6, 5, 4..
}
