// ** поиск под-строки, методы: includes(), startWith/endWith()
const str = 'Строка для проверки';

str.includes('для'); // true, т.к. в строке/str есть 'для'
str.includes('42'); // false

str.startsWith('Строка '); // true, т.к. строка/str начинается с 'Строка '
str.startsWith('для'); // false

str.endsWith('верки'); // true
