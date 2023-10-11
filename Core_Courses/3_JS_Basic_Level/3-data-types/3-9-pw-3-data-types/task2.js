function getCommonFormat(name, surname) {
  let userName = name || 'нет данных';
  let userSurname = surname || 'нет данных';
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
    : console.log('передача завершена..');
}

getCommonFormat(); // Что-то пошло не так..
getCommonFormat('', ''); // Что-то пошло не так..
getCommonFormat('Ада', ''); // Не все данные.. нет имени или фамилии!?
getCommonFormat('Брендан', 'Эйк'); // Соответствие формату, ввод: Брендан Эйк
getCommonFormat('БИЛЛ', 'ГейТС'); // Потребовалось преобразование, ввод: БИЛЛ ГейТС, корректировка на: Билл Гейтс
getCommonFormat('Якоб', 'НиЛьСеН'); // Потребовалось преобразование, ввод: Якоб НиЛьСеН, корректировка на: Якоб Нильсен

console.log('');
