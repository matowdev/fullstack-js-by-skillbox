// Перемешивание двух переменных
let a = 3;
let b = 7;

let temp; // буферная переменная

temp = a;
a = b;
b = temp;

console.log(`Переменная "a" была: ${b}, стала: ${a}.`);
console.log(`Переменная "b" была: ${a}, стала: ${b}.`);

a !== 3 && b !== 7
  ? console.log('Перемешивание прошло успешно!')
  : console.log('Что-то пошло не так..');

// Перемешивание элементов массива
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let tempTemp;

for (let i = 0; i <= arr.length - 1; i++) {
  let j = Math.floor(Math.abs(Math.random() * arr.length - 1));
  // console.log(j); // 7, 8, 1, 7, 4, 7, 0, 0, 8, 7
  tempTemp = arr[i];
  arr[i] = arr[j];
  arr[j] = tempTemp;
}

console.log(arr); // (10) [6, 3, 9, 1, 5, 4, 8, 10, 2, 7]
