let myName = 'Sergey';
let mySurName = 'Stuk';
let myMiddleName = 'N.';

let me = {
  // myName: myName,
  // эквивалентная запись 'просто' - myName,
  myName,
  // mySurName: mySurName,
  // эквивалентная запись 'просто' - mySurName,
  mySurName,
  middleName: myMiddleName,
  birthDate: { year: 1986, month: 8, day: 20 },
  occupation: 'unemployed',
  married: true,
  'property with spaces': null,
  'property.with.dots': undefined,
};

// добавление "нового" свойства в объект
me.education = 'BSU';

// изменение значения свойства
me.occupation = 'Microsoft';

// взаимодействие со "сложными" именами свойств, альтернатива
me['property with spaces'] = 42;
me['property.with.dots'] = 42;

// удаление свойств объекта
delete me.education;
delete me['property with spaces'];

// получение значений свойств (для дальнейшего взаимодействия)
let name = me.myName; // Sergey
let birthYear = me.birthDate.year; // 1986
let fortyTwo = me['property.with.dots']; // 42

// пустой объект
let emptyObj = {};

// попытка получения не существующего свойства/значения
let emptyProp = emptyObj.someProp; // undefined
