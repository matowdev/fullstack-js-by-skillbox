let myName = 'Sergey';
let mySurname = 'Stuk';

function getFullName() {
  return this.myName + ' ' + this.mySurname;
}

let person = { myName, mySurname, getFullName };
console.log(person.getFullName()); // Sergey Stuk

person.whoAmI = function () {
  console.log(`I'll introduce myself: ${this.myName} ${this.mySurname}!`);
};

console.log(person); // {myName: 'Sergey', mySurname: 'Stuk', getFullName: ƒ, whoAmI: ƒ}
person.whoAmI(); // I'll introduce myself: Sergey Stuk!

delete person.getFullName;
console.log(person); // {myName: 'Sergey', mySurname: 'Stuk', whoAmI: ƒ}
console.log(person.getFullName); // undefined

// добавление функции/метода дважды
let otherPerson = {
  someMethod: getFullName,
};

otherPerson.someOtherMethod = getFullName;

console.log(otherPerson.someMethod()); // undefined undefined, т.к. свойств myName и mySurname в данном obj нет
console.log(otherPerson.someOtherMethod()); // undefined undefined, т.к. свойств myName и mySurname в данном obj нет
