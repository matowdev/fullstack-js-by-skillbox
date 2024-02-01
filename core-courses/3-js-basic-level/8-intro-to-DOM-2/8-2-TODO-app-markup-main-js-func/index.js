(function () {
  document.addEventListener('DOMContentLoaded', function () {
    // создание/возвращением заголовка, для списка дел
    function createTodoFormListTitle(title) {
      let formListTitle = document.createElement('h2');

      formListTitle.classList.add('todo__header');
      formListTitle.textContent = title;

      return formListTitle;
    }

    // создание/возвращение формы/поля, для ввода дел
    function createTodoFormElement() {
      let form = document.createElement('form');
      let formInput = document.createElement('input');
      let formBtnWrap = document.createElement('div');
      let formBtn = document.createElement('button');

      form.classList.add('todo__form', 'input-group', 'mb-3');
      formInput.classList.add('todo__form-input', 'form-control');
      formBtnWrap.classList.add('todo__form-btn-wrap', 'input-group-append');
      formBtn.classList.add('todo__form-btn', 'btn', 'btn-primary');

      formInput.placeholder = 'Введите название дела..';
      formBtn.textContent = 'Добавить!?';

      formBtnWrap.append(formBtn);
      form.append(formInput);
      form.append(formBtnWrap);

      return { form, formInput, formBtn };
    }

    // создание/возвращение списка дел
    function createTodoFormList() {
      let formList = document.createElement('ul');
      formList.classList.add('todo__list', 'list-group');

      return formList;
    }

    // увязка составляющих
    let todo = document.getElementById('todo-app');
    let todoListTitle = createTodoFormListTitle('Список дел:');
    let todoItem = createTodoFormElement();
    let todoList = createTodoFormList();

    todo.append(todoListTitle);
    todo.append(todoItem.form); // из тройного возврата (в/из функции createTodoFormElement()) выбирается form, по сути "весь" составной элемент
    todo.append(todoList);
  });
})();
