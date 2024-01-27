// ? Что нужно сделать
// 1. Создайте массив объектов студентов.
// 2. Создайте функцию с названием createStudentsList(), принимающую один параметр listArr.
// 3. Функция должна создавать список ul с карточками студентов, основанный на переданном в функцию массиве студентов.
// Для решения задачи лучше всего использовать цикл внутри функции createStudentsList().
// При желании можно украсить элементы CSS-стилизацией.

(function () {
  document.addEventListener('DOMContentLoaded', function () {
    let allStudents = [
      { name: 'Валя', age: 11 },
      { name: 'Таня', age: 24 },
      { name: 'Рома', age: 21 },
      { name: 'Надя', age: 34 },
      { name: 'Антон', age: 7 },
    ];

    document.body.classList.add('page');

    function createStudentsList(listArr = []) {
      if (listArr.length === 0) {
        let message = document.createElement('span');
        message.textContent =
          'Пустой список.. не из кого формировать карточки!';
        document.body.append(message);
        return;
      }

      let cardList = document.createElement('ul');
      cardList.classList.add('list', 'page__list');

      for (let { name = 'Не указано', age = '??' } of listArr) {
        let cardItem = document.createElement('li');
        let cardHeader = document.createElement('h2');
        let cardSubHeader = document.createElement('span');

        cardItem.classList.add('card', 'list__item');
        cardHeader.classList.add('card__header');
        cardSubHeader.classList.add('card__sub-header');

        cardHeader.textContent = name;
        cardSubHeader.textContent = `Возраст: ${age} лет`;

        cardItem.append(cardHeader, cardSubHeader);
        cardList.append(cardItem);
      }

      document.body.append(cardList);
    }

    createStudentsList(allStudents);
  });
})();
