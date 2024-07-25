(function () {
  // создание/возвращением заголовка, для списка дел
  function createTodoFormListTitle(title) {
    const formListTitle = document.createElement('h2');

    formListTitle.classList.add('todo__header');
    formListTitle.textContent = title;

    return formListTitle;
  }

  // создание/возвращение формы/поля, для ввода дел
  function createTodoFormElement() {
    const form = document.createElement('form');
    const formInput = document.createElement('input');
    const formBtnWrap = document.createElement('div');
    const formBtn = document.createElement('button');

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
    const formList = document.createElement('ul');
    formList.classList.add('todo__list', 'list-group');

    return formList;
  }

  // создание/возвращение дела (внутренних кнопок)
  function createTodoFormListItem(todoItem, { onDone, onDelete }) {
    const doneClass = 'list-group-item-success'; // вынос класса в переменную, что бы не дублировать в коде
    const formListItem = document.createElement('li');
    const btnItemGroup = document.createElement('div');
    const doneBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');

    formListItem.classList.add(
      'todo__item',
      'list-group-item',
      'd-flex',
      'justify-content-between',
      'align-items-center'
    );
    btnItemGroup.classList.add(
      'todo__item-btn-group',
      'btn-group',
      'btn-group-sm'
    );

    if (todoItem.done) formListItem.classList.add(doneClass); // ! проверка статуса дела

    doneBtn.classList.add('todo__item-btn', 'btn', 'btn-success');
    deleteBtn.classList.add('todo__item-btn', 'btn', 'btn-danger');

    formListItem.textContent = todoItem.name;
    doneBtn.textContent = 'Готово';
    deleteBtn.textContent = 'Удалить';

    // ! организация прослушивания, изменение статуса дела
    doneBtn.addEventListener('click', function () {
      onDone({ todoItem, element: formListItem });
      formListItem.classList.toggle(doneClass, todoItem.done);
    });

    deleteBtn.addEventListener('click', function () {
      onDelete({ todoItem, element: formListItem });
    });

    btnItemGroup.append(doneBtn);
    btnItemGroup.append(deleteBtn);
    formListItem.append(btnItemGroup);

    return formListItem; // ! возврат только item(a), т.е. возврат { formListItem, doneBtn, deleteBtn } уже не нужен
  }

  async function createTodoMultiLists(todo, title) {
    const todoListTitle = createTodoFormListTitle(title);
    const todoItem = createTodoFormElement();
    const todoList = createTodoFormList();
    const handlers = {
      onDone: ({ todoItem }) => {
        todoItem.done = !todoItem.done;
        fetch(`http://localhost:3000/api/todos/${todoItem.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ done: todoItem.done }),
        });
      },

      onDelete: ({ todoItem, element }) => {
        if (!confirm('Вы уверены?')) {
          return;
        }

        element.remove();

        fetch(`http://localhost:3000/api/todos/${todoItem.id}`, {
          method: 'DELETE',
        });
      },
    };

    todo.append(todoListTitle);
    todo.append(todoItem.form); // из тройного возврата (в/из функции createTodoFormElement()) выбирается form, по сути "весь" составной элемент
    todo.append(todoList);

    // ! формирование/отправка запроса на получение списка дела с сервера
    const response = await fetch(
      `http://localhost:3000/api/todos?title=${title
        .slice(0, -1)
        .toLowerCase()}`
    ); // ! важное дополнение для фильтрации по названию списка дела
    const todoItemListFromServer = await response.json();

    todoItemListFromServer.forEach((todoItem) => {
      const todoListItem = createTodoFormListItem(todoItem, handlers);
      todoList.append(todoListItem);
    });

    // ! добавление ключевого слова "async"
    todoItem.form.addEventListener('submit', async function (e) {
      e.preventDefault(); // исключение default перезагрузки страницы, при добавлении дела (как-бы/при отправке формы)

      if (!todoItem.formInput.value) {
        return;
      }

      // ! ввод серверной логики (формирование JSON структуры/объекта, отправка на сервер)
      const response = await fetch('http://localhost:3000/api/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: title.slice(0, -1).toLowerCase(),
          name: todoItem.formInput.value.trim(), // название дела берётся из поля ввода
        }),
      });

      // ! получение серверной записи/дела (объекта)
      const todoItemFromServer = await response.json();

      const todoSelectedItem = createTodoFormListItem(
        todoItemFromServer,
        handlers
      ); // ! передача серверного дела и логики обработки кнопок

      // ?? перенос отсюда логик/прослушивания кнопок doneBtn/deleteBtn в функцию createTodoFormListItem

      todoList.append(todoSelectedItem); // ! вместо (todoSelectedItem.formListItem)
      todoItem.formInput.value = ''; // очищение поля для ввода (после добавления дела)
    });
  }

  // явное объявление функции, т.е. в глобальном объекте window (для последующей инициализации из html)
  window.createTodoMultiLists = createTodoMultiLists;
})();
