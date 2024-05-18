(() => {
  // ** первичные/вводные данные
  const studentsDataArr = [
    {
      surname: 'Сергеева',
      name: 'Александра',
      patronymic: 'Михайловна',
      birthDate: new Date(1999, 7, 20),
      startYear: 2017,
      faculty: 'информационных технологий',
    },
    {
      surname: 'Нестерова',
      name: 'Валерия',
      patronymic: 'Анатольевна',
      birthDate: new Date(2002, 1, 21),
      startYear: 2022,
      faculty: 'мировой экономики',
    },
    {
      surname: 'Морозов',
      name: 'Артем',
      patronymic: 'Геннадиевич',
      birthDate: new Date(2003, 5, 11),
      startYear: 2021,
      faculty: 'гражданской инженерии',
    },
    {
      surname: 'Мельникова',
      name: 'Екатерина',
      patronymic: 'Владимировна',
      birthDate: new Date(2001, 10, 29),
      startYear: 2019,
      faculty: 'прикладной математики',
    },
    {
      surname: 'Николаев',
      name: 'Максим',
      patronymic: 'Алексеевич',
      birthDate: new Date(2005, 3, 3),
      startYear: 2023,
      faculty: 'медиа и дизайна',
    },
  ];

  // ** получение существующих, создание новых элементов (глобальное объявление)
  const dashboard = document.getElementById('dboard');
  const dboardInput = document.getElementById('dboard-input');
  const dboardFilter = document.getElementById('dboard-filter');
  const dboardOutput = document.getElementById('dboard-output');

  // организация раскрывающейся формы (ввод данных о студентах)
  const inputCollapseBtnWrap = document.createElement('div');
  const inputCollapseBtnShowHide = document.createElement('button');
  const inputCollapseFormWrap = document.createElement('div');
  const formInputData = document.createElement('form');
  const formInSurnameWrap = document.createElement('div');
  const formInSurnameInput = document.createElement('input');
  const formInSurnameLabel = document.createElement('label');
  const formInNameWrap = document.createElement('div');
  const formInNameInput = document.createElement('input');
  const formInNameLabel = document.createElement('label');
  const formInPatronymicWrap = document.createElement('div');
  const formInPatronymicInput = document.createElement('input');
  const formInPatronymicLabel = document.createElement('label');
  const formInBirthDateWrap = document.createElement('div');
  const formInBirthDateInput = document.createElement('input');
  const formInBirthDateLabel = document.createElement('label');
  const formInStartYearWrap = document.createElement('div');
  const formInStartYearInput = document.createElement('input');
  const formInStartYearLabel = document.createElement('label');
  const formInFacultyWrap = document.createElement('div');
  const formInFacultyInput = document.createElement('input');
  const formInFacultyLabel = document.createElement('label');
  const formInBtnWrap = document.createElement('div');
  const formInBtnAdd = document.createElement('button');
  const formInBtnClear = document.createElement('button');

  inputCollapseBtnWrap.classList.add(
    'dboard__input-collapse-btn-wrap',
    'd-inline-flex',
    'gap-2'
  );
  inputCollapseBtnShowHide.classList.add(
    'dboard__input-collapse-btn-show-hide',
    'btn',
    'btn-primary',
    'collapsed',
    'mb-3'
  );
  inputCollapseFormWrap.classList.add(
    'dboard__input-collapse-form-wrap',
    'collapse'
  );
  formInputData.classList.add('dboard__input-form', 'mb-3');
  formInSurnameWrap.classList.add(
    'dboard__input-surname-wrap',
    'form-floating',
    'mb-3'
  );
  formInSurnameInput.classList.add(
    'dboard__input-surname-input',
    'form-control'
  );
  formInSurnameLabel.classList.add('dboard__input-surname-label');
  formInNameWrap.classList.add(
    'dboard__input-name-wrap',
    'form-floating',
    'mb-3'
  );
  formInNameInput.classList.add('dboard__input-name-input', 'form-control');
  formInNameLabel.classList.add('dboard__input-name-label');
  formInPatronymicWrap.classList.add(
    'dboard__input-patron-wrap',
    'form-floating',
    'mb-3'
  );
  formInPatronymicInput.classList.add(
    'dboard__input-patron-input',
    'form-control'
  );
  formInPatronymicLabel.classList.add('dboard__input-patron-label');
  formInBirthDateWrap.classList.add(
    'dboard__input-birthday-wrap',
    'form-floating',
    'mb-3'
  );
  formInBirthDateInput.classList.add(
    'dboard__input-birthday-input',
    'form-control'
  );
  formInBirthDateLabel.classList.add('dboard__input-birthday-label');
  formInStartYearWrap.classList.add(
    'dboard__input-start-wrap',
    'form-floating',
    'mb-3'
  );
  formInStartYearInput.classList.add(
    'dboard__input-start-input',
    'form-control'
  );
  formInStartYearLabel.classList.add('dboard__input-start-label');
  formInFacultyWrap.classList.add(
    'dboard__input-faculty-wrap',
    'form-floating',
    'mb-3'
  );
  formInFacultyInput.classList.add(
    'dboard__input-faculty-input',
    'form-control'
  );
  formInFacultyLabel.classList.add('dboard__input-faculty-label');
  formInBtnWrap.classList.add(
    'dboard__input-btn-wrap',
    'd-inline-flex',
    'gap-2'
  );
  formInBtnAdd.classList.add('dboard__input-btn-add', 'btn', 'btn-primary');
  formInBtnClear.classList.add(
    'dboard__input-btn-clear',
    'btn',
    'btn-secondary'
  );

  inputCollapseBtnShowHide.setAttribute('type', 'button');
  inputCollapseBtnShowHide.setAttribute('data-bs-toggle', 'collapse');
  inputCollapseBtnShowHide.setAttribute('data-bs-target', '#collapseShowHide');
  inputCollapseFormWrap.setAttribute('id', 'collapseShowHide');
  formInputData.setAttribute('action', '#');
  formInSurnameInput.setAttribute('id', 'floatingInputSurname');
  formInSurnameInput.setAttribute('type', 'text');
  formInSurnameInput.setAttribute('placeholder', 'Фамилия');
  formInSurnameLabel.setAttribute('for', 'floatingInputSurname');
  formInNameInput.setAttribute('id', 'floatingInputName');
  formInNameInput.setAttribute('type', 'text');
  formInNameInput.setAttribute('placeholder', 'Имя');
  formInNameLabel.setAttribute('for', 'floatingInputName');
  formInPatronymicInput.setAttribute('id', 'floatingInputPatronymic');
  formInPatronymicInput.setAttribute('type', 'text');
  formInPatronymicInput.setAttribute('placeholder', 'Отчество');
  formInPatronymicLabel.setAttribute('for', 'floatingInputPatronymic');
  formInBirthDateInput.setAttribute('id', 'floatingInputBirthday');
  formInBirthDateInput.setAttribute('type', 'date'); // ? mm/dd/yyyy а можно изменить формат ввода
  formInBirthDateInput.setAttribute('placeholder', 'Дата рождения');
  formInBirthDateLabel.setAttribute('for', 'floatingInputBirthday');
  formInStartYearInput.setAttribute('id', 'floatingInputStartYear');
  formInStartYearInput.setAttribute('type', 'number');
  formInStartYearInput.setAttribute('placeholder', 'Год начала обучения');
  formInStartYearInput.setAttribute('value', '2015'); // ? нужен диапазон с 2015 - по текущий
  formInStartYearLabel.setAttribute('for', 'floatingInputStartYear');
  formInFacultyInput.setAttribute('id', 'floatingInputFaculty');
  formInFacultyInput.setAttribute('type', 'text');
  formInFacultyInput.setAttribute('placeholder', 'Факультет');
  formInFacultyLabel.setAttribute('for', 'floatingInputFaculty');
  formInBtnAdd.setAttribute('id', 'in-add-btn');
  formInBtnClear.setAttribute('id', 'in-clear-btn');
  formInBtnAdd.setAttribute('type', 'submit');
  formInBtnClear.setAttribute('type', 'button'); // ? тип такой и останется, ..clear тип

  inputCollapseBtnShowHide.textContent =
    'Развернуть/свернуть форму добавления студентов';
  formInSurnameLabel.textContent = 'Фамилия';
  formInNameLabel.textContent = 'Имя';
  formInPatronymicLabel.textContent = 'Отчество';
  formInBirthDateLabel.textContent = 'Дата рождения';
  formInStartYearLabel.textContent = 'Год начала обучения';
  formInFacultyLabel.textContent = 'Факультет';
  formInBtnAdd.textContent = 'Добавить студента';
  formInBtnClear.textContent = 'Очистить поля ввода';

  inputCollapseBtnWrap.append(inputCollapseBtnShowHide);
  formInSurnameWrap.append(formInSurnameInput, formInSurnameLabel);
  formInNameWrap.append(formInNameInput, formInNameLabel);
  formInPatronymicWrap.append(formInPatronymicInput, formInPatronymicLabel);
  formInBirthDateWrap.append(formInBirthDateInput, formInBirthDateLabel);
  formInStartYearWrap.append(formInStartYearInput, formInStartYearLabel);
  formInFacultyWrap.append(formInFacultyInput, formInFacultyLabel);
  formInBtnWrap.append(formInBtnAdd, formInBtnClear);
  formInputData.append(
    formInSurnameWrap,
    formInNameWrap,
    formInPatronymicWrap,
    formInBirthDateWrap,
    formInStartYearWrap,
    formInFacultyWrap,
    formInBtnWrap
  );
  inputCollapseFormWrap.append(formInputData);
  dboardInput.append(inputCollapseBtnWrap, inputCollapseFormWrap);

  // организация таблицы (вывод информации о студентах)
  const table = document.createElement('table');
  const tableHead = document.createElement('thead');
  const tableBody = document.createElement('tbody');
  const tableHeadTr = document.createElement('tr');
  const tableHeaderThTag = document.createElement('th');
  const tableHeadThFIO = document.createElement('th');
  const tableHeadThFaculty = document.createElement('th');
  const tableHeadThBirthDate = document.createElement('th');
  const tableHeadThStartYear = document.createElement('th');

  table.classList.add(
    'dboard__table',
    'table',
    'table-bordered',
    'table-hover'
  );
  tableHead.classList.add('dboard__table-head');
  tableBody.classList.add('dboard__table-body', 'table-group-divider');

  tableHeaderThTag.textContent = '#';
  tableHeadThFIO.textContent = 'Ф.И.О.';
  tableHeadThFaculty.textContent = 'Факультет';
  tableHeadThBirthDate.textContent = 'Дата рождения и возраст';
  tableHeadThStartYear.textContent = 'Годы обучения';

  tableHeadTr.append(
    tableHeaderThTag,
    tableHeadThFIO,
    tableHeadThFaculty,
    tableHeadThBirthDate,
    tableHeadThStartYear
  );
  tableHead.append(tableHeadTr);
  table.append(tableHead, tableBody);
  dboardOutput.append(table);

  // основные блоки/составляющие панели управления
  dashboard.append(dboardInput, dboardFilter, dboardOutput);

  // ** корректировка исходного массива студентов (добавление свойства fullName, изменения в birthDate и в startYear)
  const newStudentsDataArr = structuredClone(studentsDataArr);

  // добавление свойства fullName
  function addFullName(newStudentsDataArr = []) {
    for (const student of newStudentsDataArr) {
      student.fullName = `${student.surname} ${student.name} ${student.patronymic}`;
    }
  }

  addFullName(newStudentsDataArr);

  // изменения в birthDate (формат даты, определение возраста, перезапись свойства)
  function formatBirthDate(newStudentsDataArr = []) {
    const todayDate = new Date();

    for (const student of newStudentsDataArr) {
      const formatBirthDate = student.birthDate.toLocaleDateString('ru-RU');
      let studentAge =
        todayDate.getFullYear() - student.birthDate.getFullYear();
      let birthMonth = todayDate.getMonth() - student.birthDate.getMonth();
      let birthDay = todayDate.getDate() - student.birthDate.getDate();

      if (birthMonth < 0 || (birthMonth === 0 && birthDay < 0)) {
        studentAge--;
      }

      student.birthDate = `${formatBirthDate} (${studentAge} лет)`;
    }
  }

  formatBirthDate(newStudentsDataArr);

  // изменения в startYear (указание диапазона обучения, определение курса, перезапись свойства)
  function formatStartYear(newStudentsDataArr = []) {
    const todayYear = new Date().getFullYear();
    const todayMonth = new Date().getMonth(); // месяцы начинаются с 0 (нуля)

    for (const student of newStudentsDataArr) {
      const endStudyYear = student.startYear + 4;
      let currentCourse = todayYear - student.startYear;

      if (currentCourse > 4 || (currentCourse === 4 && todayMonth > 8)) {
        student.startYear = `${student.startYear}-${endStudyYear} (закончил(а))`;
      } else if (currentCourse === 0 && todayMonth > 8) {
        student.startYear = `${student.startYear}-${endStudyYear} (1 курс)`;
      } else {
        student.startYear = `${student.startYear}-${endStudyYear} (${currentCourse} курс)`;
      }
    }
  }

  formatStartYear(newStudentsDataArr);

  // ** до-заполнение таблицы, создание элементов (добавление студентов)
  function addStudentsToTable(newStudentsDataArr = []) {
    for (const [index, student] of newStudentsDataArr.entries()) {
      const studentTableTr = document.createElement('tr');
      const studentTdNumber = document.createElement('td');
      const studentTdFIO = document.createElement('td');
      const studentTdFaculty = document.createElement('td');
      const studentTdBirthDate = document.createElement('td');
      const studentTdStartYear = document.createElement('td');

      studentTdNumber.textContent = index + 1;
      studentTdFIO.textContent = student.fullName;
      studentTdFaculty.textContent = student.faculty;
      studentTdBirthDate.textContent = student.birthDate;
      studentTdStartYear.textContent = student.startYear;

      studentTableTr.append(
        studentTdNumber,
        studentTdFIO,
        studentTdFaculty,
        studentTdBirthDate,
        studentTdStartYear
      );
      tableBody.append(studentTableTr);
    }
  }

  addStudentsToTable(newStudentsDataArr);
})();
