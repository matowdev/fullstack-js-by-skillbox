// задача #1
function getRectangularArea(x1, y1, x2, y2) {
  let rectangularArea = Math.abs(x1 - x2) * Math.abs(y1 - y2);
  return console.log('Площадь составляет:', rectangularArea);
}

getRectangularArea(2, 3, 10, 5);
getRectangularArea(10, 5, 2, 3);
getRectangularArea(-5, 8, 10, 5);
getRectangularArea(5, 8, 5, 5);
getRectangularArea(8, 1, 5, 1);
console.log('');

// задача #2
function getFractionalPart(a, b, precision) {
  let partA = Math.floor((a % 1) * Math.pow(10, precision));
  let partB = Math.floor((b % 1) * Math.pow(10, precision));
  console.log('Дробная часть, числа A: ' + partA);
  console.log('Дробная часть, числа B: ' + partB);
  console.log('Их сравнение:');
  return comparison(partA, partB);
}

function comparison(a, b) {
  console.log('часть A > части B:', a > b);
  console.log('часть A < части B:', a < b);
  console.log('часть A >= части B:', a >= b);
  console.log('часть A <= части B:', a <= b);
  console.log('часть A === части B:', a === b);
  console.log('часть A !== части B:', a !== b);
  return console.log('');
}

getFractionalPart(13.123456789, 2.123, 5);
getFractionalPart(13.890123, 2.891564, 2);
getFractionalPart(13.890123, 2.891564, 3);

// задача #3
function getRandomNumbers(n, m) {
  let min = Math.min(n, m);
  let num1 = n + Math.random() * (m + 1 - n);
  let num2 = n + Math.random() * (m + 1 - n);
  console.log(
    'Таким образом получаем:',
    Math.floor((min + num1) * 10) / 10 +
      ' и ' +
      Math.floor((min + num2) * 10) / 10
  );
  return numComparison(num1, num2);
}

function numComparison(n, m) {
  console.log('число 1 > числа 2:', n > m);
  console.log('число 1 < числа 2:', n < m);
  console.log('число 1 >= числа(у) 2:', n >= m);
  console.log('число 1 <= числа(у) 2:', n <= m);
  console.log('число 1 === числу 2:', n === m);
  console.log('число 1 !== числу 2:', n !== m);
  return console.log('');
}

getRandomNumbers(0, 100);
getRandomNumbers(2, 5);
getRandomNumbers(100, -5);
getRandomNumbers(-3, -10);
