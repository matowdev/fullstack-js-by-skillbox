// ? Что нужно сделать
// 1. Создайте функцию с названием getOlderUser(), которая будет определять, кто из двух пользователей старше.
// 2. Функция должна вернуть с помощью команды return имя старшего пользователя.
// Созданную функцию нужно вызвать, передав ей два объекта: user1 и user2. Результат, который вернёт функция, необходимо вывести в консоль.

// первый вариант
let user1 = {
  name: 'Игорь',
  age: 17,
};

let user2 = {
  name: 'Оля',
  age: 21,
};

function getOlderUser(user1, user2) {
  if (user1.age > user2.age) {
    return user1.name;
  } else if (user2.age > user1.age) {
    return user2.name;
  } else {
    return 'Эти пользователи одного возраста';
  }
}

let result = getOlderUser(user1, user2);
console.log(result + '!'); // Оля!

// *второй вариант
function getOlderUser2(user1, user2) {
  return user1.age > user2.age
    ? user1.name
    : user2.age > user1.age
    ? user2.name
    : 'Эти пользователи одного возраста';
}

let result2 = getOlderUser2(user1, user2);
console.log(result2 + '!'); // Оля!

// третий вариант
function getOlderUser3(user1, user2) {
  return user1.age === user2.age
    ? 'Эти пользователи одного возраста'
    : user1.age > user2.age
    ? user1.name
    : user2.name;
}

let result3 = getOlderUser3(user1, user2);
console.log(result3 + '!'); // Оля!
