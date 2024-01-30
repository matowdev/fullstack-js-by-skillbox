// ? Что нужно сделать
// 1. Скопируйте код/все файлы из папки task-3.
// 2. Создайте кнопку button с текстом внутри «Показать список/карточки!?».
// 3. Привяжите к кнопке событие клика. При клике должна быть вызвана ранее созданная функция createStudentsList() и под кнопкой должен появиться список студентов.

(function () {
  document.addEventListener('DOMContentLoaded', function () {
    let allStudents = [
      { name: 'Валя', age: 11 },
      { name: 'Таня', age: 24 },
      { name: 'Рома', age: 21 },
      { name: 'Надя', age: 34 },
      { name: 'Антон', age: 7 },
    ];

    let isListCreated = false;

    document.body.classList.add('page');

    function createStudentsList(listArr = []) {
      if (listArr.length === 0) {
        let message = document.createElement('span');
        message.classList.add('page__message');
        message.textContent =
          'Пустой список.. не из кого формировать карточки!';
        document.body.append(message);
        return;
      }

      let cardList = document.createElement('ul');
      cardList.id = 'main-list';
      cardList.classList.add('list', 'page__list', 'page__list_hide');

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

    let btnShow = document.createElement('button');
    btnShow.classList.add('btn', 'page__btn');
    btnShow.textContent = 'Показать список/карточки!?';
    document.body.append(btnShow);

    btnShow.addEventListener('click', function () {
      if (!isListCreated) {
        createStudentsList(allStudents);
        isListCreated = true;
      }

      let cardListElement = document.getElementById('main-list');

      if (cardListElement) {
        cardListElement.classList.toggle('page__list_hide');
        btnShow.textContent = cardListElement.classList.contains(
          'page__list_hide'
        )
          ? 'Показать список/карточки!?'
          : 'Убрать список/карточки!?';
      }
    });
  });
})();
