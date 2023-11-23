// возврат/получение undefined
function getUndefined() {
  console.log('Я ничего не делаю, ничего не возвращаю.');
  return;
}

console.log(getUndefined()); // undefined

let nothing = getUndefined();
console.log(nothing); // undefined

// просто для примера..
let empty;
console.log('А я переменная без значения.. т.е. ' + empty); // undefined
