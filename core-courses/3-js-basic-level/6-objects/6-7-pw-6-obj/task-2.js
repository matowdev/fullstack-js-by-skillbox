// ? Что нужно сделать
// Для получения большей практики вы можете попробовать определить старшего пользователя из массива пользователей.

// первый вариант
let allUsers = [
  { name: 'Валя', age: 11 },
  { name: 'Таня', age: 24 },
  { name: 'Рома', age: 21 },
  { name: 'Надя', age: 34 },
  { name: 'Антон', age: 7 },
];

function getOlderUserArray(allUsers) {
  let maxAge = 0;
  let olderUser = {};

  for (let user of allUsers) {
    if (user.age > maxAge) {
      maxAge = user.age;
      Object.assign(olderUser, user);
    }
  }

  return olderUser.name;
}

let result = getOlderUserArray(allUsers);
console.log(`Имя старшего пользователя - ${result}!`); // Имя старшего пользователя - Надя!

// *второй вариант
function getOlderUserArray2(allUsers) {
  let olderUser = allUsers[0];

  for (let user of allUsers) {
    if (user.age > olderUser.age) {
      olderUser = user;
    }
  }

  return olderUser.name;
}

let result2 = getOlderUserArray2(allUsers);
console.log(`Имя старшего пользователя - ${result2}!`); // Имя старшего пользователя - Надя!
