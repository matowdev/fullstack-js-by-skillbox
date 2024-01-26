// ? Что нужно сделать
// 1. Скопируйте код из папки task-1.
// 2. Доработайте функцию createStudentCard() так, чтобы она принимала не два параметра с информацией о студенте, а один — student, который является объектом с информацией о студенте.
// Функция делает то же самое, что и в первой задаче, — создаёт карточку студента.

(function () {
  document.addEventListener('DOMContentLoaded', function () {
    let studentObj = {
      name: 'Маша',
      age: 18,
    };

    document.body.classList.add('page');

    function createStudentCard({ name = 'не указано', age = '??' } = {}) {
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

    createStudentCard(studentObj);
  });
})();
