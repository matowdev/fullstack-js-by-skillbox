(() => {
  // ** первичные/вводные данные
  const studentsDataArr = [
    {
      surname: 'Сергеева',
      name: 'Александра',
      patronymic: 'Михайловна',
      birthDate: new Date(1999, 7, 20),
      startYear: 2020,
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
      startYear: 2020,
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

  // ** получение существующих, создание "новых" элементов (глобальное объявление)
  const dashboard = document.getElementById('dboard');
  const dboardInput = document.getElementById('dboard-input');
  const dboardFilter = document.getElementById('dboard-filter');
  const dboardOutput = document.getElementById('dboard-output');

  // организация раскрывающейся формы (добавление студента, очистка полей ввода)
  const inputCollapseBtnWrap = document.createElement('div');
  const inputCollapseBtnShowHide = document.createElement('button');
  const inputCollapseFormWrap = document.createElement('div');
  const formInputData = document.createElement('form');
  const formInSurnameWrap = document.createElement('div');
  const formInSurnameInput = document.createElement('input');
  const formInSurnameLabel = document.createElement('label');
  const formInSurnameInvalidFeed = document.createElement('div');
  const formInNameWrap = document.createElement('div');
  const formInNameInput = document.createElement('input');
  const formInNameLabel = document.createElement('label');
  const formInNameInvalidFeed = document.createElement('div');
  const formInPatronymicWrap = document.createElement('div');
  const formInPatronymicInput = document.createElement('input');
  const formInPatronymicLabel = document.createElement('label');
  const formInPatronymicInvalidFeed = document.createElement('div');
  const formInBirthDateWrap = document.createElement('div');
  const formInBirthDateInput = document.createElement('input');
  const formInBirthDateLabel = document.createElement('label');
  const formInBirthDateInvalidFeed = document.createElement('div');
  const formInStartYearWrap = document.createElement('div');
  const formInStartYearInput = document.createElement('input');
  const formInStartYearLabel = document.createElement('label');
  const formInStartYearInvalidFeed = document.createElement('div');
  const formInFacultyWrap = document.createElement('div');
  const formInFacultyInput = document.createElement('input');
  const formInFacultyLabel = document.createElement('label');
  const formInFacultyInvalidFeed = document.createElement('div');
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
  formInputData.classList.add('dboard__input-form', 'mb-3', 'needs-validation');
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
  formInSurnameInvalidFeed.classList.add(
    'dboard__input-surname-feedback',
    'invalid-feedback'
  );
  formInNameWrap.classList.add(
    'dboard__input-name-wrap',
    'form-floating',
    'mb-3'
  );
  formInNameInput.classList.add('dboard__input-name-input', 'form-control');
  formInNameLabel.classList.add('dboard__input-name-label');
  formInNameInvalidFeed.classList.add(
    'dboard__input-name-feedback',
    'invalid-feedback'
  );
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
  formInPatronymicInvalidFeed.classList.add(
    'dboard__input-patron-feedback',
    'invalid-feedback'
  );
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
  formInBirthDateInvalidFeed.classList.add(
    'dboard__input-birthday-feedback',
    'invalid-feedback'
  );
  formInStartYearWrap.classList.add(
    'dboard__input-start-wrap',
    'form-floating',
    'mb-3'
  );
  formInStartYearInput.classList.add(
    'dboard__input-start-input',
    'form-control',
    'start-year'
  );
  formInStartYearLabel.classList.add('dboard__input-start-label');
  formInStartYearInvalidFeed.classList.add(
    'dboard__input-start-feedback',
    'invalid-feedback'
  );
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
  formInFacultyInvalidFeed.classList.add(
    'dboard__input-faculty-feedback',
    'invalid-feedback'
  );
  formInBtnWrap.classList.add(
    'dboard__input-btn-wrap',
    'd-inline-flex',
    'gap-2'
  );
  formInBtnAdd.classList.add('dboard__input-btn-add', 'btn', 'btn-primary');
  formInBtnClear.classList.add(
    'dboard__input-btn-clear',
    'btn',
    'btn-secondary',
    'btn-clear'
  );

  inputCollapseBtnShowHide.setAttribute('id', 'formInputCollapse');
  inputCollapseBtnShowHide.setAttribute('type', 'button');
  inputCollapseBtnShowHide.setAttribute('data-bs-toggle', 'collapse');
  inputCollapseBtnShowHide.setAttribute(
    'data-bs-target',
    '#collapseInputShowHide'
  );
  inputCollapseFormWrap.setAttribute('id', 'collapseInputShowHide');
  formInputData.setAttribute('action', '#');
  formInputData.setAttribute('novalidate', '');
  formInSurnameInput.setAttribute('id', 'floatingInputSurname');
  formInSurnameInput.setAttribute('type', 'text');
  formInSurnameInput.setAttribute('pattern', '[А-Яа-яЁё\\-]+');
  formInSurnameInput.setAttribute('placeholder', 'Фамилия');
  formInSurnameInput.setAttribute('required', '');
  formInSurnameLabel.setAttribute('for', 'floatingInputSurname');
  formInNameInput.setAttribute('id', 'floatingInputName');
  formInNameInput.setAttribute('type', 'text');
  formInNameInput.setAttribute('pattern', '[А-Яа-яЁё\\-]+');
  formInNameInput.setAttribute('placeholder', 'Имя');
  formInNameInput.setAttribute('required', '');
  formInNameLabel.setAttribute('for', 'floatingInputName');
  formInPatronymicInput.setAttribute('id', 'floatingInputPatronymic');
  formInPatronymicInput.setAttribute('type', 'text');
  formInPatronymicInput.setAttribute('pattern', '[А-Яа-яЁё\\-]+');
  formInPatronymicInput.setAttribute('placeholder', 'Отчество');
  formInPatronymicInput.setAttribute('required', '');
  formInPatronymicLabel.setAttribute('for', 'floatingInputPatronymic');
  formInBirthDateInput.setAttribute('id', 'floatingInputBirthday');
  formInBirthDateInput.setAttribute('type', 'date');
  formInBirthDateInput.setAttribute('min', '1900-01-01');
  formInBirthDateInput.setAttribute(
    'max',
    new Date().toISOString().split('T')[0]
  ); // по текущую дату/год
  formInBirthDateInput.setAttribute('placeholder', 'Дата рождения');
  formInBirthDateInput.setAttribute('required', '');
  formInBirthDateLabel.setAttribute('for', 'floatingInputBirthday');
  formInStartYearInput.setAttribute('id', 'floatingInputStartYear');
  formInStartYearInput.setAttribute('type', 'number');
  formInStartYearInput.setAttribute('value', '2020');
  formInStartYearInput.setAttribute('min', 2000);
  formInStartYearInput.setAttribute('max', new Date().getFullYear()); // по текущий год
  formInStartYearInput.setAttribute('placeholder', 'Год начала обучения');
  formInStartYearInput.setAttribute('required', '');
  formInStartYearLabel.setAttribute('for', 'floatingInputStartYear');
  formInFacultyInput.setAttribute('id', 'floatingInputFaculty');
  formInFacultyInput.setAttribute('type', 'text');
  formInFacultyInput.setAttribute('pattern', '[А-Яа-яЁё\\-]+');
  formInFacultyInput.setAttribute('minlength', '3');
  formInFacultyInput.setAttribute('placeholder', 'Факультет');
  formInFacultyInput.setAttribute('required', '');
  formInFacultyLabel.setAttribute('for', 'floatingInputFaculty');
  formInBtnAdd.setAttribute('id', 'in-add-btn');
  formInBtnAdd.setAttribute('type', 'submit');
  formInBtnClear.setAttribute('id', 'in-clear-btn');
  formInBtnClear.setAttribute('type', 'button');

  inputCollapseBtnShowHide.textContent =
    'Развернуть/свернуть форму добавления студентов';
  formInSurnameLabel.textContent = 'Фамилия';
  formInSurnameInvalidFeed.textContent = 'Заполните поле "Фамилия"!';
  formInNameLabel.textContent = 'Имя';
  formInNameInvalidFeed.textContent = 'Заполните поле "Имя"!';
  formInPatronymicLabel.textContent = 'Отчество';
  formInPatronymicInvalidFeed.textContent = 'Заполните поле "Отчество"!';
  formInBirthDateLabel.textContent = 'Дата рождения';
  formInBirthDateInvalidFeed.textContent = 'Укажите дату рождения!';
  formInStartYearLabel.textContent = 'Год начала обучения';
  formInStartYearInvalidFeed.textContent = 'Укажите год начала обучения!';
  formInFacultyLabel.textContent = 'Факультет';
  formInFacultyInvalidFeed.textContent = 'Определите факультет!';
  formInBtnAdd.textContent = 'Добавить студента';
  formInBtnClear.textContent = 'Очистить поля ввода';

  inputCollapseBtnWrap.append(inputCollapseBtnShowHide);
  formInSurnameWrap.append(
    formInSurnameInput,
    formInSurnameLabel,
    formInSurnameInvalidFeed
  );
  formInNameWrap.append(
    formInNameInput,
    formInNameLabel,
    formInNameInvalidFeed
  );
  formInPatronymicWrap.append(
    formInPatronymicInput,
    formInPatronymicLabel,
    formInPatronymicInvalidFeed
  );
  formInBirthDateWrap.append(
    formInBirthDateInput,
    formInBirthDateLabel,
    formInBirthDateInvalidFeed
  );
  formInStartYearWrap.append(
    formInStartYearInput,
    formInStartYearLabel,
    formInStartYearInvalidFeed
  );
  formInFacultyWrap.append(
    formInFacultyInput,
    formInFacultyLabel,
    formInFacultyInvalidFeed
  );
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

  // организация раскрывающейся формы (фильтрация табличных данных)
  const filterCollapseBtnWrap = document.createElement('div');
  const filterCollapseBtnShowHide = document.createElement('button');
  const filterCollapseFormWrap = document.createElement('div');
  const formFilterData = document.createElement('form');
  const formFilterFIOWrap = document.createElement('div');
  const formFilterFIOInput = document.createElement('input');
  const formFilterFIOLabel = document.createElement('label');
  const formFilterFIOInvalidFeed = document.createElement('div');
  const formFilterFacultyWrap = document.createElement('div');
  const formFilterFacultyInput = document.createElement('input');
  const formFilterFacultyLabel = document.createElement('label');
  const formFilterFacultyInvalidFeed = document.createElement('div');
  const formFilterStartYearWrap = document.createElement('div');
  const formFilterStartYearInput = document.createElement('input');
  const formFilterStartYearLabel = document.createElement('label');
  const formFilterStartYearInvalidFeed = document.createElement('div');
  const formFilterEndYearWrap = document.createElement('div');
  const formFilterEndYearInput = document.createElement('input');
  const formFilterEndYearLabel = document.createElement('label');
  const formFilterEndYearInvalidFeed = document.createElement('div');
  const formFilterBtnWrap = document.createElement('div');
  const formFilterBtnApplyFilter = document.createElement('button');
  const formFilterBtnClear = document.createElement('button');

  filterCollapseBtnWrap.classList.add(
    'dboard__filter-collapse-btn-wrap',
    'd-inline-flex',
    'gap-2'
  );
  filterCollapseBtnShowHide.classList.add(
    'dboard__filter-collapse-btn-show-hide',
    'btn',
    'btn-primary',
    'collapsed',
    'mb-3'
  );
  filterCollapseFormWrap.classList.add(
    'dboard__filter-collapse-form-wrap',
    'collapse'
  );
  formFilterData.classList.add(
    'dboard__filter-form',
    'mb-3',
    'needs-validation'
  );
  formFilterFIOWrap.classList.add(
    'dboard__filter-fio-wrap',
    'form-floating',
    'mb-3'
  );
  formFilterFIOInput.classList.add('dboard__filter-fio-input', 'form-control');
  formFilterFIOLabel.classList.add('dboard__filter-fio-label');
  formFilterFIOInvalidFeed.classList.add(
    'dboard__filter-fio-feedback',
    'invalid-feedback'
  );
  formFilterFacultyWrap.classList.add(
    'dboard__filter-faculty-wrap',
    'form-floating',
    'mb-3'
  );
  formFilterFacultyInput.classList.add(
    'dboard__filter-faculty-input',
    'form-control'
  );
  formFilterFacultyLabel.classList.add('dboard__filter-faculty-label');
  formFilterFacultyInvalidFeed.classList.add(
    'dboard__filter-faculty-feedback',
    'invalid-feedback'
  );
  formFilterStartYearWrap.classList.add(
    'dboard__filter-start-wrap',
    'form-floating',
    'mb-3'
  );
  formFilterStartYearInput.classList.add(
    'dboard__filter-start-input',
    'form-control'
  );
  formFilterStartYearLabel.classList.add('dboard__filter-start-label');
  formFilterStartYearInvalidFeed.classList.add(
    'dboard__filter-start-feedback',
    'invalid-feedback'
  );
  formFilterEndYearWrap.classList.add(
    'dboard__filter-end-wrap',
    'form-floating',
    'mb-3'
  );
  formFilterEndYearInput.classList.add(
    'dboard__filter-end-input',
    'form-control'
  );
  formFilterEndYearLabel.classList.add('dboard__filter-end-label');
  formFilterEndYearInvalidFeed.classList.add(
    'dboard__filter-end-feedback',
    'invalid-feedback'
  );
  formFilterBtnWrap.classList.add(
    'dboard__filter-btn-wrap',
    'd-inline-flex',
    'gap-2'
  );
  formFilterBtnApplyFilter.classList.add(
    'dboard__filter-btn-filter',
    'btn',
    'btn-primary',
    'btn-filter'
  );
  formFilterBtnClear.classList.add(
    'dboard__filter-btn-clear',
    'btn',
    'btn-secondary',
    'btn-clear'
  );

  filterCollapseBtnShowHide.setAttribute('id', 'formFilterCollapse');
  filterCollapseBtnShowHide.setAttribute('type', 'button');
  filterCollapseBtnShowHide.setAttribute('data-bs-toggle', 'collapse');
  filterCollapseBtnShowHide.setAttribute(
    'data-bs-target',
    '#collapseFilterShowHide'
  );
  filterCollapseFormWrap.setAttribute('id', 'collapseFilterShowHide');
  formFilterData.setAttribute('action', '#');
  formFilterData.setAttribute('novalidate', '');
  formFilterFIOInput.setAttribute('id', 'floatingFilterFIO');
  formFilterFIOInput.setAttribute('type', 'text');
  formFilterFIOInput.setAttribute('pattern', '[А-Яа-яЁё\\-]+');
  formFilterFIOInput.setAttribute('placeholder', 'Ф.И.О.');
  // formFilterFIOInput.setAttribute('required', '');
  formFilterFIOLabel.setAttribute('for', 'floatingFilterFIO');
  formFilterFacultyInput.setAttribute('id', 'floatingFilterFaculty');
  formFilterFacultyInput.setAttribute('type', 'text');
  formFilterFacultyInput.setAttribute('pattern', '[А-Яа-яЁё\\-]+');
  formFilterFacultyInput.setAttribute('placeholder', 'Факультет');
  // formFilterFacultyInput.setAttribute('required', '');
  formFilterFacultyLabel.setAttribute('for', 'floatingFilterFaculty');
  formFilterStartYearInput.setAttribute('id', 'floatingFilterStartYear');
  formFilterStartYearInput.setAttribute('type', 'number');
  formFilterStartYearInput.setAttribute('min', 2000);
  formFilterStartYearInput.setAttribute('max', new Date().getFullYear()); // с текущего года
  formFilterStartYearInput.setAttribute('placeholder', 'Год начала обучения');
  // formFilterStartYearInput.setAttribute('required', '');
  formFilterStartYearLabel.setAttribute('for', 'floatingFilterStartYear');
  formFilterEndYearInput.setAttribute('id', 'floatingFilterEndYear');
  formFilterEndYearInput.setAttribute('type', 'number');
  formFilterEndYearInput.setAttribute('min', 2004);
  formFilterEndYearInput.setAttribute('max', new Date().getFullYear() + 4); // по текущий год + 4
  formFilterEndYearInput.setAttribute('placeholder', 'Год окончания обучения');
  // formFilterEndYearInput.setAttribute('required', '');
  formFilterEndYearLabel.setAttribute('for', 'floatingFilterEndYear');
  formFilterBtnApplyFilter.setAttribute('id', 'filter-filter-btn');
  formFilterBtnApplyFilter.setAttribute('type', 'submit');
  formFilterBtnClear.setAttribute('id', 'filter-clear-btn');
  formFilterBtnClear.setAttribute('type', 'button');

  filterCollapseBtnShowHide.textContent =
    'Развернуть/свернуть форму фильтрации студентов';
  formFilterFIOLabel.textContent = 'Ф.И.О.';
  formFilterFIOInvalidFeed.textContent = 'Введите Ф.И.О.!';
  formFilterFacultyLabel.textContent = 'Факультет';
  formFilterFacultyInvalidFeed.textContent = 'Введите название факультет!';
  formFilterStartYearLabel.textContent = 'Год начала обучения';
  formFilterStartYearInvalidFeed.textContent = 'Укажите год начала обучения!';
  formFilterEndYearLabel.textContent = 'Год окончания обучения';
  formFilterEndYearInvalidFeed.textContent = 'Укажите год окончания обучения!';
  formFilterBtnApplyFilter.textContent = 'Применить фильтр(ы)';
  formFilterBtnClear.textContent = 'Очистить поля фильтрации';

  filterCollapseBtnWrap.append(filterCollapseBtnShowHide);
  formFilterFIOWrap.append(
    formFilterFIOInput,
    formFilterFIOLabel,
    formFilterFIOInvalidFeed
  );
  formFilterFacultyWrap.append(
    formFilterFacultyInput,
    formFilterFacultyLabel,
    formFilterFacultyInvalidFeed
  );
  formFilterStartYearWrap.append(
    formFilterStartYearInput,
    formFilterStartYearLabel,
    formFilterStartYearInvalidFeed
  );
  formFilterEndYearWrap.append(
    formFilterEndYearInput,
    formFilterEndYearLabel,
    formFilterEndYearInvalidFeed
  );
  formFilterBtnWrap.append(formFilterBtnClear); // готова к добавлению.. и formFilterBtnApplyFilter
  formFilterData.append(
    formFilterFIOWrap,
    formFilterFacultyWrap,
    formFilterStartYearWrap,
    formFilterEndYearWrap,
    formFilterBtnWrap
  );
  filterCollapseFormWrap.append(formFilterData);
  dboardFilter.append(filterCollapseBtnWrap, filterCollapseFormWrap);

  // организация таблицы данных о студентам (структура, заголовки колонок)
  const table = document.createElement('table');
  const tableHead = document.createElement('thead');
  const tableBody = document.createElement('tbody');
  const tableHeadTr = document.createElement('tr');
  const tableHeaderThTag = document.createElement('th');
  const tableHeadThFIO = document.createElement('th');
  const tableHeadThFaculty = document.createElement('th');
  const tableHeadThBirthDate = document.createElement('th');
  const tableHeadThStartYear = document.createElement('th');
  const afterTableLinksWrap = document.createElement('div');
  const linkToAddStudForm = document.createElement('a');

  table.classList.add(
    'dboard__table',
    'table',
    'table-bordered',
    'table-hover'
  );
  tableHead.classList.add('dboard__table-head');
  tableBody.classList.add('dboard__table-body', 'table-group-divider');
  tableHeaderThTag.classList.add('dboard__table-head-cell');
  tableHeadThFIO.classList.add('dboard__table-head-cell');
  tableHeadThFaculty.classList.add('dboard__table-head-cell');
  tableHeadThBirthDate.classList.add('dboard__table-head-cell');
  tableHeadThStartYear.classList.add('dboard__table-head-cell');
  afterTableLinksWrap.classList.add('dboard__table-after');
  linkToAddStudForm.classList.add(
    'dboard__table-after-link',
    'btn',
    'btn-outline-primary'
  );

  linkToAddStudForm.setAttribute('href', '#formInputCollapse');
  linkToAddStudForm.setAttribute('role', 'button');

  tableHeaderThTag.textContent = '#';
  tableHeadThFIO.textContent = 'Ф.И.О.';
  tableHeadThFaculty.textContent = 'Факультет';
  tableHeadThBirthDate.textContent = 'Дата рождения и возраст';
  tableHeadThStartYear.textContent = 'Годы обучения';
  linkToAddStudForm.textContent = 'Возврат к форме добавления студента..';

  tableHeadTr.append(
    tableHeaderThTag,
    tableHeadThFIO,
    tableHeadThFaculty,
    tableHeadThBirthDate,
    tableHeadThStartYear
  );
  tableHead.append(tableHeadTr);
  table.append(tableHead, tableBody);
  afterTableLinksWrap.append(linkToAddStudForm);
  dboardOutput.append(table, afterTableLinksWrap);

  // основные блоки/составляющие панели управления
  dashboard.append(dboardInput, dboardFilter, dboardOutput);

  // ** корректировка исходного массива студентов (добавление свойства id, для последующей сортировки)
  function correctInitArrAddId(studentsDataArr = []) {
    studentsDataArr.forEach((student, index) => {
      student.id = index + 1;
    });
  }

  correctInitArrAddId(studentsDataArr);

  // ** корректировка исходного массива студентов (добавление свойства fullName, изменения в birthDate и в startYear)
  function correctInitArr(studentsDataArr = []) {
    const newStudentsDataArr = structuredClone(studentsDataArr);
    const todayDate = new Date();
    const todayYear = new Date().getFullYear();
    const todayMonth = new Date().getMonth(); // месяцы начинаются с 0 (нуля)

    for (const student of newStudentsDataArr) {
      // добавление свойства fullName
      student.fullName = `${student.surname} ${student.name} ${student.patronymic}`;

      // изменения в birthDate (формат даты, определение возраста, перезапись свойства)
      let formatBirthDate = student.birthDate.toLocaleDateString('ru-RU');
      let studentAge =
        todayDate.getFullYear() - student.birthDate.getFullYear();
      let birthMonth = todayDate.getMonth() - student.birthDate.getMonth();
      let birthDay = todayDate.getDate() - student.birthDate.getDate();

      if (birthMonth < 0 || (birthMonth === 0 && birthDay < 0)) {
        studentAge--;
      }

      student.birthDateFormatted = `${formatBirthDate} (${studentAge} лет)`;

      // изменения в startYear (указание диапазона обучения, определение курса, перезапись свойства)
      const endStudyYear = student.startYear + 4;
      let currentCourse = todayYear - student.startYear;

      if (currentCourse > 4 || (currentCourse === 4 && todayMonth > 8)) {
        student.studyPeriod = `${student.startYear}-${endStudyYear} (закончил(а))`;
      } else if (currentCourse === 0 && todayMonth > 8) {
        student.studyPeriod = `${student.startYear}-${endStudyYear} (1 курс)`;
      } else {
        student.studyPeriod = `${student.startYear}-${endStudyYear} (${currentCourse} курс)`;
      }
    }

    return newStudentsDataArr;
  }

  // ** создание элементов/строк таблицы данных о студентах (заполнение ячеек)
  function createStudentTableTrRow(index = 0, student = {}) {
    const studentTableTr = document.createElement('tr');
    const studentTdNumber = document.createElement('td');
    const studentTdFIO = document.createElement('td');
    const studentTdFaculty = document.createElement('td');
    const studentTdBirthDate = document.createElement('td');
    const studentTdStartYear = document.createElement('td');

    studentTdNumber.textContent = index + 1;
    studentTdFIO.textContent = student.fullName;
    studentTdFaculty.textContent = student.faculty;
    studentTdBirthDate.textContent = student.birthDateFormatted;
    studentTdStartYear.textContent = student.studyPeriod;

    studentTableTr.append(
      studentTdNumber,
      studentTdFIO,
      studentTdFaculty,
      studentTdBirthDate,
      studentTdStartYear
    );

    return studentTableTr;
  }

  // ** создание "пустой" строки для таблицы студентов (при/для фильтрации, пустом массиве)
  function createEmptyTableMessageRow() {
    const emptyTableTrRow = document.createElement('tr');
    const emptyTableTdCell = document.createElement('td');

    emptyTableTdCell.colSpan = 5; // объединение всех колонок
    emptyTableTdCell.textContent =
      'Пусто.. измените фильтрацию, добавьте студента!';
    emptyTableTdCell.style.textAlign = 'center';
    emptyTableTrRow.append(emptyTableTdCell);

    return emptyTableTrRow;
  }

  // ** наполнение таблицы данных о студентах (согласно откорректированного исходного, далее формирующегося массива)
  let updateStudentsDataArr;

  function addStudentsToTable(studentsDataArr = []) {
    tableBody.innerHTML = ''; // предварительная очистка таблицы
    updateStudentsDataArr = correctInitArr(studentsDataArr);

    if (updateStudentsDataArr.length === 0) {
      const emptyTableRow = createEmptyTableMessageRow(); // если массив студентов/таблица данных пуста, вывод сообщения
      tableBody.append(emptyTableRow);
    } else {
      for (const [index, student] of updateStudentsDataArr.entries()) {
        const studentTableTrRow = createStudentTableTrRow(index, student);
        tableBody.append(studentTableTrRow);
      }
    }
  }

  addStudentsToTable(studentsDataArr);

  // ** обновление валидационного сообщения (изменение состояния input(a))
  function updateFormInputValidMsg(input) {
    const parentNode = input.parentNode;
    const invalidFeed = parentNode.querySelector('.invalid-feedback');

    if (!invalidFeed) return; // если/вдруг такое сообщение не предусмотренно для input(а)

    input.classList.remove('is-invalid');

    if (input.placeholder) {
      switch (input.placeholder) {
        case 'Фамилия':
          invalidFeed.textContent = 'Заполните поле "Фамилия"!';
          break;
        case 'Имя':
          invalidFeed.textContent = 'Заполните поле "Имя"!';
          break;
        case 'Отчество':
          invalidFeed.textContent = 'Заполните поле "Отчество"!';
          break;
        case 'Ф.И.О.':
          invalidFeed.textContent = 'Введите Ф.И.О.!';
          break;
        case 'Дата рождения':
          invalidFeed.textContent =
            'Укажите дату рождения, в диапазоне: от 1900 года до "текущего"!';
          break;
        case 'Год начала обучения':
          invalidFeed.textContent =
            'Укажите год начала обучения, в диапазоне: от 2000 по "текущий"!';
          break;
        case 'Год окончания обучения':
          invalidFeed.textContent =
            'Укажите год окончания обучения, в диапазоне: от 2004 по "..."!';
          break;
        case 'Факультет':
          invalidFeed.textContent = 'Определите факультет (не менее 3-х букв)!';
          break;
        default:
          invalidFeed.textContent = 'Заполните поле!';
          break;
      }
    }
  }

  // ** организация дополнительной валидации для inputs, согласно их типов (отдельно от валидации всей формы/submit)
  function additionalFormInputsValidation(input) {
    if (input.type === 'number') {
      // исключение ввода не цифр, через прослушку клавиатуры (ряд исключений)
      input.addEventListener('keydown', (event) => {
        const pressedKey = event.key;
        const target = event.target;
        const targetParentNode = target.parentNode;
        const invalidFeed = targetParentNode.querySelector('.invalid-feedback');

        if (event.ctrlKey || event.altKey || event.shiftKey) {
          return;
        }

        if (
          !pressedKey.match(/[0-9]/) &&
          ![
            'Tab',
            'Backspace',
            'Enter',
            'Delete',
            'ArrowUp',
            'ArrowRight',
            'ArrowDown',
            'ArrowLeft',
          ].includes(pressedKey)
        ) {
          target.classList.add('is-invalid');
          invalidFeed.textContent = 'Некорректный ввод! Только цифры!';
          event.preventDefault();
        } else {
          target.classList.remove('is-invalid');
          updateFormInputValidMsg(target);
        }
      });
    }

    input.addEventListener('input', (event) => {
      const target = event.target;
      const targetParentNode = target.parentNode;
      const invalidFeed = targetParentNode.querySelector('.invalid-feedback');

      if (target.type === 'text') {
        // только русские буквы и дефис (для двойных-фамилий), без цифр/символов и пробелов
        if (/[^а-яА-ЯёЁ-]/.test(target.value)) {
          target.classList.add('is-invalid');
          invalidFeed.textContent =
            'Некорректный ввод! Измените раскладку клавиатуры и/или исключите цифры/знаки, пробелы!';
        } else {
          target.classList.remove('is-invalid');
          updateFormInputValidMsg(target);
        }
      } else if (target.type === 'number') {
        // ограничение по длине ввода
        if (target.value.length > 4) {
          target.classList.add('is-invalid');
          invalidFeed.textContent = 'Некорректный ввод! Не более 4 цифр!';
        } else {
          target.classList.remove('is-invalid');
          updateFormInputValidMsg(target);
        }
      }
    });
  }

  // ** добавление "новых" студентов в массив/таблицу, через поля формы (после валидации, после проверки по ФИО)
  const allFormInInputs = document.querySelectorAll(
    '.dboard__input-form input'
  );

  // корректировка регистра, для полей Ф.И.О.
  function toUpFirstLetter(value) {
    if (!value) return ''; // если вдруг "пусто"
    return value[0].toUpperCase() + value.slice(1).toLowerCase();
  }

  // проверка на совпадение по ФИО, в исходном/формирующемся массиве
  function checkStudentFIO(
    formInSurname,
    formInName,
    formInPatronymic,
    studentsDataArr
  ) {
    return studentsDataArr.some(
      (student) =>
        student.surname === formInSurname &&
        student.name === formInName &&
        student.patronymic === formInPatronymic
    );
  }

  allFormInInputs.forEach((input) => {
    additionalFormInputsValidation(input); // дополнительная валидация (на корректный ввод)
  });

  formInputData.addEventListener(
    'submit',
    (event) => {
      event.preventDefault();

      if (!formInputData.checkValidity()) {
        event.stopPropagation();
        formInputData.classList.add('was-validated');
      } else {
        const formInSurname = toUpFirstLetter(formInSurnameInput.value.trim());
        const formInName = toUpFirstLetter(formInNameInput.value.trim());
        const formInPatronymic = toUpFirstLetter(
          formInPatronymicInput.value.trim()
        );

        if (
          checkStudentFIO(
            formInSurname,
            formInName,
            formInPatronymic,
            studentsDataArr
          )
        ) {
          const formInNotification = confirm(
            'Совпадение по Ф.И.О! Такой студент уже существует! Всё равно добавить?'
          );
          if (!formInNotification) {
            return; // т.е. не добавление студента (без очистки полей ввода, возможность что-то исправить)
          }
        }

        studentsDataArr.push({
          surname: formInSurname,
          name: formInName,
          patronymic: formInPatronymic,
          birthDate: new Date(formInBirthDateInput.value),
          startYear: parseInt(formInStartYearInput.value),
          faculty: formInFacultyInput.value.toLowerCase().trim(),
          id: studentsDataArr.length + 1, // продолжение нумерации, исходя из логики index + 1 для уже присутствующих
        });

        addStudentsToTable(studentsDataArr); // наполнение таблицы

        allFormInInputs.forEach((input) => (input.value = '')); // очистка полей формы (после добавления)
        formInputData.classList.remove('was-validated'); // отмена красной обводки у "чистых" полей формы (после добавления)

        // вывод сообщения об успешном добавлении студента (после перерисовки таблицы)
        setTimeout(() => {
          alert('Студент успешно добавлен!');
          movingToLastNewTableRow(); // выделение/показ только что добавленного студента/строки
        }, 200);
      }
    },
    false
  );

  // ** перемещение/фиксация области просмотра на только что добавленном студенте/на последней строке (выделение цветом)
  function movingToLastNewTableRow() {
    const lastNewTableRow = tableBody.lastElementChild;
    const defaultRowCellColors = [];

    if (lastNewTableRow) {
      // перемещение к "новому" студенту/к последней строке таблицы
      lastNewTableRow.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });

      // изменение цвета/выделение строки
      lastNewTableRow.querySelectorAll('td').forEach((td) => {
        defaultRowCellColors.push(td.style.color);
        td.style.color = '#3f2aff';
      });

      // возврат к default цвету, через несколько секунды
      setTimeout(() => {
        lastNewTableRow.querySelectorAll('td').forEach((td, index) => {
          td.style.color = defaultRowCellColors[index];
        });
      }, 2000);
    }
  }

  // ** фильтрация студентов/таблицы, согласно фильтрационных полей ввода (сразу применение)
  const allFormFilterInputs = document.querySelectorAll(
    '.dboard__filter-form input'
  );

  allFormFilterInputs.forEach((input) => {
    additionalFormInputsValidation(input); // валидация (на корректный ввод)
  });

  formFilterData.addEventListener('submit', (event) => {
    event.preventDefault();
  });

  function filterStudentsByFormInputs() {
    if (formFilterFIOInput.value.trim() !== '') {
      updateStudentsDataArr = updateStudentsDataArr.filter((student) =>
        student.fullName
          .toLowerCase()
          .includes(formFilterFIOInput.value.toLowerCase().trim())
      ); // стрелочная функция без {}, таким образом автоматический return true\false, согласно условия
    }

    if (formFilterFacultyInput.value.trim() !== '') {
      updateStudentsDataArr = updateStudentsDataArr.filter((student) =>
        student.faculty
          .toLowerCase()
          .includes(formFilterFacultyInput.value.toLowerCase().trim())
      );
    }

    if (formFilterStartYearInput.value.trim() !== '') {
      updateStudentsDataArr = updateStudentsDataArr.filter((student) =>
        student.startYear
          .toString()
          .includes(formFilterStartYearInput.value.trim())
      );
    }

    if (formFilterEndYearInput.value.trim() !== '') {
      updateStudentsDataArr = updateStudentsDataArr.filter((student) =>
        (student.startYear + 4)
          .toString()
          .includes(formFilterEndYearInput.value.trim())
      );
    }

    addStudentsToTable(updateStudentsDataArr);
  }

  allFormFilterInputs.forEach((input) => {
    input.addEventListener('input', () => {
      addStudentsToTable(studentsDataArr); // возврат к исходному наполнению/виду таблицы студентов (при backspace в inputs)
      filterStudentsByFormInputs();
    });
  });

  // ** очистка полей ввода, форм (через внутренние clear кнопки)
  const allClearBtn = document.querySelectorAll('.btn-clear');

  function clearFormsInputs(event) {
    const clickedClearBtn = event.target; // определение кнопки/цели, по которой происходит "click" - событие

    if (clickedClearBtn.id === 'in-clear-btn') {
      allFormInInputs.forEach((input) => {
        input.value = '';
        updateFormInputValidMsg(input);
      });
    } else if (clickedClearBtn.id === 'filter-clear-btn') {
      const formFilterInputsArr = [
        formFilterFIOInput,
        formFilterFacultyInput,
        formFilterStartYearInput,
        formFilterEndYearInput,
      ];
      const formFilterInputsValuesArr = formFilterInputsArr.map(
        (input) => input.value
      );
      const invalidFilterInputs = formFilterInputsArr.some((input) =>
        input.classList.contains('is-invalid')
      );

      if (
        formFilterInputsValuesArr.some((value) => value !== '') ||
        invalidFilterInputs
      ) {
        allFormFilterInputs.forEach((input) => {
          input.value = '';
          updateFormInputValidMsg(input);
        });
        addStudentsToTable(studentsDataArr);
      }
    }
  }

  allClearBtn.forEach((btn) => {
    btn.addEventListener('click', (event) => clearFormsInputs(event)); // передача события
  });

  // ** очистка форм/полей ввода, снятие "выделений" валидации (после collapse/btn действий)
  const allCollapseBtn = document.querySelectorAll('.collapsed');

  function clearFormsAfterCollapse(event) {
    const clickedCollapseBtn = event.target; // определение кнопки/цели, по которой происходит "click" - событие

    if (clickedCollapseBtn.id === 'formInputCollapse') {
      setTimeout(() => {
        allFormInInputs.forEach((input) => {
          if (!input.classList.contains('start-year')) {
            input.value = '';
          }
          updateFormInputValidMsg(input);
        });
        formInputData.classList.remove('was-validated');
      }, 500);
    } else if (clickedCollapseBtn.id === 'formFilterCollapse') {
      setTimeout(() => {
        allFormFilterInputs.forEach((input) => {
          input.value = '';
          updateFormInputValidMsg(input);
        });
        formFilterData.classList.remove('was-validated');
      }, 500);
      addStudentsToTable(studentsDataArr); // возврат к исходному виду таблицы без задержки
    }
  }

  allCollapseBtn.forEach((btn) => {
    btn.addEventListener('click', (event) => clearFormsAfterCollapse(event)); // передача события
  });

  // ** сортировка студентов/таблицы, по ячейкам заголовочной строки (по нажатию, по возрастанию/убыванию)
  const allHeaderRowCells = document.querySelectorAll(
    '.dboard__table-head-cell'
  );
  let sortDirectionUpDown = true;

  function sortStudentsByTableCells(event) {
    const clickedTableCell = event.target.textContent; // определение заглавного поля/ячейки, по которой происходит "click" - событие

    updateStudentsDataArr.sort((a, b) => {
      if (clickedTableCell === '#') {
        return a.id - b.id;
      } else if (clickedTableCell === 'Ф.И.О.') {
        return sortDirectionUpDown
          ? a.fullName.localeCompare(b.fullName)
          : b.fullName.localeCompare(a.fullName);
      } else if (clickedTableCell === 'Факультет') {
        return sortDirectionUpDown
          ? a.faculty.localeCompare(b.faculty)
          : b.faculty.localeCompare(a.faculty);
      } else if (clickedTableCell === 'Дата рождения и возраст') {
        const birthDateComparison =
          new Date(a.birthDate).setHours(0, 0, 0, 0) -
          new Date(b.birthDate).setHours(0, 0, 0, 0); // корректировка часов рождения (всем одно)
        if (birthDateComparison !== 0) {
          return sortDirectionUpDown
            ? birthDateComparison
            : -birthDateComparison;
        }
        return sortDirectionUpDown
          ? a.fullName.localeCompare(b.fullName)
          : b.fullName.localeCompare(a.fullName); // если даты рождения равны, по ФИО будет сортировка
      } else if (clickedTableCell === 'Годы обучения') {
        const startYearComparison = a.startYear - b.startYear;
        if (startYearComparison !== 0) {
          return sortDirectionUpDown
            ? startYearComparison
            : -startYearComparison;
        }
        return sortDirectionUpDown
          ? a.fullName.localeCompare(b.fullName)
          : b.fullName.localeCompare(a.fullName); // если годы начала/окончания равны, по ФИО будет сортировка
      }
      return 0;
    });

    addStudentsToTable(updateStudentsDataArr); // наполнение таблицы, вывод (пере-компоновка)
  }

  allHeaderRowCells.forEach((cell) => {
    cell.addEventListener('click', (event) => {
      sortStudentsByTableCells(event); // передача события
      sortDirectionUpDown = !sortDirectionUpDown; // изменение условия сортировки
    });
  });
})();
