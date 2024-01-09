console.log('\nARRAY FEATURE:\n');

let digits = [1, 2, 3, 4, 5];

console.log(Object.keys(digits)); // ['0', '1', '2', '3', '4']
console.log(Object.values(digits)); // [1, 2, 3, 4, 5]
console.log(Object.entries(digits)); // [Array(2), Array(2), Array(2), Array(2), Array(2)] -> ['0', 1], ['1', 2]..

console.log(typeof {}); // object
console.log(typeof []); // object
