// первая задача
function getRectangularArea(x1, y1, x2, y2) {
  let rectangularArea = Math.abs(x1 - x2) * Math.abs(y1 - y2);
  return console.log(rectangularArea);
}

getRectangularArea(2, 3, 10, 5); // 16
getRectangularArea(10, 5, 2, 3); // 16
getRectangularArea(-5, 8, 10, 5); // 45
getRectangularArea(5, 8, 5, 5); // 0
getRectangularArea(8, 1, 5, 1); // 0

// вторая задача
function getFractionalPart(a, b, precision) {
  let partA = Math.floor((a % 1) * Math.pow(10, precision));
  let partB = Math.floor((b % 1) * Math.pow(10, precision));
  console.log('Дробная часть, числа A: ' + partA);
  console.log('Дробная часть, числа B: ' + partB);
  console.log('Их сравнение:');
  comparison(partA, partB);
}

function comparison(a, b) {
  console.log('часть A > части B:', a > b);
  console.log('часть A < части B:', a < b);
  console.log('часть A >= части B:', a >= b);
  console.log('часть A <= части B:', a <= b);
  console.log('часть A === части B:', a === b);
  console.log('часть A !== части B:', a !== b);
}

getFractionalPart(13.123456789, 2.123, 5);
console.log('-----');
getFractionalPart(13.890123, 2.891564, 2);
console.log('-----');
getFractionalPart(13.890123, 2.891564, 3);
