// ** определение позиции под-строки, метод indexOf()
const fullName = 'Мирон Сергеевич Матылёнок';
const surname = 'Матылёнок';
const surnameIndex = fullName.indexOf(surname);

console.log('Фамилия располагается по индексу:', surnameIndex); // Фамилия располагается по индексу: 16

// перемещение фамилии в начало (если она не там)
if (surnameIndex > 0) {
  console.log(`Перемещаем в начало!`);
  console.log(surname + ' ' + fullName.replace(surname, '').trim()); // Матылёнок Мирон Сергеевич
} else {
  console.log(fullName);
}
