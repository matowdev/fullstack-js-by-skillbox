// ? Что нужно сделать (задача 2)
// В переменных userName, userSurname даны имя и фамилия пользователя. При этом в строках беспорядок с большими и маленькими буквами, и нужно оформить строки единообразно.. далее в notes, по ссылке

function checkData(data1, data2) {
  data1 || false ? (data1 = data1) : (data1 = 'нет данных');
  data2 || false ? (data2 = data2) : (data2 = 'нет данных');
  return getCommonFormat(data1.toString(), data2.toString());
}

function getCommonFormat(name, surname) {
  let userName = name;
  let userSurname = surname;

  userName = userName[0].toUpperCase() + userName.slice(1).toLowerCase();
  userSurname =
    userSurname[0].toUpperCase() + userSurname.slice(1).toLowerCase();

  userName === 'Нет данных' && userSurname === 'Нет данных'
    ? console.log('Что-то пошло не так..')
    : userName === 'Нет данных' || userSurname === 'Нет данных'
    ? console.log('Не все данные.. нет имени или фамилии!?')
    : userName == name && userSurname == surname
    ? console.log('Соответствие формату, ввод: ' + userName + ' ' + userSurname)
    : userName !== name || userSurname !== surname
    ? console.log(
        'Потребовалось преобразование, ввод: ' +
          name +
          ' ' +
          surname +
          ', корректировка на: ' +
          userName +
          ' ' +
          userSurname
      )
    : console.log('операция завершена..');
}

checkData(); // Что-то пошло не так..
checkData('', ''); // Что-то пошло не так..
checkData('Ада', ''); // Не все данные.. нет имени или фамилии!?
checkData('Брендан', 'Эйк'); // Соответствие формату, ввод: Брендан Эйк
checkData('БИЛЛ', 'ГейТС'); // Потребовалось преобразование, ввод: БИЛЛ ГейТС, корректировка на: Билл Гейтс
checkData('Якоб', 'НиЛьСеН'); // Потребовалось преобразование, ввод: Якоб НиЛьСеН, корректировка на: Якоб Нильсен

console.log('');
