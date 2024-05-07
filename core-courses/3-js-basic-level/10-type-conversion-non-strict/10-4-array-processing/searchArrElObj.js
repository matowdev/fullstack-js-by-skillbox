// ** поиск элемента/объекта (значения) в массиве, методы: find/findIndex(), every/some()
const students = [
  { name: 'Василий', age: 18 },
  { name: 'Генадий', age: 23 },
  { name: 'Андрей', age: 17 },
  { name: 'Тимофей', age: 29 },
  { name: 'Александр', age: 17 },
];

students.find((student) => student.name === 'Василий' && student.age === 18); // { name: 'Василий', age: 18 } - объект студента, соответствующий условиям
students.findIndex(
  (student) => student.name === 'Василий' && student.age === 18
); // 0 - индекс ноль, расположение соответствующего объекта

students.find((student) => student.age <= 16); // undefined
students.findIndex((student) => student.age <= 16); // -1

students.every((student) => student.age < 30); // true, т.к. у всех студентов возраст меньше 30 лет
students.every((student) => student.age >= 18); // false, т.к. есть несовершеннолетние

students.some((student) => student.age < 18); // true, т.к. есть как минимум один несовершеннолетний
students.some((student) => student.name === 'Иван'); // false, т.к. нет ни одного Ивана
