// Простой поиск элемента в массиве
let arrStudents = ['Валя', 'Игорь', 'Витя', 'Женя', 'Таня', 'Рома'];
let indexName = -1;

for (let i = 0; i <= arrStudents.length - 1; i++) {
  if (arrStudents[i] === 'Женя') {
    indexName = i;
  }
}

indexName >= 0
  ? console.log('Женя, привет! Индекс: ' + indexName)
  : console.log('Жень нет..'); // Женя, привет! Индекс: 3
