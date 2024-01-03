// 1 пример
// вычисление расстояния между двумя точками, теорема Пифагора
let x1 = 9;
let y1 = 3;

let x2 = -2;
let y2 = 5;

let cathetus1 = Math.abs(x1 - x2);
let cathetus2 = Math.abs(y1 - y2);

console.log(
  Math.sqrt(Math.pow(cathetus1, 2) + Math.pow(cathetus2, 2)).toFixed(1) // 11.2
);

// 2 пример
// сравнение 2 дробных чисел с указанной точностью, посредствам переменной
let first = 0.1 + 0.2 + 0.033;
let second = 0.33334;
let precision = 3;

let firstNormalized = Math.round(first * Math.pow(10, precision));
let secondNormalized = Math.round(second * Math.pow(10, precision));

console.log('Исходные числа равны:', first === second);
console.log('Числа равны:', firstNormalized === secondNormalized);
console.log('Первое число больше:', firstNormalized > secondNormalized);
console.log('Второе число больше:', firstNormalized < secondNormalized);

// 3 пример
// генерация случайных целых чисел между n и m
let n = -100;
let m = 350;

let range = Math.abs(m - n); // количество возможно сгенерированных чисел
// console.log(range); // 450

let numberInRange = Math.round(Math.random() * range); // округление рандомно сгенерированного числа (от 0 до 450)
// console.log(numberInRange);

let min = Math.min(n, m); // ввод отрицательного диапазона
// console.log(min); // -100

console.log(min + numberInRange); // вывод числа (-100 + рандомное)

// 4 пример
// отдельный вывод целого и дробного с точностью n
let precision2 = 3;
let number = 0x12f + 0.3 + 0.1;

console.log('Исходное число:', number); // 303.40000000000003
console.log('Целая часть:', Math.floor(number)); // 303
console.log(
  'Дробная часть:',
  Math.round((number % 1) * Math.pow(10, precision2)) // остаток от деления на 1 возвращает дробную часть, т.е. 400
);
