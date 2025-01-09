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
