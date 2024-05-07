// ** переборка массива (объектов), метод forEach()
const students = [
  { name: 'Василий', age: 18 },
  { name: 'Генадий', age: 23 },
  { name: 'Андрей', age: 17 },
  { name: 'Тимофей', age: 29 },
  { name: 'Александр', age: 17 },
];

students.forEach((student, index) =>
  console.log(`Студент №${index + 1}: ${student.name}`)
);
// Студент №1: Василий
// Студент №2: Генадий
// Студент №3: Андрей
// Студент №4: Тимофей
// Студент №5: Александр

// ? альтернатива, без forEach()
for (const index in students) {
  const student = students[index]; // объект студента
  console.log(`Студент №${+index + 1}: ${student.name}`);
}
// Студент №1: Василий
// Студент №2: Генадий
// Студент №3: Андрей
// Студент №4: Тимофей
// Студент №5: Александр
