// ? Что нужно сделать
// Напишите функцию filter(), для фильтрации массива объектов, по значению свойства. Массив, название свойства и нужное значение должны передаваться в качестве аргументов.

let objects = [
  { name: 'Василий', surname: 'Васильев' },
  { name: 'Иван', surname: 'Иванов' },
  { name: 'Пётр', surname: 'Петров' },
];

function filter(objects, key, value) {
  let getUser = objects.filter((user) => user[key] === value);
  return getUser;
}

let totalArr = filter(objects, 'name', 'Иван');
console.dir(totalArr); // Array(1) [{ name: 'Иван', surname: 'Иванов' }]
