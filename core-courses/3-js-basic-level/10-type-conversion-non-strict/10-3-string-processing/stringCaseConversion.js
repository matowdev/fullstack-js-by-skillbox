// ** преобразование регистра строки, методы: toUpperCase() и toLowerCase()
const str = 'СтроКА длЯ ПроВерКи';

str.toUpperCase(); // СТРОКА ДЛЯ ПРОВЕРКИ
str.toLowerCase(); // строка для проверки

str.toUpperCase().includes('ПРОВЕРКИ'); // true
str.toLowerCase().includes('проверки'); // true
