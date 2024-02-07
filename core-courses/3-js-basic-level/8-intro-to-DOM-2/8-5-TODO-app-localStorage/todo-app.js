(function () {
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

  // создание/возвращение дела (внутренних кнопок)
  function createTodoFormListItem(name) {
    let formListItem = document.createElement('li');
    let btnItemGroup = document.createElement('div');
    let doneBtn = document.createElement('button');
    let deleteBtn = document.createElement('button');

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
    doneBtn.classList.add('todo__item-btn', 'btn', 'btn-success');
    deleteBtn.classList.add('todo__item-btn', 'btn', 'btn-danger');

    formListItem.textContent = name;
    doneBtn.textContent = 'Готово';
    deleteBtn.textContent = 'Удалить';

    btnItemGroup.append(doneBtn);
    btnItemGroup.append(deleteBtn);
    formListItem.append(btnItemGroup);

    return { formListItem, doneBtn, deleteBtn };
  }

  function createTodoMultiLists(todo, title = 'Список дел:') {
    let todoListTitle = createTodoFormListTitle(title);
    let todoItem = createTodoFormElement();
    let todoList = createTodoFormList();

    todo.append(todoListTitle);
    todo.append(todoItem.form); // из тройного возврата (в/из функции createTodoFormElement()) выбирается form, по сути "весь" составной элемент
    todo.append(todoList);

    todoItem.form.addEventListener('submit', function (e) {
      e.preventDefault(); // исключение default перезагрузки страницы, при добавлении дела (как-бы/при отправке формы)

      if (!todoItem.formInput.value) {
        return;
      }

      let todoSelectedItem = createTodoFormListItem(todoItem.formInput.value);

      todoSelectedItem.doneBtn.addEventListener('click', function () {
        todoSelectedItem.formListItem.classList.toggle(
          'list-group-item-success'
        );
      });

      todoSelectedItem.deleteBtn.addEventListener('click', function () {
        if (confirm('Вы уверены?')) {
          todoSelectedItem.formListItem.remove();
        }
      });

      todoList.append(todoSelectedItem.formListItem);

      // ! эксперименты с local storage..

      let todoItemDataValue = todoItem.formInput.value;

      function formatDataToJson(data) {
        return JSON.stringify(data);
      }

      function formatJsonToPrimaryData(data) {
        return JSON.parse(data);
      }

      function getItemData() {
        return localStorage.getItem('case');
      }

      function setItemData(data) {
        localStorage.setItem('case', data);
      }

      function addToLocalStorage(value) {
        let storage = getItemData();

        storage = storage ? formatJsonToPrimaryData(storage) : [];

        storage.push(value);
        setItemData(formatDataToJson(storage));
      }

      addToLocalStorage(todoItemDataValue);

      function deleteFromLocalStorage(value) {
        let storage = formatJsonToPrimaryData(getItemData());
        let newStorage = [];

        for (let i = 0; i < storage.length; i++) {
          if (storage[i] !== value) {
            newStorage.push(storage[i]);
          }
        }

        setItemData(formatDataToJson(newStorage));
      }

      deleteFromLocalStorage('Завершить курс');

      // ! окончание экспериментов

      todoItem.formInput.value = ''; // очищение поля для ввода (после добавления дела)
    });
  }

  // явное объявление функции, т.е. в глобальном объекте window (для последующей инициализации из html)
  window.createTodoMultiLists = createTodoMultiLists;
})();
