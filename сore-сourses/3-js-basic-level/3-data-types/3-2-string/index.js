// варианты кавычек
let singleQuote = 'Строка в одиночных кавычках';
// let doubleQuote = "Строка в двойных кавычках";
let tickQuote = `Строка в обратных кавычках`;

// многострочные записи
let multiLine1 = 'Строка\nс\nпереносами.. посредствам "\\n"';
console.log(multiLine1);
let multiLine2 = `Строка
с
переносами.. посредствам "обратных кавычек"`;
console.log(multiLine2);

// конкатенация
let str1 = 'Первая строка';
let str2 = 'Вторая строка';

let concat = str1 + '\n' + str2;
console.log(concat); // Первая строка\nВторая строка

let tickConcat = `${str1}
${str2}`;
console.log(tickConcat); // Первая строка\nВторая строка

let greetings = 'Привет';
let personName = 'Сергей';
console.log(`${greetings}, ${personName}! Добро дня!`); // Привет, Сергей! Добро дня!

// дополнительные решения
console.log('"Кавычка в кавычках \' "');
console.log("'Кавычка в кавычках \" '");
console.log(`'Кавычка в кавычках \` '`);
console.log('Символ табуляции: \t' + 'ничего не видно, да?');
console.log('Обратный слэш: \\ ');
console.log('\x31'); // цифра 1 в UTF-8, в hex
console.log('\u0031'); // цифра 1 в UTF-16, в hex
console.log('\u{1f354}'); // эмодзи 'гамбургер', в UTF-32, в hex
