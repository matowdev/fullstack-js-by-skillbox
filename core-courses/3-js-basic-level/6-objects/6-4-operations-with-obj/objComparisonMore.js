let me = {
  name: 'Sergey',
};

let newMe = Object.assign(me, { name: 'Roni', surname: 'Mironi' });

console.log(newMe); // {name: 'Roni', surname: 'Mironi'}
console.log(me); // {name: 'Roni', surname: 'Mironi'}

console.log(me === newMe); // true

// а/если нужны "новые" объекты?
let she = {
  name: 'Anna',
};

let newShe = Object.assign({}, me, { name: 'Anabel', surname: 'M' });
// альтернатива
let newShe2 = { ...she, name: 'Ann', surname: 'Ma' };

console.log(she); // {name: 'Anna'}
console.log(newShe); // {name: 'Anabel', surname: 'M'}
console.log(newShe2); // {name: 'Ann', surname: 'Ma'}

console.log(she === newShe); // false
console.log(she === newShe2); // false
