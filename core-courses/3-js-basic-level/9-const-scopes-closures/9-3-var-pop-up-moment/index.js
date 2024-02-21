// *объявление var
console.log(x); // не ошибка.. undefined

var x = 123;
console.log(x); // 123, ожидаемо

// более императивно..

var x; // момент как-бы "всплытия"
console.log(x); // при этом undefined

x = 123; // как-бы инициализация
console.log(x); // 123

// *var и области видимости
function doSomethingStupid() {
  console.log(x); // не ошибка.. undefined

  if (false) {
    var x = 123;
  }

  console.log(x); // не ошибка.. undefined
}

// *ещё/про "всплытие" / hoisting, function declaration/expression
doSomethingStupid2(); // вызываем здесь? пожалуйста..

// ниже отрабатываем, но/только declaration реализацию
function doSomethingStupid2() {
  console.log(x); // undefined

  var x = 123;
  console.log(x); // 123
}

// с expression такого не получится

doSomethingStupid3(); // ошибка.. cannot access 'doSomethingStupid3' before initialization

let doSomethingStupid3 = function () {};
