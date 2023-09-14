let x = 10;
let y = 20;

// строгое равенство
console.log(x === y); // false
console.log(x === 10); // true

// не равенство ( ! )
console.log(x !== y); // true
console.log(y !== 20); // false

console.log(x > y); // false
console.log(x < y); // true

// не строгое сравнение
console.log(x >= y); // false
console.log(x <= y); // true

// специальное значение infinity
Infinity > 100500; // true
-Infinity < -100500; // true

// вот такой результат
console.log(100500 / 0); // infinity

Infinity === Infinity; // true

Infinity > Infinity; // false
Infinity < Infinity; // false

Infinity >= Infinity; // true
console.log(Infinity <= Infinity); // true

Infinity + Infinity; // infinity
console.log(-Infinity - Infinity); // -infinity

Infinity - Infinity; // NaN
-Infinity + Infinity; // NaN
console.log(Infinity / Infinity); // NaN
// НО..
console.log(Infinity * Infinity); // infinity

Infinity / 10; // infinity
Infinity * 10; // infinity
Infinity ** 10; // infinity
console.log(Infinity ** Infinity); // infinity
console.log(Infinity ** -Infinity); // 0
console.log((-Infinity) ** Infinity); // infinity
