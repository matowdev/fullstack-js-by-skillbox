// obj1 и obj2 - ссылка на один и то же объект
let obj1 = { name: 'Какой-то объект' };
let obj2 = obj1;

console.log(obj2); // {name: 'Какой-то объект'}
console.log(obj1 === obj2); // true.. очевидно!?

// присвоение похожего (один в один) объекта, но.. кулуарно по другой ссылке
obj2 = { name: 'Какой-то объект' };

console.log(obj1 === obj2); // false
