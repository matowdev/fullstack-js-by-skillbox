(() => {
  // ** получение существующих, создание "новых" элементов (глобальное объявление)
  const dashboard = document.getElementById('dboard');
  const dboardInput = document.getElementById('dboard-input');
  const dboardFilter = document.getElementById('dboard-filter');
  const dboardOutput = document.getElementById('dboard-output');

  dboardOutput.classList.add('pb-3');

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
    'flex-wrap',
    'gap-3',
    'mb-3'
  );
  inputCollapseBtnShowHide.classList.add(
    'dboard__input-collapse-btn-show-hide',
    'btn',
    'btn-outline-primary',
    'collapsed'
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
    'flex-wrap',
    'gap-3'
  );
  formInBtnAdd.classList.add(
    'dboard__input-btn-add',
    'btn',
    'btn-outline-success'
  );
  formInBtnClear.classList.add(
    'dboard__input-btn-clear',
    'btn',
    'btn-outline-secondary',
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
  formInFacultyInput.setAttribute('pattern', '[А-Яа-яЁё\\s]+');
  formInFacultyInput.setAttribute('minlength', '3');
  formInFacultyInput.setAttribute('placeholder', 'Факультет');
  formInFacultyInput.setAttribute('required', '');
  formInFacultyLabel.setAttribute('for', 'floatingInputFaculty');
  formInBtnAdd.setAttribute('id', 'in-add-btn');
  formInBtnAdd.setAttribute('type', 'submit');
  formInBtnClear.setAttribute('id', 'in-clear-btn');
  formInBtnClear.setAttribute('type', 'button');

  inputCollapseBtnShowHide.textContent = 'Форма добавления студентов';
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
    'flex-wrap',
    'gap-3',
    'mb-3'
  );
  filterCollapseBtnShowHide.classList.add(
    'dboard__filter-collapse-btn-show-hide',
    'btn',
    'btn-outline-primary',
    'collapsed'
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
    'flex-wrap',
    'gap-3'
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
    'btn-outline-secondary',
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
  formFilterFIOLabel.setAttribute('for', 'floatingFilterFIO');
  formFilterFacultyInput.setAttribute('id', 'floatingFilterFaculty');
  formFilterFacultyInput.setAttribute('type', 'text');
  formFilterFacultyInput.setAttribute('pattern', '[А-Яа-яЁё\\-]+');
  formFilterFacultyInput.setAttribute('placeholder', 'Факультет');
  formFilterFacultyLabel.setAttribute('for', 'floatingFilterFaculty');
  formFilterStartYearInput.setAttribute('id', 'floatingFilterStartYear');
  formFilterStartYearInput.setAttribute('type', 'number');
  formFilterStartYearInput.setAttribute('min', 2000);
  formFilterStartYearInput.setAttribute('max', new Date().getFullYear()); // с текущего года
  formFilterStartYearInput.setAttribute('placeholder', 'Год начала обучения');
  formFilterStartYearLabel.setAttribute('for', 'floatingFilterStartYear');
  formFilterEndYearInput.setAttribute('id', 'floatingFilterEndYear');
  formFilterEndYearInput.setAttribute('type', 'number');
  formFilterEndYearInput.setAttribute('min', 2004);
  formFilterEndYearInput.setAttribute('max', new Date().getFullYear() + 4); // по текущий год + 4
  formFilterEndYearInput.setAttribute('placeholder', 'Год окончания обучения');
  formFilterEndYearLabel.setAttribute('for', 'floatingFilterEndYear');
  formFilterBtnApplyFilter.setAttribute('id', 'filter-filter-btn');
  formFilterBtnApplyFilter.setAttribute('type', 'submit');
  formFilterBtnClear.setAttribute('id', 'filter-clear-btn');
  formFilterBtnClear.setAttribute('type', 'button');

  filterCollapseBtnShowHide.textContent = 'Форма фильтрации студентов';
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
  const deselectBodyRowsBtn = document.createElement('button');
  const deleteBodyRowsBtn = document.createElement('button');

  table.classList.add(
    'dboard__table',
    'table',
    'table-bordered',
    'table-hover'
  );
  tableHead.classList.add('dboard__table-head');
  tableBody.classList.add(
    'dboard__table-body',
    'table-group-divider',
    'border-top-color'
  );
  tableHeaderThTag.classList.add('dboard__table-head-cell');
  tableHeadThFIO.classList.add('dboard__table-head-cell');
  tableHeadThFaculty.classList.add('dboard__table-head-cell');
  tableHeadThBirthDate.classList.add('dboard__table-head-cell');
  tableHeadThStartYear.classList.add('dboard__table-head-cell');
  afterTableLinksWrap.classList.add(
    'dboard__table-after-wrap',
    'd-inline-flex',
    'flex-wrap',
    'gap-3'
  );
  linkToAddStudForm.classList.add(
    'dboard__table-after-link',
    'btn',
    'btn-outline-secondary'
  );
  deselectBodyRowsBtn.classList.add(
    'dboard__table-after-btn',
    'btn',
    'btn-outline-secondary',
    'cancel-btn'
  );
  deleteBodyRowsBtn.classList.add(
    'dboard__table-after-btn',
    'btn',
    'btn-outline-danger',
    'delete-btn'
  );

  tableHeaderThTag.setAttribute('id', 'tableThTag');
  tableHeaderThTag.setAttribute('tabindex', '0');
  tableHeadThFIO.setAttribute('id', 'tableThFIO');
  tableHeadThFIO.setAttribute('tabindex', '0');
  tableHeadThFaculty.setAttribute('id', 'tableThFaculty');
  tableHeadThFaculty.setAttribute('tabindex', '0');
  tableHeadThBirthDate.setAttribute('id', 'tableThBirthDate');
  tableHeadThBirthDate.setAttribute('tabindex', '0');
  tableHeadThStartYear.setAttribute('id', 'tableThStartYear');
  tableHeadThStartYear.setAttribute('tabindex', '0');
  linkToAddStudForm.setAttribute('id', 'linkToAddStudForm');
  linkToAddStudForm.setAttribute('href', '#formInputCollapse');
  linkToAddStudForm.setAttribute('role', 'button');
  deselectBodyRowsBtn.setAttribute('id', 'deselectBtn');
  deselectBodyRowsBtn.setAttribute('type', 'button');
  deleteBodyRowsBtn.setAttribute('id', 'deleteBtn');
  deleteBodyRowsBtn.setAttribute('type', 'button');

  tableHeaderThTag.textContent = '#';
  tableHeadThFIO.textContent = 'Ф.И.О.';
  tableHeadThFaculty.textContent = 'Факультет';
  tableHeadThBirthDate.textContent = 'Дата рождения и возраст';
  tableHeadThStartYear.textContent = 'Годы обучения';
  linkToAddStudForm.textContent = 'Возврат';
  deselectBodyRowsBtn.textContent = 'Отмена';
  deleteBodyRowsBtn.textContent = 'Удаление';

  tableHeadTr.append(
    tableHeaderThTag,
    tableHeadThFIO,
    tableHeadThFaculty,
    tableHeadThBirthDate,
    tableHeadThStartYear
  );
  tableHead.append(tableHeadTr);
  table.append(tableHead, tableBody);
  afterTableLinksWrap.append(
    linkToAddStudForm,
    deselectBodyRowsBtn,
    deleteBodyRowsBtn
  );
  dboardOutput.append(table, afterTableLinksWrap);

  // основные блоки/составляющие панели управления
  dashboard.append(dboardInput, dboardFilter, dboardOutput);

  // ** преобразование строковой даты в объект Date
  function conversionStringDate(dateString) {
    return new Date(dateString); // возврат "полноценного" объекта Date
  }

  // ** корректировка исходного массива/серверного массива студентов (добавление свойства fullName, изменения/корректировки в/для birthDate и startYear)
  function correctInitArr(studentsServerData = []) {
    const newStudentsDataArr = structuredClone(studentsServerData); // клонирование входящего массива (локального, серверного)
    const todayDate = new Date();
    const todayYear = todayDate.getFullYear();
    const todayMonth = todayDate.getMonth(); // месяцы начинаются с 0 (нуля)

    for (const student of newStudentsDataArr) {
      student.fullName = `${student.surname} ${student.name} ${student.patronymic}`; // получение "общего" fullName

      // преобразование startYear в число, если нужно
      if (typeof student.startYear !== 'number') {
        student.startYear = parseInt(student.startYear, 10);
      }

      // преобразование birthDate в объект Date, если нужно
      if (typeof student.birthDate === 'string') {
        student.birthDate = conversionStringDate(student.birthDate);
      }

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

    studentTableTr.classList.add('dboard__table-body-row');
    studentTdNumber.classList.add('dboard__table-body-cell_number');

    studentTableTr.setAttribute('id', `body-row-${student.localId}`); // добавление строчного ID (исходя из локального ID студента (не серверного))
    studentTableTr.setAttribute('data-server-id', `${student.id}`); // добавление серверного ID
    studentTableTr.setAttribute('tabindex', '0');

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
  function createEmptyTableMessageRow(
    message = 'Пусто.. измените фильтрацию, добавьте студента!?'
  ) {
    const emptyTableTrRow = document.createElement('tr');
    const emptyTableTdCell = document.createElement('td');

    emptyTableTrRow.classList.add('dboard__table-body-empty-row');

    emptyTableTdCell.colSpan = 5; // объединение всех колонок
    emptyTableTdCell.textContent = message;
    emptyTableTrRow.append(emptyTableTdCell);

    return emptyTableTrRow;
  }

  // ** создание строки с индикатором загрузки (спиннера.. для улучшения UX при "просыпании" Render-сервера)
  function createLoadingSpinnerRow() {
    const loadingTableTrRow = document.createElement('tr');
    const loadingTableTdCell = document.createElement('td');

    loadingTableTrRow.classList.add('dboard__table-body-loading-row');

    loadingTableTdCell.colSpan = 5; // объединение всех колонок
    loadingTableTdCell.innerHTML = `
      <div class="spinner-wrap">
      <div class="spinner"></div>
      <span class="spinner-text">Идёт загрузка данных.. подождите! 10.. 30.. 50 секунд!</span>
      </div>
      `;
    loadingTableTdCell.style.textAlign = 'center';
    loadingTableTrRow.append(loadingTableTdCell);

    return loadingTableTrRow;
  }

  // TODO: что бы перейти на "полностью" [СЕРВЕРНУЮ] логику/обратно.. нужно пошагово просмотреть весь файл и раскомментировать закомментированный код, при этом комментируя/удаляя код/строки помеченные, как [FOR DEMO - sessionStorage] в полном объёме (т.е. некоторые инициализации переменных, доп. функций проводились каждой логике свои)

  // ** [СЕРВЕР] организация запроса, получение данных/списка студентов с сервера (корректировка входящих данных)
  // ?? следует раскомментировать (полностью)
  // let studentsDataArrWithIds;

  //   async function getStudentsServerListData() {
  //     try {
  //       const response = await fetch('http://localhost:3000/api/students'); // запрос на сервер
  //
  //       // проверка успешности/выполнения запроса
  //       if (!response.ok) {
  //         throw new Error(`Ошибка: ${response.status}!`);
  //       }
  //
  //       const data = await response.json(); // преобразование данных в JSON-формат
  //       studentsDataArrWithIds = addLocalIdsToStudents(data); // добавление недостающего поля, как localId
  //
  //       addStudentsToTable(studentsDataArrWithIds); // отрисовка данных, наполнение таблицы студентов
  //     } catch (error) {
  //       console.error('Не удалось загрузить список студентов..', error);
  //       alert('Ошибка при загрузке данных с сервера!');
  //       tableBody.append(
  //         createEmptyTableMessageRow(
  //           'Нет данных! Запустите/перезапустите сервер!'
  //         )
  //       ); // если ошибка, вывод/добавление строки-сообщения
  //     }
  //   }
  //
  //   // добавление недостающего поля в объекты студентов, т.е. поля localId (необходимого, для дальнейших отработок)
  //   function addLocalIdsToStudents(studentsFromServer) {
  //     return studentsFromServer.map((student, index) => ({
  //       ...student, // сохранение приходящих/серверных полей
  //       localId: index + 1, // добавление localId
  //     }));
  //   }
  //
  //   getStudentsServerListData(); // получение данных

  // !! [FOR DEMO - sessionStorage] фиксация исходных данных/серверных данных, для сохранения в sessionStorage
  let studentsDataArrWithIds;
  let updateStudentsDataArr;
  let studentsServerDataArr = []; // потом/будет использоваться для генерации storage ID

  async function addStudentsDataToStorage() {
    try {
      const tableBody = document.querySelector('.dboard__table-body'); // фиксация тела таблицы
      const spinnerRow = createLoadingSpinnerRow(); // создание спиннера
      tableBody.append(spinnerRow); // добавление в таблицу

      console.log('Ждём ответ от Render-сервера..');

      // await new Promise((resolve) => setTimeout(resolve, 5000)); // искусственная задержка.. имитация "просыпания" Render-сервера

      // const response = await fetch('http://localhost:3000/api/students'); // запрос на локальный сервер (так было, перед Render логикой, т.е. данные обновлялись от туда, т.е. работа с sessionStorage.. но при обновлении, получение данных с локального сервера)

      // ! Запрос на RENDER-сервер (а не на локальный, согласно маршрута.. ВНИМАНИЕ)
      const response = await fetch(
        'https://students-dashboard-crm.onrender.com/api/students'
      );

      // удаление спиннера после получения ответа/подгрузки студентов
      spinnerRow.remove();

      // проверка успешности/выполнения запроса
      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}!`);
      }

      console.log('Ответ получен! Данные должны быть отображены!');

      const data = await response.json(); // преобразование данных в JSON-формат
      sessionStorage.setItem('demoStudents', JSON.stringify(data)); // добавление/сохранение в Session storage

      studentsServerDataArr = data; // "дополнительно" фиксируем входящий серверный массив

      return data; // возврат массива данных
    } catch (error) {
      console.error('Ошибка загрузки списка студентов с сервера!', error);

      // удаление спиннера, если запрос завершился ошибкой
      document.querySelector('.dboard__table-body-loading-row')?.remove();

      return []; //  если ошибка, возврат "пустого" массива
    }
  }

  // !! [FOR DEMO - sessionStorage] получение данных/списка из Session storage (корректировка входящих данных)
  async function getStudentsListDataFromStorage() {
    let savedStudents = await addStudentsDataToStorage(); // получение данных из Session storage

    // обновление Session storage
    sessionStorage.setItem('demoStudents', JSON.stringify(savedStudents));

    // корректировка данных (добавление поля localId)
    studentsDataArrWithIds = savedStudents || [];
    updateStudentsDataArr = addLocalIdsToStudents(studentsDataArrWithIds);

    if (updateStudentsDataArr.length > 0) {
      addStudentsToTable(updateStudentsDataArr); // отрисовка данных, наполнение таблицы студентов
    } else {
      tableBody.append(
        createEmptyTableMessageRow(
          'Нет данных! Запустите/перезапустите сервер!'
        )
      ); // если ошибка, вывод/добавление строки-сообщения
    }
  }

  // !! [FOR DEMO - sessionStorage] добавление поля localId (необходимого/возможно, для дальнейших отработок)
  function addLocalIdsToStudents(studentsFromServer) {
    return studentsFromServer.map((student, index) => ({
      ...student, // сохранение приходящих/серверных полей
      localId: index + 1, // добавление localId
    }));
  }

  // !! [FOR DEMO - sessionStorage]
  getStudentsListDataFromStorage(); // получение данных о клиентах (из Session storage)

  // ** наполнение таблицы данных о студентах (согласно откорректированного исходного, далее формирующегося массива)
  // ?? следует раскомментировать
  // let updateStudentsDataArr;

  function addStudentsToTable(studentsServerData = []) {
    const selectedBodyRows = getSelectedBodyRows(); // сохранение выделенных body-строк (если такие есть)

    tableBody.innerHTML = ''; // предварительная очистка таблицы
    updateStudentsDataArr = correctInitArr(studentsServerData);

    if (updateStudentsDataArr.length === 0) {
      const emptyTableRow = createEmptyTableMessageRow(); // если массив студентов/таблица данных пуста, вывод сообщения
      tableBody.append(emptyTableRow);
    } else {
      for (const [index, student] of updateStudentsDataArr.entries()) {
        const studentTableTrRow = createStudentTableTrRow(index, student);
        tableBody.append(studentTableTrRow);
      }
    }

    addClickListenersToBodyRows(); // добавление прослушки для всех строк (кроме заглавной), при компоновке, после пере-компоновки (новой отрисовки), для возможности выделения по клику
    restoreSelectedBodyRows(selectedBodyRows); // восстановление выделенных body-строк (если такие были)
  }

  // ** выделение (фиксация выделенных) элементов/строк таблицы данных о студентах (при клике, ввод "Х" кнопки)
  // организация прослушки, для body-строк (для всех)
  function addClickListenersToBodyRows() {
    const allBodyRows = document.querySelectorAll('.dboard__table-body-row');

    allBodyRows.forEach((row) => {
      row.addEventListener('click', (event) => {
        selectTableBodyRow(event);
      });

      // возможность выделения и через TAB/Enter
      row.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          selectTableBodyRow(event);
        }
      });
    });
  }

  // определение целевой body-строки (замена #-числа на "X" кнопку, и обратно)
  function selectTableBodyRow(event) {
    const clickedTableRow = event.currentTarget; // определение строки, по которой происходит "click" - событие

    if (!clickedTableRow) {
      return;
    }

    clickedTableRow.classList.toggle('dboard__table-body-row_selected');

    if (clickedTableRow.classList.contains('dboard__table-body-row_selected')) {
      addXBtnToBodyRows(clickedTableRow); // добавление "X" кнопки в выделенную строку
    } else {
      removeXBtnFromBodyRows(clickedTableRow); // удаление "X" кнопки из выделенной строки

      if (clickedTableRow && clickedTableRow.parentNode) {
        const rowIndex = Array.from(
          clickedTableRow.parentNode.children
        ).indexOf(clickedTableRow); // определение индекса строки
        updateBodyRowNumbers(clickedTableRow, rowIndex); // обновление порядкового #-номера (для текущей строки, согласно индекса)
      }
    }
  }

  // сохранение "уже" выделенных строк
  function getSelectedBodyRows() {
    const selectedBodyRows = {
      ids: [],
      serverIds: [],
    };

    document
      .querySelectorAll('.dboard__table-body-row_selected')
      .forEach((row) => {
        selectedBodyRows.ids.push(row.getAttribute('id')); // фиксация и ID
        selectedBodyRows.serverIds.push(row.getAttribute('data-server-id')); // фиксация и serverId
      });

    return selectedBodyRows; // возврат объекта с ID и serverId
  }

  // восстановление ранее выделенных строк (если были)
  function restoreSelectedBodyRows(selectedBodyRows) {
    const allBodyRows = document.querySelectorAll('.dboard__table-body-row');

    allBodyRows.forEach((row) => {
      const rowServerId = row.getAttribute('data-server-id'); // выборка только serverId

      if (selectedBodyRows.serverIds.includes(rowServerId)) {
        row.classList.add('dboard__table-body-row_selected');
        addXBtnToBodyRows(row); // последующее добавление "X" кнопки в выделенную строку
      }
    });
  }

  // ** обновление/добавление заново, порядковых #-номеров (в первые body-ячейки)
  function updateBodyRowNumbers(row, index) {
    const firstRowCell = row.querySelector('td:first-child');
    firstRowCell.textContent = index + 1;
  }

  // ** создание "X" кнопки (её передача)
  function createXBtn() {
    const deleteXBtn = document.createElement('button');

    deleteXBtn.classList.add('btn-close');
    deleteXBtn.classList.add('x-delete-btn');
    deleteXBtn.setAttribute('id', 'xBtn');
    deleteXBtn.setAttribute('type', 'button');
    deleteXBtn.setAttribute('aria-label', 'Close');

    return deleteXBtn;
  }

  // ** добавление "X" кнопки в выделенную строку/в первую ячейку (определение первой ячейки)
  function addXBtnToBodyRows(row) {
    const firstRowCell = row.querySelector('td:first-child'); // определение первой "#" ячейки строки
    const deleteXBtn = createXBtn(); // создание "X" кнопки

    firstRowCell.setAttribute('data-row-number', firstRowCell.textContent); // фиксация числа/порядкового номера из #-ячейки
    firstRowCell.textContent = ''; // очищение от числа #-ячейки
    firstRowCell.appendChild(deleteXBtn); // ввод "X" кнопки

    initTippy('#xBtn', 'удалить', 'left'); // вызов/организация tooltips для "X" кнопок

    deleteXBtn.addEventListener('click', (event) => {
      event.stopPropagation(); // исключение не предвиденных событий/поведения
      deleteBodyRowsByXBtn(event); // удаление выделенной body-строки (посредствам "X" кнопки)
    });

    // организация удаления body-строки и через TAB/Enter
    deleteXBtn.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        deleteBodyRowsByXBtn(event);
      }
    });
  }

  // ** удаление "X" кнопки (возврат числа/порядкового номера в #-ячейку)
  function removeXBtnFromBodyRows(row) {
    const firstRowCell = row.querySelector('td:first-child'); // определение первой "#" ячейки строки
    const deleteXBtn = firstRowCell.querySelector('.x-delete-btn'); // определение "X" кнопки

    if (deleteXBtn) {
      deleteXBtn.remove(); // удаление "X" кнопки
      firstRowCell.textContent = firstRowCell.getAttribute('data-row-number'); // восстановление числа/порядкового номера в #-ячейке
      firstRowCell.removeAttribute('data-row-number'); // удаление атрибута
    }
  }

  // ** дополнительная организация логики для tooltips (специально/только для появляющихся "X" кнопок)
  function initTippy(selector, content, side) {
    if (typeof tippy === 'function') {
      tippy(selector, {
        content: content,
        theme: 'main',
        delay: [50, 0],
        offset: [0, 12],
        placement: side,
        animation: 'scale', // анимация появления/скрытия (через дополнительный файл/подключение)
        trigger: 'mouseenter', // только по наведению мыши (исключение вывода по клику, в другом месте)

        onShow(instance) {
          setTimeout(() => {
            instance.hide(); // автоматическое скрытие (по истечению времени)
          }, 1000);
        },

        // точечная корректировка стилей (для "стрелки" подсказки)
        onMount(instance) {
          const arrowElement = instance.popper.querySelector('.tippy-arrow');
          arrowElement.style.marginTop = '0px';
          arrowElement.style.marginRight = '-1px';
        },
      });
    } else {
      console.error('Tippy.js is not loaded!');
    }
  }

  // ** отмена выделения элементов/строк таблицы данных о студентах (и через кнопку "Отмена")
  const cancelBtn = document.querySelector('.cancel-btn');

  function deselectBodyRows() {
    const allSelectedBodyRows = document.querySelectorAll(
      '.dboard__table-body-row_selected'
    );

    allSelectedBodyRows.forEach((row) => {
      row.classList.remove('dboard__table-body-row_selected');
      removeXBtnFromBodyRows(row); // удаление "X" кнопки из выделенной строки (возврат числа в #-ячейку)

      const rowIndex = Array.from(row.parentNode.children).indexOf(row); // определение индекса строки
      updateBodyRowNumbers(row, rowIndex); // обновление порядкового #-номера (для текущей строки, согласно индекса)
    });
  }

  cancelBtn.addEventListener('click', deselectBodyRows); // отработка функции по нажатию

  // ** [СЕРВЕР] организация удаления студентов с сервера (согласно серверных id)
  // ?? следует раскомментировать (полностью)
  //   async function deleteStudentFromServer(serverId) {
  //     try {
  //       const response = await fetch(
  //         `http://localhost:3000/api/students/${serverId}`,
  //         {
  //           method: 'DELETE',
  //         }
  //       );
  //
  //       if (!response.ok) {
  //         throw new Error(`Ошибка при удалении студента: ${response.status}`);
  //       }
  //
  //       await getStudentsServerListData(); // обновление списка студентов после удаления
  //     } catch (error) {
  //       console.error('Ошибка при удалении студента с сервера..', error);
  //       alert('Не удалось удалить студента с сервера!');
  //     }
  //   }

  // ** удаление выделенных элементов/строк таблицы данных о студентах (через "X" кнопку, не через "внешнюю")
  function deleteBodyRowsByXBtn(event) {
    const clickedBodyRow = event.currentTarget.closest('tr');
    const studentServerId = clickedBodyRow.getAttribute('data-server-id');

    deleteBodyRowsStudents(
      [studentServerId],
      `Вы уверены, что хотите удалить студента?`,
      event.currentTarget
    ); // вызов "общей" функции, для удаления студента/строки (передача соответствующих аргументов)
  }

  // ** удаление выделенных элементов/строк таблицы данных о студентах (через "внешнюю" кнопку, не через "X")
  const deleteBtn = document.querySelector('.delete-btn');

  function deleteBodyRowsByBtn() {
    const selectedBodyRows = getSelectedBodyRows(); // сохранение выделенных body-строк (если такие есть)

    if (selectedBodyRows.ids.length === 0) {
      alert('Ни одного студента не выбрано! Некого удалять..((');
      return;
    }

    // формирование серверного ID массива, студентов/строк (для последующего удаления)
    const studentServerIdsToDelete = selectedBodyRows.ids.map((rowId) => {
      const row = document.getElementById(rowId);
      return row.getAttribute('data-server-id'); // получение серверного ID из атрибута
    });

    deleteBodyRowsStudents(
      studentServerIdsToDelete,
      `Вы уверены, что хотите удалить ${selectedBodyRows.ids.length} студентов(а)?`
    ); // вызов "общей" функции, для удаления студента/строки (передача соответствующих аргументов)
  }

  deleteBtn.addEventListener('click', deleteBodyRowsByBtn);

  // ** удаление выделенных элементов/строк таблицы данных о студентах (ОБЩАЯ ЛОГИКА)
  function deleteBodyRowsStudents(
    studentServerIdsToDelete,
    confirmMessage = null,
    currentBtn = null
  ) {
    if (confirmMessage) {
      const confirmed = confirm(confirmMessage);

      if (!confirmed) {
        if (currentBtn) {
          currentBtn.blur(); // снятие фокуса с "X" кнопки, при отмене действия
        }
        return;
      }
    }

    // ?? следует раскомментировать
    // studentServerIdsToDelete.forEach(async (serverId) => {
    //   await deleteStudentFromServer(serverId); // удаление студентов с сервера по серверным ID
    // });

    studentServerIdsToDelete.forEach((serverId) => {
      const studentIndex = updateStudentsDataArr.findIndex(
        (student) => student.id === serverId
      );

      if (studentIndex !== -1) {
        updateStudentsDataArr.splice(studentIndex, 1);
      }
    });

    // изменение/корректировка локальных ID оставшихся студентов (для корректной сортировки после добавления "новых" студентов)
    updateStudentsDataArr.forEach((student, index) => {
      student.localId = index + 1;
    });

    // !! [FOR DEMO - sessionStorage] ..одна строчка
    sessionStorage.setItem(
      'demoStudents',
      JSON.stringify(updateStudentsDataArr)
    ); // обновление данных в Session storage

    addStudentsToTable(updateStudentsDataArr); // обновление таблицы студентов (пере-компоновка) после удаления
  }

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
        // только русские буквы и дефис (для двойных-фамилий), без цифр/символов и необоснованных пробелов
        if (
          /[^а-яА-ЯёЁ\s-]/.test(target.value) ||
          /\s{2,}/.test(target.value) ||
          /^\s|\s$/.test(target.value)
        ) {
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

  // !! [FOR DEMO - sessionStorage] генерация custom ID номеров для "новых" студентов (продолжение порядка.. до 99 потом нужно/будет корректировать)
  function generateStudentStorageId() {
    const orderPrefix = studentsServerDataArr.length; // фиксация длинны серверного массива (ранее/выше приходящего)

    // генерация случайных/дополнительных цифр для ID (т.е. генерация 5-ти цифр, если в массиве < 10 студентов, если больше.. то генерация 4-х цифр)
    const randomDigits =
      studentsServerDataArr.length < 10
        ? Math.floor(10000 + Math.random() * 90000) // 5 цифр
        : Math.floor(1000 + Math.random() * 9000); // 4 цифры

    return `${orderPrefix}${randomDigits}`; // возврат сформированного ID
  }

  // ** [СЕРВЕР] отправка данных/добавление "новых" студентов на сервер, получение обратно (проверка статуса)
  // ?? следует раскомментировать (полностью)
  //   async function addStudentsToServer(studentData) {
  //     try {
  //       const response = await fetch('http://localhost:3000/api/students', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify(studentData),
  //       });
  //
  //       if (!response.ok) {
  //         if (response.status === 422) {
  //           const errorData = await response.json();
  //           throw new Error(
  //             `Ошибка валидации: ${errorData.errors
  //               .map((e) => e.message)
  //               .join(', ')}`
  //           );
  //         } else {
  //           throw new Error(`Ошибка: ${response.status}`);
  //         }
  //       }
  //
  //       await getStudentsServerListData(); // обновление списка студентов (в контексте.. перерисовка таблицы)
  //     } catch (error) {
  //       console.error('Ошибка при добавлении студента..', error);
  //       alert('Ошибка при добавлении студента на сервер!');
  //     }
  //   }

  // !! [FOR DEMO - sessionStorage] добавление "новых" студентов/данных в Session storage (целая функция)
  function addNewStudentToStorage(newStudent) {
    if (!studentsDataArrWithIds) {
      studentsDataArrWithIds = []; // если что-то не так с массивом — создаём пустой
    }

    // Добавление в массив, следом в Session storage
    studentsDataArrWithIds.push(newStudent);
    sessionStorage.setItem(
      'demoStudents',
      JSON.stringify(studentsDataArrWithIds)
    );

    addStudentsToTable(studentsDataArrWithIds); // перерисовка таблицы
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
    updateStudentsDataArr
  ) {
    return updateStudentsDataArr.some(
      (student) =>
        student.surname === formInSurname &&
        student.name === formInName &&
        student.patronymic === formInPatronymic
    );
  }

  allFormInInputs.forEach((input) => {
    additionalFormInputsValidation(input); // дополнительная валидация (на корректный ввод)
  });

  // [СЕРВЕР]
  formInputData.addEventListener(
    'submit',
    async (event) => {
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
        const formInBirthDate = formInBirthDateInput.value;
        const formInStartYear = formInStartYearInput.value;
        const formInFaculty = formInFacultyInput.value.toLowerCase().trim();

        if (
          checkStudentFIO(
            formInSurname,
            formInName,
            formInPatronymic,
            updateStudentsDataArr
          )
        ) {
          const formInNotification = confirm(
            'Совпадение по Ф.И.О! Такой студент уже существует! Всё равно добавить?'
          );
          if (!formInNotification) {
            return; // т.е. не добавление студента (без очистки полей ввода, возможность что-то исправить)
          }
        }

        // ?? следует раскомментировать
        // const newStudent = {
        //   surname: formInSurname,
        //   name: formInName,
        //   patronymic: formInPatronymic,
        //   birthDate: formInBirthDate,
        //   startYear: formInStartYear,
        //   faculty: formInFaculty,
        // };

        // !! [FOR DEMO - sessionStorage] "расширенный" объект newStudent (т.к. нет серверных полей.. добавление самостоятельно)
        const newStudent = {
          id: generateStudentStorageId(), // генерация custom ID
          surname: formInSurname,
          name: formInName,
          patronymic: formInPatronymic,
          birthDate: formInBirthDate,
          startYear: formInStartYear,
          faculty: formInFaculty,
        };

        // ?? следует раскомментировать
        // await addStudentsToServer(newStudent); // добавление студента на сервер

        // !! [FOR DEMO - sessionStorage] временные изменения в/для Session storage (обновление/перерисовка таблицы ..ОДНА строчка)
        addNewStudentToStorage(newStudent); // добавление студента в Session storage

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
        td.style.fontWeight = 'bold';
        // td.style.color = '#e10c22'; // красный
        td.style.color = '#198754'; // или.. зелёный
      });

      // возврат к default цвету, через несколько секунды
      setTimeout(() => {
        lastNewTableRow.querySelectorAll('td').forEach((td, index) => {
          td.style.fontWeight = 'normal';
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
    updateStudentsDataArr = correctInitArr(studentsDataArrWithIds); // обновление исходного массива, перед фильтрацией

    // фиксация вводимых данных
    let searchFIO = formFilterFIOInput.value.trim().toLowerCase();
    let searchFaculty = formFilterFacultyInput.value.trim().toLowerCase();
    let searchStartYear = formFilterStartYearInput.value.trim();
    let searchEndYear = formFilterEndYearInput.value.trim();

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

    addStudentsToTable(updateStudentsDataArr); // пере-рисовка (пере-компоновка) таблицы студентов согласно фильтраций
    highlightStudentSearchMatches({
      searchFIO,
      searchFaculty,
      searchStartYear,
      searchEndYear,
    }); // выделение совпадений (передача контекста)
  }

  // отработка "дебаунс" задержки (если много данных, что бы снизить нагрузку)
  let debounceTimer;

  allFormFilterInputs.forEach((input) => {
    input.addEventListener('input', () => {
      clearTimeout(debounceTimer); // очистка предыдущей задержки
      debounceTimer = setTimeout(filterStudentsByFormInputs, 600); // применение фильтрации не сразу
    });
  });

  // ** организация выделения/подсветки совпадений в таблице (согласно вводимых данных в фильтрационные поля)
  function highlightStudentSearchMatches(searchValues) {
    const { searchFIO, searchFaculty, searchStartYear, searchEndYear } =
      searchValues; // получение необходимых элементов/значений (через деструктуризациию входящего/передаваемого объекта)

    const allRows = document.querySelectorAll('.dboard__table-body-row');

    allRows.forEach((row) => {
      // фиксация данных/ячеек с данными, для последующего сравнения (выделения в них совпадений)
      let fioCell = row.children[1]; // ФИО
      let facultyCell = row.children[2]; // факультет
      let studyYearsCell = row.children[4]; // годы обучения (год начала и окончания)

      // очистка предыдущих выделений (если были)
      fioCell.innerHTML = fioCell.textContent;
      facultyCell.innerHTML = facultyCell.textContent;
      studyYearsCell.innerHTML = studyYearsCell.textContent;

      // логика выделения/подсветки.. добавления background(a)
      function highlightMatch(cell, searchValue) {
        if (searchValue) {
          const regex = new RegExp(`(${searchValue})`, 'gi');
          cell.innerHTML = cell.textContent.replace(
            regex,
            // `<span style="padding: 1px 2px; color: #fff; background: #0d6efd;">$1</span>`
            `<span style="color: #fff; box-shadow: inset 2em 2em #0d6efd; outline: 1px solid #0d6efd;">$1</span>`
          );
        }
      }

      // инициализация выделений
      highlightMatch(fioCell, searchFIO);
      highlightMatch(facultyCell, searchFaculty);
      highlightMatch(studyYearsCell, searchStartYear);
      highlightMatch(studyYearsCell, searchEndYear);
    });
  }

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
        addStudentsToTable(studentsDataArrWithIds); // возврат к исходному наполнению/виду таблицы студентов
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
        let isFilterUsed = false; // флаг применения фильтрации (сразу.. нет)

        allFormFilterInputs.forEach((input) => {
          if (input.value.trim() !== '') {
            isFilterUsed = true; // была фильтрация
          }
          input.value = '';
          updateFormInputValidMsg(input);
        });
        formFilterData.classList.remove('was-validated');
        // исходя из флага, отработка разных массивов для отрисовки таблицы (что бы не сбрасывать сортировку, при закрытии формы)
        addStudentsToTable(
          isFilterUsed ? studentsDataArrWithIds : updateStudentsDataArr
        ); // возврат к исходному виду таблицы
      }, 100);
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
        return a.localId - b.localId;
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

    addStudentsToTable(updateStudentsDataArr); // пере-рисовка (пере-компоновка) после сортировки (прожатия ячеек)
  }

  allHeaderRowCells.forEach((cell) => {
    cell.addEventListener('click', (event) => {
      sortStudentsByTableCells(event); // передача события
      sortDirectionUpDown = !sortDirectionUpDown; // изменение условия сортировки
    });

    // отработка сортировки/сброса сортировки через TAB/Enter
    cell.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        sortStudentsByTableCells(event); // передача события
        sortDirectionUpDown = !sortDirectionUpDown; // изменение условия сортировки
      }
    });
  });
})();
