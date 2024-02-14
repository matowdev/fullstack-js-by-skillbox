(function () {
  // работа с localStorage
  function todoArrToLocalStorage(key, todoArr, listName) {
    let todoArrToJson = JSON.stringify(todoArr);
    localStorage.setItem(`${listName}-${key}`, todoArrToJson);
  }

  function todoArrFromLocalStorage(key, listName) {
    let todoArrFromJson = localStorage.getItem(`${listName}-${key}`);

    if (todoArrFromJson) {
      return JSON.parse(todoArrFromJson);
    } else {
      return [];
    }
  }

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
    formInput.autocomplete = 'off';
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
  function createTodoFormListItem({ id, name = '...', done } = {}) {
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
    doneBtn.textContent = done ? 'Отменить' : 'Готово'; // изменение статуса дела
    deleteBtn.textContent = 'Удалить';

    if (done) {
      formListItem.classList.add('list-group-item-success');
    }

    btnItemGroup.append(doneBtn);
    btnItemGroup.append(deleteBtn);
    formListItem.append(btnItemGroup);

    return { formListItem, doneBtn, deleteBtn };
  }

  // формирование списка дел (объединение)
  function createTodoMultiLists(todo, title = 'Список дел:', listName = '...') {
    let todoListTitle = createTodoFormListTitle(title);
    let todoItem = createTodoFormElement();
    let todoList = createTodoFormList();
    let todoArr = todoArrFromLocalStorage(todoListTitle.textContent, listName); // загрузка списка дел из LocalStorage (если есть)

    todo.append(todoListTitle);
    todo.append(todoItem.form);
    todo.append(todoList);

    // отображение/отрисовка сохранённых дел, т.е. из LocalStorage
    todoArr.forEach((todoItemObjData) => {
      let todoSelectedItem = createTodoFormListItem(todoItemObjData);

      addListItemEventListeners(
        todoSelectedItem,
        todoItemObjData,
        todoArr,
        todoListTitle.textContent,
        listName
      );

      todoList.append(todoSelectedItem.formListItem);
    });

    todoItem.form.addEventListener('submit', function (e) {
      e.preventDefault();

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

      // передача объекта данных, получение готовой записи/дела
      let todoSelectedItem = createTodoFormListItem(todoItemObjData);

      addListItemEventListeners(
        todoSelectedItem,
        todoItemObjData,
        todoArr,
        todoListTitle.textContent,
        listName
      );

      todoList.append(todoSelectedItem.formListItem);

      todoArrToLocalStorage(todoListTitle.textContent, todoArr, listName); // сохранение обновлений в LocalStorage

      todoItem.formInput.value = ''; // очищение поля для ввода (после добавления дела)
      todoItem.formBtn.disabled = true;
    });
  }

  // добавление обработчиков событий для элементов списка дел
  function addListItemEventListeners(
    todoSelectedItem,
    todoItemObjData,
    todoArr,
    key,
    listName
  ) {
    todoSelectedItem.doneBtn.addEventListener('click', function () {
      todoItemObjData.done = !todoItemObjData.done;
      todoSelectedItem.formListItem.classList.toggle('list-group-item-success');
      todoSelectedItem.doneBtn.textContent = todoItemObjData.done
        ? 'Отменить'
        : 'Готово';

      todoArrToLocalStorage(key, todoArr, listName); // сохранение изменений для/в LocalStorage
    });

    todoSelectedItem.deleteBtn.addEventListener('click', function () {
      if (confirm('Вы уверены?')) {
        todoSelectedItem.formListItem.remove();
        let index = todoArr.findIndex((item) => item.id === todoItemObjData.id);
        if (index !== -1) {
          todoArr.splice(index, 1);
          todoArrToLocalStorage(key, todoArr, listName); // сохранение изменений для/в LocalStorage
        }
      }
    });
  }

  // явное объявление функции, т.е. в глобальном объекте window (для последующей инициализации из html)
  window.createTodoMultiLists = createTodoMultiLists;
})();
