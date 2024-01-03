// Вычисление дискриминанта и решение квадратного уравнения
// a*x*x + b*x + c = 0, согласно параметров a, b, c
// нужно вывести возможные значения x

let a = 3;
let b = 5;
let c = 1;

let d = b * b - 4 * a * c;

// старое решение
// let dRoot = Math.sqrt(d);
// console.log('x1 =', (-b + dRoot) / (2 * a)); // => NaN
// console.log('x2 =', (-b - dRoot) / (2 * a)); // => NaN

if (d < 0) {
  console.log('Квадратное уравнение не имеет решений!');
} else if (d === 0) {
  let x = -b / (2 * a);
  console.log('Квадратное уравнение имеет одно решение, x = ' + x);
} else {
  let dRoot = Math.sqrt(d);
  let x1 = ((-b + dRoot) / (2 * a)).toFixed(1);
  let x2 = ((-b - dRoot) / (2 * a)).toFixed(1);
  console.log(
    `Квадратное уравнение имеет два решения:\nx1 = ${x1}\nx2 = ${x2}`
  );
}
