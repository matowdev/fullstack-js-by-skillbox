// ? Что нужно сделать
// 1. Напишите функцию filter(), которая создаёт массив email-адресов, не попавших в чёрный список. В качестве аргументов функция должна принимать два массива: массив строк с исходными email-адресами и массив строк с email-адресами в чёрном списке.
// 2. Выведите результат выполнения функции в консоль в виде массива.

// первый вариант
function filter(whiteList, blackList) {
  let newList = [];

  for (let email of whiteList) {
    if (blackList.includes(email)) continue;
    newList.push(email);
  }

  return newList;
}

let whiteList = [
  'my-email@gmail.ru',
  'jsfunc@mail.ru',
  'annavkmail@vk.ru',
  'fullname@skill.ru',
  'goodday@day.ru',
];

let blackList = ['jsfunc@mail.ru', 'goodday@day.ru'];

let resultList = filter(whiteList, blackList);
console.log(resultList); // (3) ['my-email@gmail.ru', 'annavkmail@vk.ru', 'fullname@skill.ru']

// *второй вариант
function filter2(whiteList, blackList) {
  let newList = [];

  for (let email of whiteList) {
    if (!blackList.includes(email)) {
      newList.push(email);
    }
  }

  return newList;
}

let whiteList2 = [
  'my-email@gmail.ru',
  'jsfunc@mail.ru',
  'annavkmail@vk.ru',
  'fullname@skill.ru',
  'goodday@day.ru',
];

let blackList2 = ['jsfunc@mail.ru', 'goodday@day.ru'];

let resultList2 = filter2(whiteList, blackList);
console.log(resultList2); // (3) ['my-email@gmail.ru', 'annavkmail@vk.ru', 'fullname@skill.ru']

// третий вариант
function filter3(whiteList, blackList) {
  let newList = [];

  for (let i = 0; i < whiteList.length; i++) {
    let email = whiteList[i];
    if (blackList.indexOf(email) === -1) {
      newList.push(email);
    }
  }

  return newList;
}

let whiteList3 = [
  'my-email@gmail.ru',
  'jsfunc@mail.ru',
  'annavkmail@vk.ru',
  'fullname@skill.ru',
  'goodday@day.ru',
];

let blackList3 = ['jsfunc@mail.ru', 'goodday@day.ru'];

let resultList3 = filter3(whiteList, blackList);
console.log(resultList3); // (3) ['my-email@gmail.ru', 'annavkmail@vk.ru', 'fullname@skill.ru']
