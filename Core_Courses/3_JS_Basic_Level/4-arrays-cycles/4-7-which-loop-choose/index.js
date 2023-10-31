// простое повторение
for (let i = 0; i <= 10; i++) {
  console.log(i); // 0, 1, 2.. 10
}

// наполнение массива
let a = [];
for (let i = 0; i <= 10; i++) {
  a.push(i * i);
}
console.log(a); // (11) [0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

// из одного массива в другой.. изменение элементов
let b = [];
for (let elem of a) {
  b.push(elem / 2);
}
console.log(b); // (11) [0, 0.5, 2, 4.5, 8, 12.5, 18, 24.5, 32, 40.5, 50]

// заполнение пустого массива, на основе сторонних данных (без понимания длинны)
let lines = ['Hello', 'Big', 'World!'];
let next;
// while ((next = file.nextLine())) {
//   lines.push(next);
// }

// обработка значений массива
for (let line of lines) {
  console.log('Длинна строки: ' + line.length); // Длинна строки: 5, 3, 6
}

// взаимодействие с элементами массива согласно их индексов
for (let number in lines) {
  console.log(
    `Длина строки № ${Number(number) + 1}: ${
      lines[number].length
    } символ(а/ов).`
  ); // Длина строки № 1: 5 символ(а/ов)..
}

// обработка значений/индексов в обратном порядке
let aReversed = [];
for (let i = a.length - 1; i >= 0; --i) {
  aReversed.push(a[i]);
}
console.log(aReversed); // (11) [100, 81, 64, 49, 36, 25, 16, 9, 4, 1, 0]

// сложная логика выхода из цикла
let currentAttempt = 0;
while (currentAttempt++ < 1000) {
  // if (crayfishWhistles()) break;
}

// Обработка массивов одинаковой длинны, сложение/взаимодействие с индексами (for или for..in)
for (let i = 0; i < a.length; i++) {
  console.log(a[i] + aReversed[i]); // 100, 82, 68, 58, 52, 50, 52, 58, 68, 82, 100
}

// или

for (let i in a) {
  console.log(a[i] + aReversed[i]); // 100, 82, 68, 58, 52, 50, 52, 58, 68, 82, 100
}

// сложная логика изменения завершающего шага
for (let x = 0; x < 5; x += Math.round(Math.random() * 5)) {
  console.log(x);
}
