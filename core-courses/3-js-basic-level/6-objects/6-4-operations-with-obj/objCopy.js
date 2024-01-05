// копирование/присвоение примитивного типа данных
let digit = 20;
let otherDigit = digit;

otherDigit += 5;

console.log(otherDigit); // 25
console.log(digit); // 20 - как и было..

// копирование/присвоение объекта
let obj = { model: 'VW Polo' };
let otherObj = obj;

otherObj.model = 'Volkswagen Polo';

console.log(otherObj); // {model: 'Volkswagen Polo'}
console.log(obj); // {model: 'Volkswagen Polo'} - значение свойства изменилось..
