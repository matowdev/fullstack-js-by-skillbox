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

  return olderUser.name || '..не нашли';
}

let userName = getOlderUserArray(allUsers);
console.log(`Имя старшего пользователя - ${userName}!`); // Имя старшего пользователя - Надя!

// *второй вариант
function getOlderUserArray2(allUsers) {
  let olderUserAge = 0;
  let olderUserName = '';

  for (let user of allUsers) {
    if (user.age > olderUserAge) {
      olderUserAge = user.age;
      olderUserName = user.name;
    }
  }

  return olderUserName || '..не нашли';
}

let userName2 = getOlderUserArray2(allUsers);
console.log(`Имя старшего пользователя - ${userName2}!`); // Имя старшего пользователя - Надя!

// *третий вариант
function getOlderUserArray3(allUsers) {
  let olderUser = {};

  if (allUsers.length === 0) {
    return '..не из кого выбирать, пустой массив';
  } else {
    olderUser = allUsers[0];
  }

  for (let user of allUsers) {
    if (user.age > olderUser.age) {
      olderUser = user;
    }
  }

  return olderUser.name;
}

let userName3 = getOlderUserArray3(allUsers);
console.log(`Имя старшего пользователя - ${userName3}!`); // Имя старшего пользователя - Надя!
