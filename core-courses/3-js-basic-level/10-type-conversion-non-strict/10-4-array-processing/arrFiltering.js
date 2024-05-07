// ** фильтрация массива (объектов), метод filter()
const students = [
  { name: 'Василий', age: 18 },
  { name: 'Генадий', age: 23 },
  { name: 'Андрей', age: 17 },
  { name: 'Тимофей', age: 29 },
  { name: 'Александр', age: 17 },
];

// ! возврат/формирование "новых" массивов (с объектами), согласно условий фильтраций
const youngStudents = students.filter((student) => student.age < 18);
console.log(youngStudents); // [ { name: 'Андрей', age: 17 }, { name: 'Александр', age: 17 } ]

const notAndrei = students.filter((student) => student.name !== 'Андрей');
console.log(notAndrei);
// [
//   { name: 'Василий', age: 18 },
//   { name: 'Генадий', age: 23 },
//   { name: 'Тимофей', age: 29 },
//   { name: 'Александр', age: 17 }
// ], т.е. все кроме Андрея
