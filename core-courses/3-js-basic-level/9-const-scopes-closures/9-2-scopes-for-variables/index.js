// *область видимости, объявление let
console.log(someLet); // ошибка.. ReferenceError: someLet is not defined

let someLet = 10;
console.log(someLet); // 10, всё ок..

// ...

{
  let temperature = 36;
  console.log(temperature); // 36

  if (temperature > 0) {
    console.log(temperature); // 36, всё ок..
  }

  if (temperature) {
    // объявление одноимённой/внутренней переменной, "перекрытие" внешней
    let temperature = 36.6;
    console.log(temperature); // 36.6.. для этого блока, этой области
  }

  console.log(temperature); // 36, как и было
}

console.log(temperature); // ошибка.. is not defined, переменная не определена (нет в данной области видимости)

// *константы, объявление const
// const x; // ошибка.. 'const' declarations must be initialized

{
  const healthyTemp = 36.6;
  healthyTemp += 10; // ошибка.. нельзя изменить значение
}

console.log(healthyTemp); // ошибка.. is not defined, переменная не определена (нет в данной области видимости)

// ? когда объявлять const, как именовать
const EARTH_FALL_ACCELERATION = 9.78; // ускорение свободного падения, на земле (g)
const MARS_FALL_ACCELERATION = 3.711; // ..на Марсе

// ...

for (const item of arrItems) {
  console.log(item);
}

// *работа с const и ссылочными типами данных
const me = { name: 'Stuk' };

// свободная работа со свойствами
me.surname = me.name;
me.name = 'Sergey';

me = {}; // ошибка.. пере-присвоить не получится
