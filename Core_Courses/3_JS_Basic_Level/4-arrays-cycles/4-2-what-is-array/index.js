let fruits = ['Яблоко', 'Апельсин', 'Груша', 'Банан', 'Манго'];
console.log(fruits); // (5) ['Яблоко', 'Апельсин', 'Груша', 'Банан', 'Манго']

let alphabet = [];

// метод .unshift() - добавление в начало массива
alphabet.unshift('В');
alphabet.unshift('А', 'Б');

// метод .push() - добавление в конец
alphabet.push('Г');
alphabet.push('Д');
alphabet.push('Е', 'Ж', 'З');

console.log(alphabet); // (8) ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З']

// определение длинны массива
console.log(alphabet.length); // 8

// замена элементов
let greetings = ['hello', 'good morning', 'good evning', 'good afternoon'];
console.log(greetings[2]); // good evning - упс, опечатка

greetings[2] = 'good evening';
console.log(greetings[2]); // good evening - теперь правильно
