// обработка минимального ввода/количества символов для ФИО (т.е. минимум 2 или 5)
if (
  target.placeholder === 'Фамилия' ||
  target.placeholder === 'Имя' ||
  target.placeholder === 'Отчество'
) {
  const minLength =
    target.placeholder === 'Отчество' && target.value.trim() !== '' ? 5 : 2;

  if (
    target.value.trim().length > 0 &&
    target.value.trim().length < minLength
  ) {
    errors.push(
      `Поле "${target.placeholder}" должно содержать не менее ${minLength} букв!`
    );
  }
}

// !!
function handleModalFormSubmit(context = {}) {
  const { modalBodyForm, type, clientData } = context; // получение необходимых элементов (через деструктуризациию входящего/передаваемого объекта)

  // проверка наличия входящих аргументов/параметров (нет.. возврат)
  if (!modalBodyForm || !type || !clientData) {
    console.error(
      'Событие "submit" невозможно.. недостаточно входящих параметров!?'
    );
    return;
  }

  // [СЕРВЕР]
  modalBodyForm.addEventListener(
    'submit',
    async (event) => {
      event.preventDefault();

      if (!modalBodyForm.checkValidity()) {
        event.stopPropagation();
        modalBodyForm.classList.add('was-validated');
      } else {
        //           const formInSurname = toUpFirstLetter(
        //             formInSurnameInput.value.trim()
        //           );
        //           const formInName = toUpFirstLetter(formInNameInput.value.trim());
        //           const formInPatronymic = toUpFirstLetter(
        //             formInPatronymicInput.value.trim()
        //           );
        //           const formInBirthDate = formInBirthDateInput.value;
        //           const formInStartYear = formInStartYearInput.value;
        //           const formInFaculty = formInFacultyInput.value.toLowerCase().trim();
        //
        //           if (
        //             checkStudentFIO(
        //               formInSurname,
        //               formInName,
        //               formInPatronymic,
        //               updateStudentsDataArr
        //             )
        //           ) {
        //             const formInNotification = confirm(
        //               'Совпадение по Ф.И.О! Такой студент уже существует! Всё равно добавить?'
        //             );
        //             if (!formInNotification) {
        //               return; // т.е. не добавление студента (без очистки полей ввода, возможность что-то исправить)
        //             }
        //           }

        // ! условие согласно ДЗ
        /*
        Каждый контакт представляет из себя следующий набор данных:
        - Имя
        - Фамилия
        - Отчество
        - Массив объектов с контактными данными, где каждый объект содержит:
        - Тип контакта (телефон, email, VK и т.п.)
        - Значение контакта (номер телефона, адрес email, ссылка на страницу в VK и т.п.)
        */

        // const newStudent = {
        //   surname: formInSurname,
        //   name: formInName,
        //   patronymic: formInPatronymic,
        //   birthDate: formInBirthDate,
        //   startYear: formInStartYear,
        //   faculty: formInFaculty,
        // };

        // await addStudentsToServer(newStudent); // добавление студента на сервер

        // allFormInInputs.forEach((input) => (input.value = '')); // очистка полей формы (после добавления)
        // modalForm.classList.remove('was-validated'); // отмена красной обводки у "чистых" полей формы (после добавления)

        // вывод сообщения об успешном добавлении студента (после перерисовки таблицы)
        setTimeout(() => {
          alert('Клиент успешно добавлен!');
          // movingToLastNewTableRow(); // выделение/показ только что добавленного студента/строки
        }, 200);
      }
    },
    false
  );
}

// ? ВАРИАНТ функции handleModalFormSubmit() с которым было "ЗЕЛЁНОЕ" выделение контактных инпутов
function handleModalFormSubmit(context = {}) {
  const { modalBodyForm, type, clientData } = context; // получение необходимых элементов (через деструктуризациию входящего/передаваемого объекта)

  // проверка наличия входящих аргументов/параметров (нет.. возврат)
  if (!modalBodyForm || !type || !clientData) {
    console.error(
      'Событие "submit" невозможно.. недостаточно входящих параметров!?'
    );
    return;
  }

  // [СЕРВЕР] / обработка события "submit"
  modalBodyForm.addEventListener(
    'submit',
    async (event) => {
      event.preventDefault();

      // отработка "дополнительной" валидации инпутов/формы, в момент "submit" (т.е. при прожатии "Сохранить", всё ли корректно/заполнено)
      const allModalInputs = modalBodyForm.querySelectorAll('.modal-input');
      const validErrors = additionalFormInputsValidation(
        allModalInputs,
        modalBodyForm
      );

      if (!modalBodyForm.checkValidity() || validErrors.length > 0) {
        event.stopPropagation();
        modalBodyForm.classList.add('was-validated');
      } else {
        // вывод сообщения об успешном добавлении клиента (после перерисовки таблицы)
        setTimeout(() => {
          alert('Клиент успешно добавлен!');
          // movingToLastNewTableRow(); // выделение/показ только что добавленного клиента/строки
        }, 200);
      }
    },
    false
  );
}

// !!
function handleModalFormSubmit(context = {}) {
  const { modalBodyForm, type, clientData } = context; // получение необходимых элементов
  const saveButton = modalBodyForm.querySelector('#modal-body-save-btn'); // фиксация кнопки "Сохранить"

  // проверка наличия входящих аргументов
  if (!modalBodyForm || !type || !clientData) {
    console.error(
      'Событие "submit" невозможно.. недостаточно входящих параметров!?'
    );
    return;
  }

  // обработка инпутов / увязка с состоянием кнопки "Сохранить"
  const allModalInputs = modalBodyForm.querySelectorAll('.modal-input');
  allModalInputs.forEach((input) => {
    input.addEventListener('input', () => {
      updateSaveButtonState(modalBodyForm, saveButton); // обновление состояния кнопки "Сохранить"
    });
  });

  // обработка события "submit"
  modalBodyForm.addEventListener(
    'submit',
    async (event) => {
      event.preventDefault();

      // блокировка кнопки "Сохранить" после первого "submit"
      saveButton.disabled = true;

      // проверка валидности всей формы
      const validErrors = additionalFormInputsValidation(
        allModalInputs,
        modalBodyForm
      );

      if (!modalBodyForm.checkValidity() || validErrors.length > 0) {
        event.stopPropagation(); // остановка распространения события
        modalBodyForm.classList.add('was-validated'); // добавление CSS класса
        updateSaveButtonState(modalBodyForm, saveButton); // проверка состояния кнопки "Сохранить" после валидации
      } else {
        saveButton.disabled = false; // разблокировка кнопки "Сохранить", если форма валидна

        // вывод сообщения об успешном добавлении клиента
        setTimeout(() => {
          alert('Клиент успешно добавлен!');
          // movingToLastNewTableRow(); // выделение/показ только что добавленного клиента/строки
        }, 200);
      }
    },
    false
  );
}

// ** организация блокировки/доступности для модальной кнопки "Сохранить" (доступна для прожатия или нет)
function updateSaveButtonState(modalBodyForm, saveButton) {
  const allModalInputs = Array.from(
    modalBodyForm.querySelectorAll('.modal-input')
  );
  const hasInvalidInputs = allModalInputs.some(
    (input) =>
      input.classList.contains('is-invalid') &&
      !input.classList.contains('modal-patronymic-input')
  );

  // обновление/изменение состояния кнопки и прозрачности
  saveButton.disabled = hasInvalidInputs;
  saveButton.style.opacity = hasInvalidInputs ? '0.5' : '1';
  saveButton.style.cursor = hasInvalidInputs ? 'not-allowed' : 'pointer';
}
