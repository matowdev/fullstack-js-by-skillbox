// ** преобразование массива (объектов), метод map()
const students = [
  { name: 'Василий', age: 18 },
  { name: 'Генадий', age: 23 },
  { name: 'Андрей', age: 17 },
  { name: 'Тимофей', age: 29 },
  { name: 'Александр', age: 17 },
];

// ! возврат/формирование массива значений (не объектов), согласно условий
const studentsName = students.map((student) => student.name);
console.log(studentsName); // ['Василий', 'Генадий', 'Андрей', 'Тимофей', 'Александр']
