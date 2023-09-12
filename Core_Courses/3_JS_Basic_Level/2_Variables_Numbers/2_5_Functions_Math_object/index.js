// функция, её работа
// на примере решения квадратного уравнения: a*x*x + b*x + с = 0, с последующим возвращением значения x
function squareX(a, b, c) {
  let d = b * b - 4 * a * c;

  if (d < 0) {
    return [];
  } else {
    if (d === 0) {
      return [-b / (2 * a)];
    }
    // корень дискриминанта
    let dRoot = Math.sqrt(d);
    // [x1, x2]
    return [(-b + dRoot) / (2 * a), (-d - dRoot) / (2 * a)];
  }
}

squareX(1, 2, 3);
squareX(3, 2, 1);

// работа с объектом Math
// получение абсолютного положительного значения
console.log(Math.abs(-20)); // 20
Math.abs(20); // 20

// число PI, синус, косинус, тангенс, арктангенс
console.log(Math.sin(Math.PI / 2)); // 1, синус 90 градусов
Math.cos(Math.PI * 2); // 1, косинус 360 градусов
Math.tan(0); // 0, тангенс 0 градусов
Math.atan(0); // 0, арктангенс 0 градусов

// натуральный логарифм (ln)
console.log(Math.log(Math.E)); // 1

// примеры округления
console.log(Math.round(2.8)); // 3, математическое округление
Math.round(2.2); // 2
Math.round(2.5); // 3
console.log(Math.floor(3.9)); // 3, округление вниз
console.log(Math.ceil(3.2)); // 4, округление вверх

// определение наибольшего/наименьшего числа
console.log(Math.min(10, 1, -40, 12, 5)); // -40, наименьшее из переданных чисел
console.log(Math.max(10, 1, -40, 12, 5)); // 12, наибольшее из переданных чисел

// возведение в степень
console.log(Math.pow(10, 3)); // 10*3, 1000
console.log(10 ** 3); // альтернатива записи, как/выше (может не везде поддерживаться)
Math.sqrt(16); // 4, квадратный корень числа
console.log(Math.pow(16, 0.5)); // то-же 4

// выбор случайного числа
console.log(Math.random()); // случайное "очень" дробное от 0 до 1
Math.round(Math.random() * 100); // случайное от 0 до 100
console.log(Math.round(Math.random() * 70) + 50); // случайное от 50 до 120
