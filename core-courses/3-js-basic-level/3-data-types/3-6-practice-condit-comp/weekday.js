// Определение дня недели, рабочий день или выходной
function getWeekday(day) {
  switch (day) {
    case 'Понедельник':
    case 'Вторник':
    case 'Среда':
    case 'Четверг':
    case 'Пятница':
      console.log(day + ' - рабочий день!');
      break;
    case 'Суббота':
    case 'Воскресенье':
      console.log(day + ' - выходной..');
      break;
    default:
      console.log('А, что/это за день - ' + day + '?');
  }
}

getWeekday('Вторник'); // Вторник - рабочий день!
getWeekday('Суббота'); // Суббота - выходной..
getWeekday('Апрель'); // А, что/это за день - Апрель?
