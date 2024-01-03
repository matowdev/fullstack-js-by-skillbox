// ? Что нужно сделать (задача 1)
// 1. Создайте функцию с названием getAge(), которая будет рассчитывать возраст по году рождения.
// 2. После расчёта, функция должна вернуть результат с помощью команды return.
// 2. Созданную функцию нужно вызвать, передав ей дату рождения. Результат, который вернёт функция, необходимо вывести в консоль.

// первый вариант
function getAge(birthYear) {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear(); // 2023

  return currentYear - birthYear;
}

let currentAge = getAge(1998);
console.log(currentAge); // 25

let currentAge2 = getAge(1991);
console.log(currentAge2); // 32

let currentAge3 = getAge(2007);
console.log(currentAge3); // 16

// *второй вариант
function getAge2(birthYear) {
  let currentAge = new Date().getFullYear() - birthYear;
  return currentAge;
}

console.log(getAge2(1998)); // 25
console.log(getAge2(1991)); // 32
console.log(getAge2(2007)); // 16
