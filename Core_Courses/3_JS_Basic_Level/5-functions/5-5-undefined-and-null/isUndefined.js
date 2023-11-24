// переменная без значения
let emptyVariable;
console.log(emptyVariable); // undefined

// пустая функция
function emptyFunction() {}
console.log(emptyFunction()); // undefined

// не соответствующие индексы
let arr = [1, 2, 3];

console.log(arr[2]); // 3
console.log(arr[3]); // undefined
console.log(arr[100]); // undefined
console.log(arr[-1]); // undefined

// сравнение с undefined
console.log(arr[-1] === undefined); // true
console.log(arr[0] === undefined); // false
