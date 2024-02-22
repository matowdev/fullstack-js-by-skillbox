// *принцип замыкания / closure
let myName = 'Roni';

function closureGreetings() {
  console.log(myName); // доступ к внешней переменной, вот он и есть принцип
}

closureGreetings(); // Roni

myName = 'Ann';

closureGreetings(); // Ann

// *синтаксис стрелочной функции: (параметры) => { тело функции }
const arrowFunc = (name, surname) => {
  console.log(`${name} ${surname}`);
};

arrowFunc('Sergey', 'Stuk');

// если у функции один параметр, можно "опустить" скобки (но.. у меня они ставятся автоматически)
const arrowFunc2 = (name) => {
  console.log(name);
};

// если нет "вообще" параметров, следует указывать пустые () скобки
const arrowFunc3 = () => {
  console.log('Roni');
};

// если "опустить" фигурные { } скобки, получится кулуарный возврат, как/есть return
const arrowFunc4 = (name, surname) => `Привет, ${name} ${surname}!`;
console.log(arrowFunc4('Ann', 'M.'));

// ...то же самое (как выше), только с оператором return
const arrowFunc5 = (name, surname) => {
  return `Привет, ${name} ${surname}!`;
};
console.log(arrowFunc5('Ann', 'M.'));

// ...если нужно вернуть объект (без оператора return)
const arrowFunc6 = (name, surname) => ({ name, surname });
console.log(arrowFunc6('Sergey', 'Stuk'));

// *стрелочные функции и контекст выполнения - this
const he = {
  name: 'Miron',
  surname: 'M.',
  // обычная функция/метод
  getFullName() {
    return `${this.name} ${this.surname}`;
  },
  // стрелочная функция/метод
  getFullNameArrow: () => `${this.name} ${this.surname}`,
};

console.log(he.getFullName()); // Miron M.
console.log(he.getFullNameArrow()); // undefined undefined, НЕТ this понимания

// ? где применять/разворачивать function declaration/expression, а где arrow

// function declaration/expression
// 1. в/для методов объекта
const obj = {
  name: 'Name',
  printName() {
    console.log(this.name);
  },
};

// 2. в/для обработчиков событий, для events объектов (когда нужен this)
input.addEventListener('input', function () {
  console.log(this.value);
});

// 3. для "простых" решений, по коду
function makeSomeNoise() {}

// arrow function
// 1. в начале любого скрипта, как IIFE (вместо анонимной)
(() => {})(); // vs (function(){})();

// 2. в/для обработчиков событий (если НЕ нужен контекст this)
input.addEventListener('input', () => {
  console.log('Input event');
});

// 3. в/для параметров других функций
setInterval(() => {
  console.log('click');
}, 1000);
