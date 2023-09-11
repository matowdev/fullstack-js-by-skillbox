// ЗАДАЧА 1: вычислить общее кол-во квартир в доме, если известно, что:
// - дом 4-х подъездный;
// - 9-и этажный;
// - с 4-мя квартирами на каждом этаже.

let entrances = 4;
let floors = 9;
let apartPerFloor = 4;

let apartPerEntrance = floors * apartPerFloor;
console.log('Квартир в 1-м подъезде:', apartPerEntrance); // => 36

let totalApart = apartPerEntrance * entrances;
console.log('Всего квартир в доме:', totalApart); // => 144

// ЗАДАЧА 2: вычислить необходимый объём интересующего ингридиента (допустим водки), исходя из желаемого объёма напитка, учитывая следующие составляющие:

let vodka = 50;
let tomatoJuice = 120;
let lemonJuice = 10;
let tabasco = 1;
let worcester = 1;

// если желаемый объём напитка:
let volume = 500;

// определение коэффициента
let coefficient =
  (vodka + tomatoJuice + lemonJuice + tabasco + worcester) / volume;

// таким образом необходимый объём водки для 500 грамм
console.log('Водки нужно:', vodka * coefficient + ' г'); // => 18.2

// ЗАДАЧА 3: вычислить дискриминант, решить квадратное уравнение a*x*x + b*x + c = 0
// Нужно вывести возможные значения x этого уравнения.

// параметры для квадратного уравнения
let a = 3;
let b = 5;
let c = 10;

// вычисление значения дискриминанта
let d = b * b - 4 * a * c;

// корень дискриминанта
let dRoot = Math.sqrt(d);
console.log('x1 =', (-b + dRoot) / (2 * a)); // => NaN
console.log('x2 =', (-b - dRoot) / (2 * a)); // => NaN

// ЗАДАЧА 4: вычислить n числа для ряда Фибоначчи (каждое следующее число - должно быть суммой двух предыдущих)

// ряд будет из 10 элементов
let n = 10;

let current = 0;
let prev = 1;
let prevPrev = 0;

while (n-- > 0) {
  prevPrev = prev;
  prev = current;
  current += prevPrev;
  console.log(current);
}
