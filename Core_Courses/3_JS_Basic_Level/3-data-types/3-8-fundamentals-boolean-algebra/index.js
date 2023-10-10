// Суббота ИЛИ Воскресенье
function showDayOff(day) {
  if (day === 'Суббота' || day === 'Воскресенье') {
    return console.log(day + ' - это выходной!');
  } else {
    return console.log(day + ' - это точно не выходной..');
  }
}

showDayOff('Суббота'); // Суббота - это выходной!
showDayOff('Вторник'); // Вторник - это точно не выходной..

// длинна пароля больше И меньше
function getPassword() {
  let password = prompt('Введите пароль: от 5 до 15 символов', '');
  return password;
}

function showPasLength() {
  let pasLength = getPassword();
  if (pasLength === null) {
    return alert('До свидания..');
  } else if (pasLength === '') {
    alert('Вы ничего не ввели!?');
    return showPasLength();
  } else if (pasLength.length >= 5 && pasLength.length < 15) {
    return alert('Допустимая длинна пароля! Добро пожаловать!');
  } else if (pasLength.length < 5 || pasLength.length > 15) {
    alert('Такая длина, не подходит..');
    return showPasLength();
  }
}

showPasLength();

// приоритет операторов, управление приоритетом с помощью скобок
let x = 8;

if (x === 12 || (x > 0 && x < 11)) {
  console.log('x - число 12 или число от 1 до 10!');
}

let y = 102;

if ((y % 2 === 0 || y % 3 === 0) && y > 100) {
  console.log('y - делится на 2 или на 3 без остатка и при этом > 100!');
}

// инвертирование условия, с помощью оператора НЕ " ! "
let z = 99;

if (!(z % 2 === 0 || z % 4 === 0) && z < 100) {
  console.log('z - не делится ни 2 на на 4 без остатка, и при этом < 100!');
}
