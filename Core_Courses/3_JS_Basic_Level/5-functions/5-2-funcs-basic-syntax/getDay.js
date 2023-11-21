function printWeekDay() {
  let dayIndex = new Date().getDay(); // определение текущего дня недели, т.е. от 0 - вс, до 6 - суб
  let monthDayIndex = new Date().getDate(); // определение дня месяца (числа)
  let monthIndex = new Date().getMonth(); // определение месяца

  // console.log(dayIndex); // 2 - вторник

  let arrDays = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
  ];

  let arrMonths = [
    'Января',
    'Февраля',
    'Марта',
    'Апреля',
    'Мая',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Октября',
    'Ноября',
    'Декабря',
  ];

  return console.log(
    `Сегодня?.. ${arrDays[dayIndex]}, ${monthDayIndex} ${arrMonths[monthIndex]}!`
  );
}

printWeekDay(); // Сегодня?.. Вторник, 21 Ноября!
