// ** обработка входящей информации (строки). Цепочка вызовов
parseEmployeesData(`
Матылёнок Мирон  Сергеевич,  junior-разработчик
Стук Сергей Николаевич , web-разработчик
`);

function parseEmployeesData(dataString) {
  return console.log(
    dataString
      .split('\n')
      .filter((line) => line.trim().length > 0)
      .map((line) => {
        const [fullName, occupation] = line
          .split(',')
          .map((str) => str.trim())
          .filter((text) => text.length > 0);
        const [surname, name, middleName] = fullName
          .split(' ')
          .filter((text) => text.length > 0);
        return { surname, name, middleName, occupation }; // возврат объекта(ов), т.е. как результат отработки map((line)) => {..}, такой вот интересной логики
      })
  );
}

/*
в итоге, массив структурированных объектов/данных:

[
  {
    surname: 'Матылёнок',
    name: 'Мирон',
    middleName: 'Сергеевич',
    occupation: 'junior-разработчик'
  },
  {
    surname: 'Стук',
    name: 'Сергей',
    middleName: 'Николаевич',
    occupation: 'web-разработчик'
  }
]
*/
