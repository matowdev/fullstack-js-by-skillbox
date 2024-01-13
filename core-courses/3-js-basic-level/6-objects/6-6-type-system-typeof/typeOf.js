// *примитивные типы данных (простые, нулевые)
console.log(typeof 'abc'); // string
console.log(typeof 1); // number
// console.log(typeof NaN); // number
console.log(typeof false); // boolean
console.log(typeof 123n); // bigint
console.log(typeof Symbol()); // symbol

console.log(typeof null); // object, хотя напрашивается/очевидно null
console.log(typeof undefined); // undefined

// *НЕ примитивные типы данных
console.log(typeof {}); // object
console.log(typeof []); // object
console.log(typeof function () {}); // function, хотя в общей системе JS типов нет такого понимания, как function

// *пример использования typeof
function getStringValue(unknown) {
  if (typeof unknown === 'string') {
    return unknown;
  }
  if (typeof unknown === 'function') {
    return unknown();
  }
  if (typeof unknown === 'object') {
    return unknown.toString();
  }

  return '';
}

console.log(getStringValue('Просто строка')); // Просто строка
console.log(
  getStringValue(function () {
    return new Date().getFullYear();
  })
); // 2024

console.log(getStringValue([1, 2, 3])); // 1,2,3
console.log(getStringValue({})); // [object Object]
console.log(getStringValue(true)); // ' '
