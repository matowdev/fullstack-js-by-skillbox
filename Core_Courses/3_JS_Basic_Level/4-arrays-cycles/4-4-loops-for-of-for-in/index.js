// for..of
let fruits = ['Яблоко', 'Банан', 'Апельсин', 'Ананас', 'Дыня'];

console.log('Сегодня я съел:');

for (let fruit of fruits) {
  console.log(fruit);
}

// for..in
let rating = ['Катя', 'Вася', 'Маша', 'Петя', 'Лена'];

console.log('Рейтинг студентов:');

for (let index in rating) {
  console.log(`${parseInt(index) + 1} место: ${rating[index]}`);
}

// Рейтинг студентов:
// 1 место: Катя
// 2 место: Вася
// 3 место: Маша
// 4 место: Петя
// 5 место: Лена

// for..in без parseInt()
console.log('Рейтинг студентов:');

for (let index in rating) {
  console.log(`${index + 1} место: ${rating[index]}`);
}

// Рейтинг студентов:
// 01 место: Катя
// 11 место: Вася
// 21 место: Маша
// 31 место: Петя
// 41 место: Лена
