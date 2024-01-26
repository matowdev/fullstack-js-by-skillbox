// ? Что нужно сделать
// 1. Создайте базовый HTML-код и подключите к нему JavaScript-файл.
// 2. Создайте функцию с названием createStudentCard() в js-файле, принимающую два параметра: name и age. Функция должна создавать карточку студента внутри элемента body HTML-страницы.
// Карточка студента представляет собой DOM-элемент, а именно тег div, внутри которого находится заголовок h2 с именем студента из параметра name и span под заголовком с возрастом студента (age).
// При желании можно украсить элементы CSS-стилизацией.

(function () {
  document.addEventListener('DOMContentLoaded', function () {
    document.body.classList.add('page');

    function createStudentCard(name = 'не указано', age = '??') {
      let divCard = document.createElement('div');
      let cardHeader = document.createElement('h2');
      let cardSubHeader = document.createElement('span');

      divCard.classList.add('card', 'page__student-card');
      cardHeader.classList.add('card__header');
      cardSubHeader.classList.add('card__sub-header');

      cardHeader.textContent = name;
      cardSubHeader.textContent = `Возраст: ${age} лет`;

      divCard.append(cardHeader, cardSubHeader);
      document.body.append(divCard);
    }

    createStudentCard('Игорь', 17);
  });
})();
