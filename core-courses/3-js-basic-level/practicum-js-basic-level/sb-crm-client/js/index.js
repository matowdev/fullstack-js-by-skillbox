(() => {
  // ** получение существующих, создание "новых" элементов (глобальное объявление)
  const crm = document.getElementById('crm');
  const crmSearch = document.getElementById('crm-search');
  const crmOutput = document.getElementById('crm-output');
  const crmAdd = document.getElementById('crm-add');
  const crmSearchContainer = document.querySelector('.crm__search-container');
  const crmOutputContainer = document.querySelector('.crm__output-container');
  const crmAddContainer = document.querySelector('.crm__add-container');

  // организация поля для поиска клиентов (фильтрация данных)
  const searchLogoWrap = document.createElement('div');
  const searchLogo = document.createElement('a');
  const searchLogoImg = document.createElement('img');
  const searchFormWrap = document.createElement('div');
  const searchForm = document.createElement('form');
  const searchInputWrap = document.createElement('div');
  const searchInput = document.createElement('input');
  const searchInputFeedback = document.createElement('div');

  searchLogoWrap.classList.add('crm__search-logo-wrap');
  searchLogo.classList.add('crm__search-logo');
  searchLogoImg.classList.add('crm__search-logo-img');
  searchFormWrap.classList.add('crm__search-form-wrap');
  searchForm.classList.add('crm__search-form', 'needs-validation');
  searchInputWrap.classList.add('crm__search-input-wrap');
  searchInput.classList.add('crm__search-input', 'form-control');
  searchInputFeedback.classList.add(
    'crm__search-input-feedback',
    'invalid-feedback'
  );

  searchInputFeedback.textContent =
    'Введён не корректный запрос.. исключите: английские буквы, цифры!';

  searchLogoImg.setAttribute('id', 'search-logo');
  searchLogoImg.setAttribute('src', 'images/skillbus-logo.svg');
  searchLogoImg.setAttribute('width', '50');
  searchLogoImg.setAttribute('height', '50');
  searchLogoImg.setAttribute('alt', 'Логотип: Skillbus');
  searchForm.setAttribute('id', 'search-form');
  searchForm.setAttribute('action', '#');
  searchForm.setAttribute('novalidate', '');
  searchInput.setAttribute('id', 'search-form-input');
  searchInput.setAttribute('type', 'text');
  searchInput.setAttribute('pattern', '[А-Яа-яЁё\\-]+');
  searchInput.setAttribute('placeholder', 'Введите запрос');
  searchInput.setAttribute('required', '');

  searchLogo.append(searchLogoImg);
  searchLogoWrap.append(searchLogo);
  searchInputWrap.append(searchInput, searchInputFeedback);
  searchForm.append(searchInputWrap);
  searchFormWrap.append(searchForm);
  crmSearchContainer.append(searchLogoWrap, searchFormWrap);

  // организация таблицы данных о клиентах (структура, заголовки колонок, иконки)
  const outputTitleWrap = document.createElement('div');
  const outputTitleHash = document.createElement('span');
  const outputTitle = document.createElement('h2');
  const outputTable = document.createElement('table');
  const outTableHead = document.createElement('thead');
  const outTableBody = document.createElement('tbody');
  const outTblHeadTr = document.createElement('tr');
  const outTblHeadThId = document.createElement('th');
  const outTblHeadThIdWrap = document.createElement('div');
  const outTblHeadThIdText = document.createElement('span');
  const outTblHeadThIdIcon = document.createElement('span');
  const outTblHeadThFIO = document.createElement('th');
  const outTblHeadThFIOWrap = document.createElement('div');
  const outTblHeadThFIOText = document.createElement('span');
  const outTblHeadThFIOIcon = document.createElement('span');
  const outTblHeadThFIOSort = document.createElement('span');
  const outTblHeadThCreationDT = document.createElement('th');
  const outTblHeadThDTWrap = document.createElement('div');
  const outTblHeadThDTText = document.createElement('span');
  const outTblHeadThDTIcon = document.createElement('span');
  const outTblHeadThChanges = document.createElement('th');
  const outTblHeadThChangeWrap = document.createElement('div');
  const outTblHeadThChangeText = document.createElement('span');
  const outTblHeadThChangeIcon = document.createElement('span');
  const outTblHeadThContacts = document.createElement('th');
  const outTblHeadThContactWrap = document.createElement('div');
  const outTblHeadThContactText = document.createElement('span');
  const outTblHeadThActions = document.createElement('th');
  const outTblHeadThActionWrap = document.createElement('div');
  const outTblHeadThActionText = document.createElement('span');

  outputTitleWrap.classList.add('crm__output-title-wrap');
  outputTitleHash.classList.add('crm__output-title-hash');
  outputTitle.classList.add('crm__output-title');
  outputTable.classList.add('crm__output-table', 'table', 'table-hover');
  outTableHead.classList.add('crm__output-table-head');
  outTableBody.classList.add('crm__output-table-body');
  outTblHeadTr.classList.add('crm__o-table-head-row');
  outTblHeadThId.classList.add(
    'head-cell',
    'head-cell-with-icon',
    'crm__o-table-head-cell'
  );
  outTblHeadThIdWrap.classList.add('head-cell__wrap', 'head-cell__wrap-id');
  outTblHeadThIdText.classList.add('head-cell__text', 'head-cell__text-id');
  outTblHeadThIdIcon.classList.add(
    'head-cell__icon',
    'head-cell__icon-id',
    'head-cell__icon-up'
  );
  outTblHeadThFIO.classList.add(
    'head-cell',
    'head-cell-with-icon',
    'crm__o-table-head-cell'
  );
  outTblHeadThFIOWrap.classList.add('head-cell__wrap', 'head-cell__wrap-fio');
  outTblHeadThFIOText.classList.add('head-cell__text', 'head-cell__text-fio');
  outTblHeadThFIOIcon.classList.add(
    'head-cell__icon',
    'head-cell__icon-fio',
    'head-cell__icon-down'
  );
  outTblHeadThFIOSort.classList.add('head-cell__sort', 'head-cell__sort-fio');
  outTblHeadThCreationDT.classList.add(
    'head-cell',
    'head-cell-with-icon',
    'crm__o-table-head-cell'
  );
  outTblHeadThDTWrap.classList.add('head-cell__wrap', 'head-cell__wrap-dt');
  outTblHeadThDTText.classList.add('head-cell__text', 'head-cell__text-dt');
  outTblHeadThDTIcon.classList.add(
    'head-cell__icon',
    'head-cell__icon-dt',
    'head-cell__icon-down'
  );
  outTblHeadThChanges.classList.add(
    'head-cell',
    'head-cell-with-icon',
    'crm__o-table-head-cell'
  );
  outTblHeadThChangeWrap.classList.add(
    'head-cell__wrap',
    'head-cell__wrap-change'
  );
  outTblHeadThChangeText.classList.add(
    'head-cell__text',
    'head-cell__text-change'
  );
  outTblHeadThChangeIcon.classList.add(
    'head-cell__icon',
    'head-cell__icon-change',
    'head-cell__icon-down'
  );
  outTblHeadThContacts.classList.add('head-cell', 'crm__o-table-head-cell');
  outTblHeadThContactWrap.classList.add(
    'head-cell__wrap',
    'head-cell__wrap-contact'
  );
  outTblHeadThContactText.classList.add(
    'head-cell__text',
    'head-cell__text-contact'
  );
  outTblHeadThActions.classList.add('head-cell', 'crm__o-table-head-cell');
  outTblHeadThActionWrap.classList.add(
    'head-cell__wrap',
    'head-cell__wrap-action'
  );
  outTblHeadThActionText.classList.add(
    'head-cell__text',
    'head-cell__text-action'
  );

  outputTitleHash.setAttribute('id', 'hash-tag-title');
  outputTitleHash.setAttribute('tabindex', '0');
  outTblHeadThId.setAttribute('id', 'table-th-id');
  outTblHeadThId.setAttribute('tabindex', '0');
  outTblHeadThFIO.setAttribute('id', 'table-th-fio');
  outTblHeadThFIO.setAttribute('tabindex', '0');
  outTblHeadThCreationDT.setAttribute('id', 'table-th-dt');
  outTblHeadThCreationDT.setAttribute('tabindex', '0');
  outTblHeadThChanges.setAttribute('id', 'table-th-change');
  outTblHeadThChanges.setAttribute('tabindex', '0');
  outTblHeadThContacts.setAttribute('id', 'table-th-contact');
  outTblHeadThContacts.setAttribute('tabindex', '0');
  outTblHeadThActions.setAttribute('id', 'table-th-action');
  outTblHeadThActions.setAttribute('tabindex', '0');

  outputTitleHash.textContent = '#';
  outputTitle.textContent = 'Клиенты';
  outTblHeadThIdText.textContent = 'ID';
  outTblHeadThFIOText.textContent = 'Фамилия Имя Отчество';
  outTblHeadThFIOSort.textContent = 'А-Я';
  outTblHeadThDTText.textContent = 'Дата и время создания';
  outTblHeadThChangeText.textContent = 'Последние изменения';
  outTblHeadThContactText.textContent = 'Контакты';
  outTblHeadThActionText.textContent = 'Действия';

  outputTitleWrap.append(outputTitleHash, outputTitle);
  outTblHeadThIdWrap.append(outTblHeadThIdText, outTblHeadThIdIcon);
  outTblHeadThFIOWrap.append(
    outTblHeadThFIOText,
    outTblHeadThFIOIcon,
    outTblHeadThFIOSort
  );
  outTblHeadThDTWrap.append(outTblHeadThDTText, outTblHeadThDTIcon);
  outTblHeadThChangeWrap.append(outTblHeadThChangeText, outTblHeadThChangeIcon);
  outTblHeadThContactWrap.append(outTblHeadThContactText);
  outTblHeadThActionWrap.append(outTblHeadThActionText);
  outTblHeadThId.append(outTblHeadThIdWrap);
  outTblHeadThFIO.append(outTblHeadThFIOWrap);
  outTblHeadThCreationDT.append(outTblHeadThDTWrap);
  outTblHeadThChanges.append(outTblHeadThChangeWrap);
  outTblHeadThContacts.append(outTblHeadThContactWrap);
  outTblHeadThActions.append(outTblHeadThActionWrap);
  outTblHeadTr.append(
    outTblHeadThId,
    outTblHeadThFIO,
    outTblHeadThCreationDT,
    outTblHeadThChanges,
    outTblHeadThContacts,
    outTblHeadThActions
  );
  outTableHead.append(outTblHeadTr);
  outputTable.append(outTableHead, outTableBody);
  crmOutputContainer.append(outputTitleWrap, outputTable);

  // организация кнопки/модального окна для добавления клиентов (удаления/изменения)
  const addBtnWrap = document.createElement('div');
  const addBtn = document.createElement('button');
  const addBtnDefaultIcon = document.createElement('span');
  const addBtnWhiteIcon = document.createElement('span');
  const addBtnGrayIcon = document.createElement('span');
  const addBtnText = document.createElement('span');
  const addModalWrap = document.createElement('div');
  const addModalDialog = document.createElement('div');
  const addModalContent = document.createElement('div');
  const addModalHeader = document.createElement('div');
  const addModalHeaderTitle = document.createElement('h1');
  const addModalHeaderXBtn = document.createElement('button');
  const addModalBody = document.createElement('div');
  const addModalBodyForm = document.createElement('form');
  const addModalBodySurnameInputWrap = document.createElement('div');
  const addModalBodySurnameInput = document.createElement('input');
  const addModalBodySurnameFeedback = document.createElement('div');
  const addModalBodyNameInputWrap = document.createElement('div');
  const addModalBodyNameInput = document.createElement('input');
  const addModalBodyNameFeedback = document.createElement('div');
  const addModalBodyPatronymicInputWrap = document.createElement('div');
  const addModalBodyPatronymicInput = document.createElement('input');
  const addModalBodyPatronymicFeedback = document.createElement('div');
  const addModalFooter = document.createElement('div');
  const addModalFooterAddBtnWrap = document.createElement('div');
  const addModalFooterAddBtn = document.createElement('button');
  const addModalFooterSaveBtn = document.createElement('button');
  const addModalFooterCancelBtn = document.createElement('button');

  addBtnWrap.classList.add('crm__add-btn-wrap');
  addBtn.classList.add('crm__add-btn');
  addBtnDefaultIcon.classList.add('crm__add-btn-icon', 'default-add-icon');
  addBtnWhiteIcon.classList.add('crm__add-btn-icon', 'white-add-icon');
  addBtnGrayIcon.classList.add('crm__add-btn-icon', 'gray-add-icon');
  addBtnText.classList.add('crm__add-btn-text');
  addModalWrap.classList.add('modal', 'crm__add-btn-modal', 'fade');
  addModalDialog.classList.add('modal__add-dialog', 'modal-dialog');
  addModalContent.classList.add('modal__add-content-wrap', 'modal-content');
  addModalHeader.classList.add('modal__add-header', 'modal-header');
  addModalHeaderTitle.classList.add('modal__add-header-title', 'modal-title');
  addModalHeaderXBtn.classList.add('modal__add-header-x-btn', 'btn-close');
  addModalBody.classList.add('modal__add-body', 'modal-body');
  addModalBodyForm.classList.add('modal__add-body-form', 'needs-validation');
  addModalBodySurnameInputWrap.classList.add(
    'modal__add-body-input-wrap',
    'add-surname-input-wrap'
  );
  addModalBodySurnameInput.classList.add(
    'modal__add-body-input',
    'add-surname-input',
    'form-control'
  );
  addModalBodySurnameFeedback.classList.add(
    'modal__add-body-input-feedback',
    'surname-input-feedback',
    'invalid-feedback'
  );
  addModalBodyNameInputWrap.classList.add(
    'modal__add-body-input-wrap',
    'add-name-input-wrap'
  );
  addModalBodyNameInput.classList.add(
    'modal__add-body-input',
    'add-name-input',
    'form-control'
  );
  addModalBodyNameFeedback.classList.add(
    'modal__add-body-input-feedback',
    'name-input-feedback',
    'invalid-feedback'
  );
  addModalBodyPatronymicInputWrap.classList.add(
    'modal__add-body-input-wrap',
    'add-patronymic-input-wrap'
  );
  addModalBodyPatronymicInput.classList.add(
    'modal__add-body-input',
    'add-patronymic-input',
    'form-control'
  );
  addModalBodyPatronymicFeedback.classList.add(
    'modal__add-body-input-feedback',
    'patronymic-input-feedback',
    'invalid-feedback'
  );
  addModalFooter.classList.add('modal__add-footer', 'modal-footer');
  addModalFooterAddBtnWrap.classList.add('modal__add-footer-add-btn-wrap');
  addModalFooterAddBtn.classList.add('modal__add-footer-add-btn');
  addModalFooterSaveBtn.classList.add('modal__add-footer-save-btn');
  addModalFooterCancelBtn.classList.add('modal__add-footer-cancel-btn');

  addBtn.setAttribute('id', 'add-btn');
  addBtn.setAttribute('type', 'button');
  addBtn.setAttribute('data-bs-toggle', 'modal');
  addBtn.setAttribute('data-bs-target', '#add-btn-modal');
  addModalWrap.setAttribute('id', 'add-btn-modal');
  addModalWrap.setAttribute('tabindex', '-1');
  addModalWrap.setAttribute('aria-hidden', 'true');
  addModalHeaderXBtn.setAttribute('type', 'button');
  addModalHeaderXBtn.setAttribute('data-bs-dismiss', 'modal');
  addModalHeaderXBtn.setAttribute('aria-label', 'Close');
  addModalBodyForm.setAttribute('id', 'add-modal-form');
  addModalBodyForm.setAttribute('action', '#');
  addModalBodyForm.setAttribute('novalidate', '');
  addModalBodySurnameInput.setAttribute('id', 'add-surname-input');
  addModalBodySurnameInput.setAttribute('type', 'text');
  addModalBodySurnameInput.setAttribute('pattern', '[А-Яа-яЁё\\-]+');
  addModalBodySurnameInput.setAttribute('placeholder', 'Фамилия');
  addModalBodySurnameInput.setAttribute('required', '');
  addModalBodyNameInput.setAttribute('id', 'add-name-input');
  addModalBodyNameInput.setAttribute('type', 'text');
  addModalBodyNameInput.setAttribute('pattern', '[А-Яа-яЁё\\-]+');
  addModalBodyNameInput.setAttribute('placeholder', 'Имя');
  addModalBodyNameInput.setAttribute('required', '');
  addModalBodyPatronymicInput.setAttribute('id', 'add-patronymic-input');
  addModalBodyPatronymicInput.setAttribute('type', 'text');
  addModalBodyPatronymicInput.setAttribute('pattern', '[А-Яа-яЁё\\-]+');
  addModalBodyPatronymicInput.setAttribute('placeholder', 'Отчество');
  addModalBodyPatronymicInput.setAttribute('required', '');
  addModalFooterAddBtn.setAttribute('id', 'add-modal-footer-add-btn');
  addModalFooterAddBtn.setAttribute('type', 'button');
  addModalFooterSaveBtn.setAttribute('id', 'add-modal-footer-save-btn');
  addModalFooterSaveBtn.setAttribute('type', 'button');
  addModalFooterCancelBtn.setAttribute('id', 'add-modal-footer-cancel-btn');
  addModalFooterCancelBtn.setAttribute('type', 'button');
  addModalFooterCancelBtn.setAttribute('data-bs-dismiss', 'modal');

  addBtnText.textContent = 'Добавить клиента';
  addModalHeaderTitle.textContent = 'Новый клиент';
  addModalBodySurnameFeedback.textContent =
    'Введены не корректные данные.. исключите: английские буквы, цифры!';
  addModalBodyNameFeedback.textContent =
    'Введены не корректные данные.. исключите: английские буквы, цифры!';
  addModalBodyPatronymicFeedback.textContent =
    'Введены не корректные данные.. исключите: английские буквы, цифры!';
  addModalFooterAddBtn.textContent = 'Добавить контакт';
  addModalFooterSaveBtn.textContent = 'Сохранить';
  addModalFooterCancelBtn.textContent = 'Отмена';

  addBtn.append(addBtnDefaultIcon, addBtnWhiteIcon, addBtnGrayIcon, addBtnText);
  addBtnWrap.append(addBtn);
  addModalHeader.append(addModalHeaderTitle, addModalHeaderXBtn);
  addModalBodySurnameInputWrap.append(
    addModalBodySurnameInput,
    addModalBodySurnameFeedback
  );
  addModalBodyNameInputWrap.append(
    addModalBodyNameInput,
    addModalBodyNameFeedback
  );
  addModalBodyPatronymicInputWrap.append(
    addModalBodyPatronymicInput,
    addModalBodyPatronymicFeedback
  );
  addModalBodyForm.append(
    addModalBodySurnameInputWrap,
    addModalBodyNameInputWrap,
    addModalBodyPatronymicInputWrap
  );
  addModalBody.append(addModalBodyForm);
  addModalFooterAddBtnWrap.append(addModalFooterAddBtn);
  addModalFooter.append(
    addModalFooterAddBtnWrap,
    addModalFooterSaveBtn,
    addModalFooterCancelBtn
  );
  addModalContent.append(addModalHeader, addModalBody, addModalFooter);
  addModalDialog.append(addModalContent);
  addModalWrap.append(addModalDialog);
  crmAddContainer.append(addBtnWrap, addModalWrap);

  // основные блоки/составляющие элементы приложения
  crm.append(crmSearch, crmOutput, crmAdd);

  // ** организация появления/скрытия поля для ввода данных/фильтрационного инпута (по нажатию на logo, на 320px)
  document
    .querySelector('.crm__search-logo-img')
    .addEventListener('click', () => {
      document
        .querySelector('.crm__search-data')
        .classList.toggle('show-search-input');
    });

  // ** организация валидации для ввода данных/фильтрационного инпута (для формы без submit)
  function searchFormInputValidation(input) {
    input.addEventListener('input', (event) => {
      const target = event.target;
      const targetParentNode = target.parentNode;
      const invalidFeed = targetParentNode.querySelector('.invalid-feedback');

      // принудительное исключение пробелов (в начале поля для ввода)
      target.value = target.value.replace(/^\s+/, '');

      // только русские буквы (без цифр/символов), "один" дефис (для двойных фамилий) и без необоснованных пробелов
      if (
        /[^а-яА-ЯёЁ\s-]/.test(target.value) ||
        (target.value.match(/-/g) || []).length > 1 ||
        /\s{2,}/.test(target.value)
      ) {
        target.classList.add('is-invalid');

        if (/[^а-яА-ЯёЁ\s-]/.test(target.value)) {
          invalidFeed.textContent =
            'Некорректный ввод! Измените раскладку клавиатуры и/или исключите цифры/знаки!';
        } else if ((target.value.match(/-/g) || []).length > 1) {
          invalidFeed.textContent = 'Некорректный ввод! Только ОДИН дефис!';
        } else {
          invalidFeed.textContent =
            'Некорректный ввод! Только ОДИН пробел между словами!';
        }
      } else {
        target.classList.remove('is-invalid');
        invalidFeed.textContent = ''; // очистка сообщения об ошибке
      }
    });
  }

  const searchFormMainInput = document.querySelector('.crm__search-form input'); // получение search-инпута
  searchFormInputValidation(searchFormMainInput);

  // ** изменение направления стрелки/svg-icon, согласно прожатия по заглавной ячейке (при сортировке данных)
  const allHeaderRowCells = document.querySelectorAll(
    '.crm__o-table-head-cell'
  );

  function changeIconDirection(event) {
    const headerRowCell = event.currentTarget; // фиксация всей/целиком "th" заглавной ячейки
    const cellIcon = headerRowCell.querySelector('.head-cell__icon'); // определение иконки внутри ячейки
    const cellSort = headerRowCell.querySelector('.head-cell__sort'); // определение доп. текста, типа "А-Я"

    // проверка/подтверждение наличия иконки (переключение)
    if (cellIcon) {
      cellIcon.classList.toggle('head-cell__icon-up');
      cellIcon.classList.toggle('head-cell__icon-down');
    }

    // проверка/подтверждение наличия доп. текста (замена)
    if (cellSort) {
      cellSort.textContent = cellSort.textContent === 'А-Я' ? 'Я-А' : 'А-Я';
    }
  }

  // организация прослушек "для каждой" заглавной ячейки
  allHeaderRowCells.forEach((cell) => {
    cell.addEventListener('click', (event) => changeIconDirection(event)); // передача события

    // отработка сортировки/сброса сортировки через TAB/Enter (изменение направления стелок)
    cell.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        changeIconDirection(event); // передача события
      }
    });
  });

  // ** организация валидации для ввода данных/в модальном окне (при добавлении нового/клиента)
  function addModalFormInputValidation(inputs) {
    inputs.forEach((input) =>
      input.addEventListener('input', (event) => {
        const target = event.target;
        const targetParentNode = target.parentNode;
        const invalidFeed = targetParentNode.querySelector('.invalid-feedback');

        // принудительное исключение пробелов (в начале поля для ввода)
        target.value = target.value.replace(/^\s+/, '');

        // только русские буквы (без цифр/символов), "один" дефис (для двойных фамилий) и без необоснованных пробелов
        if (
          /[^а-яА-ЯёЁ\s-]/.test(target.value) ||
          (target.value.match(/-/g) || []).length > 1 ||
          /\s{2,}/.test(target.value)
        ) {
          target.classList.add('is-invalid');

          if (/[^а-яА-ЯёЁ\s-]/.test(target.value)) {
            invalidFeed.textContent =
              'Некорректный ввод! Измените раскладку клавиатуры и/или исключите цифры/знаки!';
          } else if ((target.value.match(/-/g) || []).length > 1) {
            invalidFeed.textContent = 'Некорректный ввод! Только ОДИН дефис!';
          } else {
            invalidFeed.textContent =
              'Некорректный ввод! Только ОДИН пробел между словами!';
          }
        } else {
          target.classList.remove('is-invalid');
          invalidFeed.textContent = ''; // очистка сообщения об ошибке
        }
      })
    );
  }

  const allAddModalFormInputs = document.querySelectorAll(
    '.modal__add-body-input'
  ); // получение всех модальных-инпутов
  addModalFormInputValidation(allAddModalFormInputs);
})();
