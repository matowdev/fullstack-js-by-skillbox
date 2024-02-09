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

    formInput.name = 'todo-input';
    formInput.placeholder = 'Введите название дела..';
    formBtn.textContent = 'Добавить!?';
    formBtn.disabled = true; // изначальное исключение доступности для кнопки "Добавить!?"

    formBtnWrap.append(formBtn);
    form.append(formInput);
    form.append(formBtnWrap);

    // определение события, переключение доступности для formBtn (согласно ввода/не ввода данных/дел)
    formInput.oninput = () => {
      formBtn.disabled = formInput.value === '';
    };

    return { form, formInput, formBtn };
  }

  // создание/возвращение списка дел
  function createTodoFormList() {
    let formList = document.createElement('ul');
    formList.classList.add('todo__list', 'list-group');

    return formList;
  }

  // создание/возвращение дела (внутренних кнопок)
  function createTodoFormListItem({ name = '...', done } = {}) {
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
    let todoArr = [];

    todo.append(todoListTitle);
    todo.append(todoItem.form); // из тройного возврата (в/из функции createTodoFormElement()) выбирается form, по сути "весь" составной элемент
    todo.append(todoList);

    todoItem.form.addEventListener('submit', function (e) {
      e.preventDefault(); // исключение default перезагрузки страницы, при добавлении дела (как-бы/при отправке формы)

      if (!todoItem.formInput.value) {
        return;
      }

      // let idGeneration = Math.floor(Math.random() * 10e4);

      let idGeneration =
        todoArr.length > 0
          ? Math.max(...todoArr.map((item) => item.id)) + 1
          : 1;

      // формирование объекта данных, по элементу списка
      let todoItemObjData = {
        id: idGeneration,
        name: todoItem.formInput.value,
        done: false,
      };

      todoArr.push(todoItemObjData);
      console.log('Массив после добавления дела:', todoArr);

      // передача объекта данных, получение готовой записи/дела
      let todoSelectedItem = createTodoFormListItem(todoItemObjData);

      todoSelectedItem.doneBtn.addEventListener('click', function () {
        todoSelectedItem.formListItem.classList.toggle(
          'list-group-item-success'
        );

        let findItemClass = todoSelectedItem.formListItem.classList.contains(
          'list-group-item-success'
        );

        let findObjIndex = todoArr.findIndex(
          (obj) => obj.id === todoItemObjData.id
        );

        if (findObjIndex !== -1) {
          todoArr[findObjIndex].done = findItemClass;
        }

        console.log('Массив после изменения статуса дела:', todoArr);
      });

      todoSelectedItem.deleteBtn.addEventListener('click', function () {
        if (confirm('Вы уверены?')) {
          todoSelectedItem.formListItem.remove();

          let findObjIndex = todoArr.findIndex(
            (obj) => obj.id === todoItemObjData.id
          );

          if (findObjIndex !== -1) {
            todoArr.splice(findObjIndex, 1);
          }

          console.log('Массив после удаления дела:', todoArr);
        }
      });

      todoList.append(todoSelectedItem.formListItem);

      todoItem.formInput.value = ''; // очищение поля для ввода (после добавления дела)
      todoItem.formInput.oninput(); // обновление состояния поля/кнопки "Добавить!?"
    });
  }

  // явное объявление функции, т.е. в глобальном объекте window (для последующей инициализации из html)
  window.createTodoMultiLists = createTodoMultiLists;
})();
