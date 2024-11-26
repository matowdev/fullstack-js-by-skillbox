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
  outTblHeadTr.classList.add('crm__output-table-head-row');
  outTblHeadThId.classList.add(
    'head-cell',
    'head-cell-with-icon',
    'crm__output-table-head-cell'
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
    'crm__output-table-head-cell'
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
    'crm__output-table-head-cell'
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
    'crm__output-table-head-cell'
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
  outTblHeadThContacts.classList.add(
    'head-cell',
    'crm__output-table-head-cell'
  );
  outTblHeadThContactWrap.classList.add(
    'head-cell__wrap',
    'head-cell__wrap-contact'
  );
  outTblHeadThContactText.classList.add(
    'head-cell__text',
    'head-cell__text-contact'
  );
  outTblHeadThActions.classList.add('head-cell', 'crm__output-table-head-cell');
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
  outputTable.setAttribute('aria-label', 'Таблица данных о клиентах');
  outTblHeadThId.setAttribute('id', 'table-th-id');
  outTblHeadThId.setAttribute('tabindex', '0');
  outTblHeadThId.setAttribute('scope', 'col');
  outTblHeadThFIO.setAttribute('id', 'table-th-fio');
  outTblHeadThFIO.setAttribute('tabindex', '0');
  outTblHeadThFIO.setAttribute('scope', 'col');
  outTblHeadThCreationDT.setAttribute('id', 'table-th-dt');
  outTblHeadThCreationDT.setAttribute('tabindex', '0');
  outTblHeadThCreationDT.setAttribute('scope', 'col');
  outTblHeadThChanges.setAttribute('id', 'table-th-change');
  outTblHeadThChanges.setAttribute('tabindex', '0');
  outTblHeadThChanges.setAttribute('scope', 'col');
  outTblHeadThContacts.setAttribute('id', 'table-th-contact');
  outTblHeadThContacts.setAttribute('tabindex', '0');
  outTblHeadThContacts.setAttribute('scope', 'col');
  outTblHeadThActions.setAttribute('id', 'table-th-action');
  outTblHeadThActions.setAttribute('tabindex', '0');
  outTblHeadThActions.setAttribute('scope', 'col');

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
  const addBtnIcon = document.createElement('i');
  const addModalWrap = document.createElement('div');
  const addModalDialog = document.createElement('div');
  const addModalContent = document.createElement('div');
  const addModalHeader = document.createElement('div');
  const addModalHeaderTitle = document.createElement('h1');
  const addModalHeaderXBtn = document.createElement('button');
  const addModalBody = document.createElement('div');
  const addModalBodyForm = document.createElement('form');
  const addModalBodyInputsWrap = document.createElement('div');
  const addModalBodySurnameInputWrap = document.createElement('div');
  const addModalBodySurnameInput = document.createElement('input');
  const addModalBodySurnameInputLabel = document.createElement('label');
  const addModalBodySurnameLabelSpan = document.createElement('span');
  const addModalBodySurnameFeedback = document.createElement('div');
  const addModalBodyNameInputWrap = document.createElement('div');
  const addModalBodyNameInput = document.createElement('input');
  const addModalBodyNameInputLabel = document.createElement('label');
  const addModalBodyNameInputLabelSpan = document.createElement('span');
  const addModalBodyNameFeedback = document.createElement('div');
  const addModalBodyPatronymicInputWrap = document.createElement('div');
  const addModalBodyPatronymicInput = document.createElement('input');
  const addModalBodyPatronymicInputLabel = document.createElement('label');
  const addModalBodyPatronymicFeedback = document.createElement('div');
  const addModalBodyAddContactsWrap = document.createElement('div');
  const addModalBodyAddContactsRowWrap = document.createElement('div');
  const addModalBodyAddBtn = document.createElement('button');
  const addModalBodyAddBtnIconStroke = document.createElement('i');
  const addModalBodyAddBtnIconFill = document.createElement('i');
  const addModalBodySaveBtn = document.createElement('button');
  const addModalFooter = document.createElement('div');
  const addModalFooterCancelBtn = document.createElement('button');

  addBtnWrap.classList.add('crm__add-btn-wrap');
  addBtn.classList.add('crm__add-btn');
  addBtnIcon.classList.add('crm__add-btn-icon', 'bi', 'bi-person-plus-fill');
  addModalWrap.classList.add('modal', 'crm__add-btn-modal', 'fade');
  addModalDialog.classList.add('modal__add-dialog', 'modal-dialog');
  addModalContent.classList.add('modal__add-content-wrap', 'modal-content');
  addModalHeader.classList.add('modal__add-header', 'modal-header');
  addModalHeaderTitle.classList.add('modal__add-header-title', 'modal-title');
  addModalHeaderXBtn.classList.add('modal__add-header-x-btn', 'btn-close');
  addModalBody.classList.add('modal__add-body', 'modal-body');
  addModalBodyForm.classList.add('modal__add-body-form', 'needs-validation');
  addModalBodyInputsWrap.classList.add('modal__add-body-inputs-wrap');
  addModalBodySurnameInputWrap.classList.add(
    'modal__add-body-input-wrap',
    'add-surname-input-wrap',
    'form-floating'
  );
  addModalBodySurnameInput.classList.add(
    'modal__add-body-input',
    'add-surname-input',
    'add-modal-input',
    'form-control'
  );
  addModalBodySurnameInputLabel.classList.add(
    'modal__add-body-input-label',
    'add-surname-input-labe'
  );
  addModalBodySurnameLabelSpan.classList.add(
    'modal__add-body-label-span',
    'add-surname-input-label-span'
  );
  addModalBodySurnameFeedback.classList.add(
    'modal__add-body-input-feedback',
    'surname-input-feedback',
    'invalid-feedback'
  );
  addModalBodyNameInputWrap.classList.add(
    'modal__add-body-input-wrap',
    'add-name-input-wrap',
    'form-floating'
  );
  addModalBodyNameInput.classList.add(
    'modal__add-body-input',
    'add-name-input',
    'add-modal-input',
    'form-control'
  );
  addModalBodyNameInputLabel.classList.add(
    'modal__add-body-input-label',
    'add-name-input-labe'
  );
  addModalBodyNameInputLabelSpan.classList.add(
    'modal__add-body-label-span',
    'add-name-input-label-span'
  );
  addModalBodyNameFeedback.classList.add(
    'modal__add-body-input-feedback',
    'name-input-feedback',
    'invalid-feedback'
  );
  addModalBodyPatronymicInputWrap.classList.add(
    'modal__add-body-input-wrap',
    'add-patronymic-input-wrap',
    'form-floating'
  );
  addModalBodyPatronymicInput.classList.add(
    'modal__add-body-input',
    'add-patronymic-input',
    'add-modal-input',
    'form-control'
  );
  addModalBodyPatronymicInputLabel.classList.add(
    'modal__add-body-input-label',
    'add-patronymic-input-labe'
  );
  addModalBodyPatronymicFeedback.classList.add(
    'modal__add-body-input-feedback',
    'patronymic-input-feedback',
    'invalid-feedback'
  );
  addModalBodyAddContactsWrap.classList.add(
    'modal__add-body-add-contacts-wrap'
  );
  addModalBodyAddContactsRowWrap.classList.add(
    'modal__add-body-add-contacts-row-wrap',
    'd-none'
  );
  addModalBodyAddBtn.classList.add('modal__add-body-add-btn', 'modal-btn');
  addModalBodyAddBtnIconStroke.classList.add(
    'modal__add-body-add-btn-icon',
    'bi',
    'bi-plus-circle',
    'plus-circle-stroke'
  );
  addModalBodyAddBtnIconFill.classList.add(
    'modal__add-body-add-btn-icon',
    'bi',
    'bi-plus-circle-fill',
    'plus-circle-fill'
  );
  addModalBodySaveBtn.classList.add('modal__add-body-save-btn', 'modal-btn');
  addModalFooter.classList.add('modal__add-footer', 'modal-footer');
  addModalFooterCancelBtn.classList.add(
    'modal__add-footer-cancel-btn',
    'modal-btn'
  );

  addBtn.setAttribute('id', 'add-btn');
  addBtn.setAttribute('type', 'button');
  addBtn.setAttribute('data-bs-toggle', 'modal');
  addBtn.setAttribute('data-bs-target', '#add-btn-modal');
  addModalWrap.setAttribute('id', 'add-btn-modal');
  addModalHeaderXBtn.setAttribute('type', 'button');
  addModalHeaderXBtn.setAttribute('data-bs-dismiss', 'modal');
  addModalHeaderXBtn.setAttribute('aria-label', 'Close');
  addModalBodyForm.setAttribute('id', 'add-modal-form');
  addModalBodyForm.setAttribute('action', '#');
  addModalBodyForm.setAttribute('novalidate', '');
  addModalBodySurnameInput.setAttribute('id', 'add-surname-floating-input');
  addModalBodySurnameInput.setAttribute('type', 'text');
  addModalBodySurnameInput.setAttribute('pattern', '[А-Яа-яЁё\\-]+');
  addModalBodySurnameInput.setAttribute('placeholder', 'Фамилия');
  addModalBodySurnameInput.setAttribute('required', '');
  addModalBodySurnameInputLabel.setAttribute(
    'for',
    'add-surname-floating-input'
  );
  addModalBodyNameInput.setAttribute('id', 'add-name-floating-input');
  addModalBodyNameInput.setAttribute('type', 'text');
  addModalBodyNameInput.setAttribute('pattern', '[А-Яа-яЁё\\-]+');
  addModalBodyNameInput.setAttribute('placeholder', 'Имя');
  addModalBodyNameInput.setAttribute('required', '');
  addModalBodyNameInputLabel.setAttribute('for', 'add-name-floating-input');
  addModalBodyPatronymicInput.setAttribute(
    'id',
    'add-patronymic-floating-input'
  );
  addModalBodyPatronymicInput.setAttribute('type', 'text');
  addModalBodyPatronymicInput.setAttribute('pattern', '[А-Яа-яЁё\\-]+');
  addModalBodyPatronymicInput.setAttribute('placeholder', 'Отчество');
  addModalBodyPatronymicInput.setAttribute('required', '');
  addModalBodyPatronymicInputLabel.setAttribute(
    'for',
    'add-patronymic-floating-input'
  );
  addModalBodyAddBtn.setAttribute('id', 'add-modal-body-add-btn');
  addModalBodyAddBtn.setAttribute('type', 'button');
  addModalBodySaveBtn.setAttribute('id', 'add-modal-body-save-btn');
  addModalBodySaveBtn.setAttribute('type', 'button');
  addModalFooterCancelBtn.setAttribute('id', 'add-modal-footer-cancel-btn');
  addModalFooterCancelBtn.setAttribute('type', 'button');
  addModalFooterCancelBtn.setAttribute('data-bs-dismiss', 'modal');

  addBtn.textContent = 'Добавить клиента';
  addModalHeaderTitle.textContent = 'Новый клиент';
  addModalBodySurnameInputLabel.textContent = 'Фамилия';
  addModalBodySurnameLabelSpan.textContent = '*';
  addModalBodySurnameFeedback.textContent =
    'Введены не корректные данные.. исключите: английские буквы, цифры!';
  addModalBodyNameInputLabel.textContent = 'Имя';
  addModalBodyNameInputLabelSpan.textContent = '*';
  addModalBodyNameFeedback.textContent =
    'Введены не корректные данные.. исключите: английские буквы, цифры!';
  addModalBodyPatronymicInputLabel.textContent = 'Отчество';
  addModalBodyPatronymicFeedback.textContent =
    'Введены не корректные данные.. исключите: английские буквы, цифры!';
  addModalBodyAddBtn.textContent = 'Добавить контакт';
  addModalBodySaveBtn.textContent = 'Сохранить';
  addModalFooterCancelBtn.textContent = 'Отмена';

  addBtn.append(addBtnIcon);
  addBtnWrap.append(addBtn);
  addModalHeader.append(addModalHeaderTitle, addModalHeaderXBtn);
  addModalBodySurnameInputLabel.append(addModalBodySurnameLabelSpan);
  addModalBodySurnameInputWrap.append(
    addModalBodySurnameInput,
    addModalBodySurnameInputLabel,
    addModalBodySurnameFeedback
  );
  addModalBodyNameInputLabel.append(addModalBodyNameInputLabelSpan);
  addModalBodyNameInputWrap.append(
    addModalBodyNameInput,
    addModalBodyNameInputLabel,
    addModalBodyNameFeedback
  );
  addModalBodyPatronymicInputWrap.append(
    addModalBodyPatronymicInput,
    addModalBodyPatronymicInputLabel,
    addModalBodyPatronymicFeedback
  );
  addModalBodyInputsWrap.append(
    addModalBodySurnameInputWrap,
    addModalBodyNameInputWrap,
    addModalBodyPatronymicInputWrap
  );
  addModalBodyAddBtn.append(
    addModalBodyAddBtnIconStroke,
    addModalBodyAddBtnIconFill
  );
  addModalBodyAddContactsWrap.append(
    addModalBodyAddContactsRowWrap,
    addModalBodyAddBtn
  );
  addModalBodyForm.append(
    addModalBodyInputsWrap,
    addModalBodyAddContactsWrap,
    addModalBodySaveBtn
  );
  addModalBody.append(addModalBodyForm);
  addModalFooter.append(addModalFooterCancelBtn);
  addModalContent.append(addModalHeader, addModalBody, addModalFooter);
  addModalDialog.append(addModalContent);
  addModalWrap.append(addModalDialog);
  crmAddContainer.append(addBtnWrap, addModalWrap);

  // основные блоки/составляющие элементы приложения
  crm.append(crmSearch, crmOutput, crmAdd);

  // ** появление/скрытие поля для ввода данных/фильтрационного инпута (по нажатию на logo, на 320px)
  searchLogoImg.addEventListener('click', () => {
    document
      .querySelector('.crm__search-data')
      .classList.toggle('show-search-input');
  });

  // ** организация "ОБЩЕЙ" логики для валидации полей ввода/инпутов (согласно передаваемых параметров)
  function addInputsValidation(inputs, options) {
    inputs.forEach((input) =>
      input.addEventListener('input', (event) => {
        const target = event.target;
        const targetParentNode = target.parentNode;
        const invalidFeed = targetParentNode.querySelector('.invalid-feedback');

        // принудительное исключение пробелов (в начале полей для ввода)
        target.value = target.value.replace(/^\s+/, '');

        // принудительное исключение дефисов (в начале полей для ввода)
        if (options.singleHyphen) {
          target.value = target.value.replace(/^-+/, '');
        }

        // принудительное удаление пробелов после дефисов (дефисов после пробелов)
        target.value = target.value.replace(/-\s+/g, '-');
        target.value = target.value.replace(/\s+-/g, '');

        // сбор ошибок/соответствующих сообщений
        const errors = [];

        // изначально проверка на поля ввода из "динамической" строки контактов
        if (options.dynamicContactValidation) {
          const hiddenInput = targetParentNode.querySelector(
            '.modal__add-body-add-hidden-input'
          );

          if (hiddenInput) {
            const contactType = hiddenInput.value;

            switch (contactType) {
              case 'phone':
              case 'extra-phone':
                // первичная проверка на "пустое" поле ввода (выход из проверки соответствия)
                if (target.value === '') {
                  invalidFeed.textContent = '';
                  target.classList.remove('is-invalid');
                  break;
                }

                // дополнительные/итоговая проверка вводимых данных (определённые условия для ввода)
                if (
                  target.value === '+' || // обязательно начало с "+"
                  /^\+\d{1,4}\s?$/.test(target.value) || // далее "+X" или "+XXXX " (где X - код страны, 1 – 4 цифры, после пробел)
                  /^\+\d{1,4} \(\d{0,4}\)?$/.test(target.value) || // дале скобки (...) 2 - 4 цифры, потом пробел
                  /^\+\d{1,4} \(\d{2,4}\) \d{0,3}$/.test(target.value) || // далее 3 - цифры телефона, дефис
                  /^\+\d{1,4} \(\d{2,4}\) \d{3}-\d{0,2}$/.test(target.value) || // 2 - цифры, дефис
                  /^\+\d{1,4} \(\d{2,4}\) \d{3}-\d{2}-\d{0,2}$/.test(
                    target.value
                  ) // в конце 2 - цифры
                ) {
                  invalidFeed.textContent = '';
                  target.classList.remove('is-invalid');
                  // момент с пробелами
                } else if (/\s{2,}/.test(target.value)) {
                  errors.push('Только ОДИН пробел (подряд)!');
                  target.classList.add('is-invalid');
                  invalidFeed.textContent = 'Только ОДИН пробел (подряд)!';
                } else if (
                  !/^\+\d{1,4} \(\d{2,4}\) \d{3}-\d{2}-\d{2}$/.test(
                    target.value
                  ) // итоговая проверка на вводимый формат
                ) {
                  errors.push('Допустимый формат: +X (XXX) XXX-XX-XX');
                  target.classList.add('is-invalid');
                  invalidFeed.textContent =
                    'Допустимый формат: +X (XXX) XXX-XX-XX';
                } else {
                  // если всё корректно (сообщений нет)
                  invalidFeed.textContent = '';
                  target.classList.remove('is-invalid');
                }
                break;

              case 'email':
                // первичная проверка на "пустое" поле ввода (выход из проверки соответствия)
                if (target.value === '') {
                  invalidFeed.textContent = '';
                  target.classList.remove('is-invalid');
                  break;
                }

                // исключение недопустимых символов (вообще)
                target.value = target.value.replace(
                  /[=+,!?%#$^&:{}()<>|"'*/\\]/g,
                  ''
                );

                // исключение несколько символов "@""
                if ((target.value.match(/@/g) || []).length > 1) {
                  errors.push(
                    'Почта не может содержать более одного символа "@"!'
                  );
                  target.classList.add('is-invalid');
                  invalidFeed.textContent =
                    'Почта не может содержать более одного символа "@"!';
                }

                // дополнительные/итоговая проверка вводимых данных (определённые условия для ввода)
                if (/[а-яА-ЯёЁ]/.test(target.value)) {
                  errors.push(
                    'Некорректный ввод! Измените раскладку клавиатуры!'
                  );
                  target.classList.add('is-invalid');
                  invalidFeed.textContent =
                    'Некорректный ввод! Измените раскладку клавиатуры!';
                }
                // исключение ввода точки, дефиса и подчёркивания (в начале строки)
                else if (/^[._-]/.test(target.value)) {
                  errors.push(
                    'Почта не может начинаться с точки, дефиса или подчёркивания!'
                  );
                  target.classList.add('is-invalid');
                  invalidFeed.textContent =
                    'Почта не может начинаться с точки, дефиса или подчёркивания!';
                } else if (!/@/.test(target.value)) {
                  invalidFeed.textContent = '';
                  target.classList.remove('is-invalid');
                }
                // исключение ввода ряда символов перед "@"
                else if (/[-_.]@/.test(target.value)) {
                  errors.push(
                    'Следующие символы ". - _" не могут стоять перед "@"!'
                  );
                  target.classList.add('is-invalid');
                  invalidFeed.textContent =
                    'Следующие символы ". - _" не могут стоять перед "@"!';
                }
                // корректировка возможного ввода после "@", в конце строки (ряд исключений)
                else if (
                  (/[._-]$/.test(target.value) && !/\.$/.test(target.value)) || // дефис и подчёркивание
                  /\d$/.test(target.value) || // цифры
                  (target.value.includes('@') &&
                    target.value.split('@')[1].split('.').length > 2) // исключение точки (второй после .com)
                ) {
                  errors.push(
                    'Некорректный ввод! Исключите цифры/символы, лишние точки!'
                  );
                  target.classList.add('is-invalid');
                  invalidFeed.textContent =
                    'Некорректный ввод! Исключите цифры/символы, лишние точки!';
                } else if (!/\.[a-zA-Z]{2,}$/.test(target.value)) {
                  invalidFeed.textContent = '';
                  target.classList.remove('is-invalid');
                }
                // исключение пробелов
                else if (/\s/.test(target.value)) {
                  errors.push('Пробелы в почте не допускаются!');
                  target.classList.add('is-invalid');
                  invalidFeed.textContent = 'Пробелы в почте не допускаются!';
                }
                // итоговая проверка на вводимый формат
                else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(target.value)) {
                  errors.push(
                    'Введите корректную почту, например: example_123@gmail.com'
                  );
                  target.classList.add('is-invalid');
                  invalidFeed.textContent =
                    'Введите корректную почту, например: example_123@gmail.com';
                }
                // если всё корректно (сообщений нет)
                else {
                  invalidFeed.textContent = '';
                  target.classList.remove('is-invalid');
                }
                break;

              case 'vk':
                // первичная проверка на "пустое" поле ввода (выход из проверки соответствия)
                if (target.value === '') {
                  invalidFeed.textContent = '';
                  target.classList.remove('is-invalid');
                  break;
                }

                // ряд проверок для вводимых данных (определённые условия для ввода)
                if (/\s/.test(target.value)) {
                  errors.push('Пробелы недопустимы!'); // исключение пробелов
                  target.classList.add('is-invalid');
                  invalidFeed.textContent = 'Пробелы недопустимы!';
                  // только английские буквы
                } else if (/[а-яА-ЯёЁ]/.test(target.value)) {
                  errors.push(
                    'Некорректный ввод! Измените раскладку клавиатуры!'
                  );
                  target.classList.add('is-invalid');
                  invalidFeed.textContent =
                    'Некорректный ввод! Измените раскладку клавиатуры!';
                }
                // ввод/начало только с "id"
                else if (target.value === 'i') {
                  invalidFeed.textContent = '';
                  target.classList.remove('is-invalid');
                } else if (
                  target.value.startsWith('i') &&
                  target.value[1] !== 'd'
                ) {
                  errors.push('Контакт Vk должен начинаться только с "id"!');
                  target.classList.add('is-invalid');
                  invalidFeed.textContent =
                    'Контакт Vk должен начинаться только с "id"!';
                }
                // ввод/начало не с "id" (если)
                else if (!/^id/.test(target.value)) {
                  errors.push(
                    'Контакт Vk должен начинаться только с "id", например: id12345! '
                  );
                  target.classList.add('is-invalid');
                  invalidFeed.textContent =
                    'Контакт Vk должен начинаться только с "id", например: id12345!';
                } else if (target.value === 'id') {
                  invalidFeed.textContent = '';
                  target.classList.remove('is-invalid');
                }
                // исключение ввода не цифр после "id"
                else if (!/^id\d+$/.test(target.value)) {
                  errors.push('После "id" должны быть только цифры!');
                  target.classList.add('is-invalid');
                  invalidFeed.textContent =
                    'После "id" должны быть только цифры!';
                }
                // если всё корректно (сообщений нет)
                else {
                  invalidFeed.textContent = '';
                  target.classList.remove('is-invalid');
                }
                break;

              case 'twitter':
                if (target.value === '') {
                  errors.length = 0;
                  break;
                }
                if (!/^@[a-zA-Z0-9_]+$/.test(target.value)) {
                  errors.push(
                    'Укажите корректное имя пользователя, например: @Im_123'
                  );
                }
                break;

              default:
                errors.push('Неизвестный тип контакта!');
                break;
            }
          }
        } else {
          if (options.allowOnlyRussian && /[^а-яА-ЯёЁ\s-]/.test(target.value)) {
            errors.push(
              'Некорректный ввод! Измените раскладку клавиатуры и/или исключите цифры/знаки!'
            );
          }

          if (options.singleHyphen) {
            // дополнительная проверка для двух инпутов (дефисы недопустимы)
            if (
              target.classList.contains('add-name-input') ||
              target.classList.contains('add-patronymic-input')
            ) {
              if (/-/.test(target.value)) {
                errors.push('Дефисы НЕдопустимы!');
              }
            } else {
              if ((target.value.match(/-/g) || []).length > 1) {
                const hyphenCount = target.value.match(/-/g).length;
                if (hyphenCount > 1) {
                  errors.push(
                    'Допускается только ОДИН дефис (для двойных-фамилий)!'
                  );
                }
              }
            }
          }

          // дополнительная проверка для "modal__add-body-input" (пробелы недопустимы)
          if (
            target.classList.contains('modal__add-body-input') &&
            /\s/.test(target.value)
          ) {
            errors.push('Пробелы НЕдопустимы!');
          } else if (options.noExtraSpaces && /\s{2,}/.test(target.value)) {
            errors.push('Допускается только ОДИН пробел (подряд)!');
          } else if (options.noSpaces && /\s/.test(target.value)) {
            errors.push('Пробелы НЕдопустимы!');
          }
        }

        // отработка ошибок
        if (errors.length > 0) {
          target.classList.add('is-invalid');
          invalidFeed.textContent = errors.join(' ');
        } else {
          target.classList.remove('is-invalid');
          invalidFeed.textContent = ''; // очистка сообщений об ошибках
        }
      })
    );
  }

  // добавление валидации для заглавного фильтрационного инпута ("Введите запрос")
  const searchFormMainInput = document.querySelector('.crm__search-form input');
  addInputsValidation([searchFormMainInput], {
    allowOnlyRussian: true,
    singleHyphen: true,
    noExtraSpaces: true,
  });

  // добавление валидации для ввода данных/в модальном окне (при добавлении нового/клиента)
  const allAddModalFormInputs = document.querySelectorAll(
    '.modal__add-body-input'
  );
  addInputsValidation(allAddModalFormInputs, {
    allowOnlyRussian: true,
    singleHyphen: true,
    noExtraSpaces: true,
  });

  // ** изменение направления стрелки/svg-icon, согласно прожатия по заглавной ячейке (при сортировке данных)
  const allHeaderRowCells = document.querySelectorAll(
    '.crm__output-table-head-cell'
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

  // ** организация принудительного удаления атрибута aria-hidden="true" с add-модального окна (исключение ошибки с ARIA)
  const addModal = document.querySelector('.crm__add-btn-modal');

  // мониторинг/ожидание появления соответствующего атрибута
  const observer = new MutationObserver((mutationsList) => {
    mutationsList.forEach((mutation) => {
      if (
        mutation.type === 'attributes' &&
        mutation.attributeName === 'aria-hidden'
      ) {
        addModal.removeAttribute('aria-hidden'); // принудительное удаление
      }
    });
  });

  // запуск мониторинга
  observer.observe(addModal, { attributes: true });

  // остановка мониторинга (если более не требуется)
  // observer.disconnect();

  // ** динамическое добавление строки контактов в add-модальном окне (по нажатию "Добавить контакт" кнопки)
  const addModalContactsArr = [];

  function createAddModalContactsElement() {
    if (addModalContactsArr.length >= 10) return; // проверка количества контактов (не более 10)

    const addModalContactElement = document.createElement('div');
    const addModalContactCustomSelect = document.createElement('div');
    const addModalContactDropBtn = document.createElement('button');
    const addModalContactList = document.createElement('ul');
    const addModalContactItemPhone = document.createElement('li');
    const addModalContactItemExtraPhone = document.createElement('li');
    const addModalContactItemEmail = document.createElement('li');
    const addModalContactItemVk = document.createElement('li');
    const addModalContactItemFacebook = document.createElement('li');
    const addModalContactItemTwitter = document.createElement('li');
    const addModalContactItemExtraContact = document.createElement('li');
    const addModalContactHiddenInput = document.createElement('input');
    const addModalContactInput = document.createElement('input');
    const addModalContactXBtn = document.createElement('button');
    const addModalContactXBtnIcon = document.createElement('i');
    const addModalContactFeedback = document.createElement('div');

    addModalContactElement.classList.add(
      'modal__add-body-add-contact-element',
      'input-group'
    );
    addModalContactCustomSelect.classList.add(
      'modal__add-body-add-contact-select'
      // 'form-select'
    );
    addModalContactDropBtn.classList.add(
      'modal__add-body-add-contact-drop-btn'
    );
    addModalContactList.classList.add(
      'modal__add-body-add-contact-list',
      'd-none'
    );
    addModalContactItemPhone.classList.add(
      'modal__add-body-add-contact-item',
      'add-modal-phone-item'
    );
    addModalContactItemExtraPhone.classList.add(
      'modal__add-body-add-contact-item',
      'add-modal-extra-phone-item'
    );
    addModalContactItemEmail.classList.add(
      'modal__add-body-add-contact-item',
      'add-modal-email-item'
    );
    addModalContactItemVk.classList.add(
      'modal__add-body-add-contact-item',
      'add-modal-vk-item'
    );
    addModalContactItemFacebook.classList.add(
      'modal__add-body-add-contact-item',
      'add-modal-facebook-item'
    );
    addModalContactItemTwitter.classList.add(
      'modal__add-body-add-contact-item',
      'add-modal-twitter-item'
    );
    addModalContactItemExtraContact.classList.add(
      'modal__add-body-add-contact-item',
      'add-modal-extra-contact-item'
    );
    addModalContactHiddenInput.classList.add(
      'modal__add-body-add-hidden-input'
    );
    addModalContactInput.classList.add(
      'modal__add-body-add-contact-input',
      'add-modal-input',
      'form-control'
    );
    addModalContactXBtn.classList.add(
      'modal__add-body-add-x-btn',
      'add-modal-delete-btn'
    );
    addModalContactXBtnIcon.classList.add(
      'modal__add-body-add-x-btn-icon',
      'add-modal-delete-btn',
      'bi',
      'bi-x-circle'
    );
    addModalContactFeedback.classList.add(
      'modal__add-body-add-contact-feedback',
      'invalid-feedback'
    );

    addModalContactCustomSelect.setAttribute('name', 'contact-options');
    addModalContactDropBtn.setAttribute('id', 'add-modal-drop-btn');
    addModalContactDropBtn.setAttribute('type', 'button');
    addModalContactItemPhone.setAttribute('data-value', 'phone');
    addModalContactItemPhone.setAttribute('tabindex', '0');
    addModalContactItemExtraPhone.setAttribute('data-value', 'extra-phone');
    addModalContactItemExtraPhone.setAttribute('tabindex', '0');
    addModalContactItemEmail.setAttribute('data-value', 'email');
    addModalContactItemEmail.setAttribute('tabindex', '0');
    addModalContactItemVk.setAttribute('data-value', 'vk');
    addModalContactItemVk.setAttribute('tabindex', '0');
    addModalContactItemFacebook.setAttribute('data-value', 'facebook');
    addModalContactItemFacebook.setAttribute('tabindex', '0');
    addModalContactItemTwitter.setAttribute('data-value', 'twitter');
    addModalContactItemTwitter.setAttribute('tabindex', '0');
    addModalContactItemExtraContact.setAttribute('data-value', 'extra-contact');
    addModalContactItemExtraContact.setAttribute('tabindex', '0');
    addModalContactHiddenInput.setAttribute('value', 'phone'); // начальное значение, согласно textContent кнопки
    addModalContactHiddenInput.setAttribute('type', 'hidden');
    addModalContactHiddenInput.setAttribute('name', 'contact-type');
    addModalContactInput.setAttribute('type', 'text');
    addModalContactInput.setAttribute('name', 'contact-data');
    addModalContactInput.setAttribute('placeholder', 'Введите данные контакта');
    addModalContactInput.setAttribute('required', '');
    addModalContactXBtn.setAttribute('type', 'button');
    addModalContactXBtn.setAttribute('tabindex', '0');

    addModalContactDropBtn.textContent = 'Телефон';
    addModalContactItemPhone.textContent = 'Телефон';
    addModalContactItemExtraPhone.textContent = 'Доп. телефон';
    addModalContactItemEmail.textContent = 'Email';
    addModalContactItemVk.textContent = 'Vk';
    addModalContactItemFacebook.textContent = 'Facebook';
    addModalContactItemTwitter.textContent = 'Twitter';
    addModalContactItemExtraContact.textContent = 'Доп. контакт';
    addModalContactFeedback.textContent = 'НЕ корректный ввод данных контакта!';

    addModalContactList.append(
      addModalContactItemPhone,
      addModalContactItemExtraPhone,
      addModalContactItemEmail,
      addModalContactItemVk,
      addModalContactItemFacebook,
      addModalContactItemTwitter,
      addModalContactItemExtraContact
    );
    addModalContactCustomSelect.append(
      addModalContactDropBtn,
      addModalContactList
    );
    addModalContactXBtn.append(addModalContactXBtnIcon);
    addModalContactElement.append(
      addModalContactCustomSelect,
      addModalContactHiddenInput,
      addModalContactInput,
      addModalContactXBtn,
      addModalContactFeedback
    );

    // отображение изначально скрытой обвёртки/родителя
    const addBodySelectWrap = document.querySelector(
      '.modal__add-body-add-contacts-row-wrap'
    );
    addBodySelectWrap.classList.remove('d-none');

    addBodySelectWrap.append(addModalContactElement); // добавление в DOM строки контактов

    // организация дополнительных отступов для "Добавить контакт" кнопки (при появлении строки контактов)
    if (addModalContactsArr.length === 0) {
      addModalBodyAddBtn.classList.add('add-modal-btn-margin');
    }

    // добавление "не большого" эффекта/задержки появления для "новой" строки контактов (элемента)
    addModalContactElement.style.opacity = '0';
    setTimeout(() => {
      addModalContactElement.style.transition = 'opacity 0.1s ease';
      addModalContactElement.style.opacity = '1';
    }, 10);

    // скрытие/сразу li/варианта, как "Телефон" (т.к. в drop-btn отображение по умолчанию)
    if (addModalContactDropBtn.textContent === 'Телефон') {
      addModalContactItemPhone.style.display = 'none';
    }

    // обновление/изменение отступов для li/вариантов выпадающего списка (для первого и последнего элементов)
    updateDropItemPaddings(addModalContactList);

    // добавление валидации для вводимых данных контакта (при добавлении строки контактов)
    addInputsValidation([addModalContactInput], {
      dynamicContactValidation: true,
    });

    addModalContactsArr.push(addModalContactElement); // добавление контакта во внешний/глобальный массив

    // исключение ещё/прожатия кнопки "Добавить контакт", если контактов/уже 10 (вывод сообщения)
    if (addModalContactsArr.length >= 10) {
      alert('Десятый контакт.. достаточно!');
      addModalBodyAddBtn.disabled = true;
    }

    let isDropdownToggleAllowed = true; // возможность/разрешение на показ выпадающего списка

    // показ/скрытие выпадающего списка вариантов/контактов (открытым может быть только один, переключение)
    addModalContactDropBtn.addEventListener('click', (event) => {
      if (!isDropdownToggleAllowed) return; // проверка возможности/разрешения на показ списка

      // попытка исключения хаотичных действий/наложений (задержка)
      isDropdownToggleAllowed = false;
      setTimeout(() => (isDropdownToggleAllowed = true), 200);

      const nowClickedDropBtn = event.currentTarget; // фиксация нажатой drop-кнопки
      const nowShowedDropList = nowClickedDropBtn.nextElementSibling; // фиксация выпадающего списка (следующего за drop-кнопкой)

      // проверка на уже открытый выпадающий список (закрытие)
      const alreadyOpenDropBtn = document.querySelector('.drop-open');

      if (alreadyOpenDropBtn && alreadyOpenDropBtn !== nowClickedDropBtn) {
        const alreadyOpenDropList = alreadyOpenDropBtn.nextElementSibling;
        alreadyOpenDropBtn.classList.remove('arrow-rotate', 'drop-open');

        if (
          alreadyOpenDropList &&
          alreadyOpenDropList.classList.contains(
            'modal__add-body-add-contact-list'
          )
        ) {
          alreadyOpenDropList.classList.add('d-none'); // закрытие ранее открытого списка
        }
      }

      nowClickedDropBtn.classList.toggle('arrow-rotate'); // переключение направления стрелки
      nowShowedDropList.classList.toggle('d-none'); // переключение видимости текущего списка

      // переключение видимости
      if (nowShowedDropList.classList.contains('d-none')) {
        nowClickedDropBtn.classList.remove('drop-open');
      } else {
        nowClickedDropBtn.classList.add('drop-open');
        nowClickedDropBtn.focus(); // добавление фокуса кнопке (до момента выбора)
      }
    });

    // замена/обновление содержимого/контента кнопки, так и через TAB/Enter (согласно значений li/вариантов)
    addModalContactList.addEventListener('click', (event) => {
      if (event.target.tagName === 'LI') {
        getContactDropSelection(event.target); // отработка выбора
      }
    });

    addModalContactList.addEventListener('keydown', (event) => {
      if (event.target.tagName === 'LI' && event.key === 'Enter') {
        event.preventDefault(); // исключение непредвиденных событий/поведения
        getContactDropSelection(event.target); // отработка выбора
      }
    });

    function getContactDropSelection(target) {
      const selectedItemValue = target.getAttribute('data-value');
      const previousItemValue = addModalContactHiddenInput.value;

      addModalContactDropBtn.textContent = target.textContent;
      addModalContactHiddenInput.value = selectedItemValue; // обновление данных в "скрытом" input (для последующей отправки на сервер)

      target.style.display = 'none'; // скрытие li/варианта в выпадающем списке (т.е. после выбора, отображения в drop-btn)

      // отображение/снова li/варианта (т.е. до этого скрытого)
      if (previousItemValue) {
        const previousItem = addModalContactList.querySelector(
          `[data-value="${previousItemValue}"]`
        );
        if (previousItem) {
          previousItem.style.display = ''; // сброс display: none;
        }
      }

      updateDropItemPaddings(addModalContactList); // обновление/изменение отступов для li/вариантов выпадающего списка (для первого и последнего элементов)
      closeBtnDropdown(); // закрытие выпадающего списка
      addModalContactInput.focus(); // перевод фокуса на соседний инпут (после выбора в выпадающем списке)
    }

    function updateDropItemPaddings(dropList) {
      Array.from(dropList.children).forEach((item) => {
        item.classList.remove('first-visible', 'last-visible'); // изначальная очистка от дополнительных классов
      });

      // фиксация li/вариантов находящихся "сейчас" в выпадающем списке
      const visibleDropItems = Array.from(dropList.children).filter(
        (item) => item.style.display !== 'none'
      );

      // добавление отступов (для первого/последнего элементов списка)
      if (visibleDropItems.length > 0) {
        const firstVisibleItem = visibleDropItems[0];
        const lastVisibleItem = visibleDropItems[visibleDropItems.length - 1];
        firstVisibleItem.classList.add('first-visible');
        lastVisibleItem.classList.add('last-visible');
      }
    }

    function closeBtnDropdown() {
      addModalContactList.classList.add('d-none'); // скрытие выпадающего списка
      addModalContactDropBtn.classList.remove('arrow-rotate'); // возврат направления стрелки
      addModalContactDropBtn.blur(); // снятие фокуса с кнопки (после выбора)
    }

    // вызов/инициализация tooltips для "X" кнопки (для кнопки удаления строки контактов)
    initTippy('.modal__add-body-add-x-btn', 'удалить контакт', 'top');

    // организация удаления строки контактов
    addModalContactXBtn.addEventListener('click', (event) => {
      event.stopPropagation(); // исключение непредвиденных событий/поведения
      deleteModalContactsElement(event); // удаление строки контактов (посредствам "X" кнопки)
    });

    // организация удаления строки контактов и через TAB/Enter
    addModalContactXBtn.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.stopPropagation(); // исключение непредвиденных событий/поведения
        deleteModalContactsElement(event); // удаление строки контактов (посредствам "X" кнопки)
      }
    });
  }

  // запуск логики добавления/создания строки контактов
  addModalBodyAddBtn.addEventListener('click', () => {
    createAddModalContactsElement();
  });

  // ** удаление строки контактов в add-модальном окне (через "X" кнопку, с/без уточняющего сообщения)
  function deleteModalContactsElement(event) {
    const clickedContactsXBtn = event.target;

    if (clickedContactsXBtn.classList.contains('add-modal-delete-btn')) {
      // фиксация родительского элемента
      const modalContactsElement = clickedContactsXBtn.closest(
        '.modal__add-body-add-contact-element'
      );

      if (modalContactsElement) {
        // определение заполненности инпута в данной строке контакта
        const currentInput = modalContactsElement.querySelector(
          '.modal__add-body-add-contact-input'
        );
        const isCurrentInputFilled =
          currentInput && currentInput.value.trim() !== '';
        let confirmed = true; // изначально подтверждение/confirm не требуется

        if (isCurrentInputFilled) {
          confirmed = confirm('Вы действительно хотите удалить этот контакт?'); // если/есть данные в инпуте, то тогда confirm/подтверждение при удалении
        }

        if (confirmed) {
          modalContactsElement.remove(); // удаление строки контактов

          // удаление строки контактов и из массива
          const contactIndex =
            addModalContactsArr.indexOf(modalContactsElement);
          if (contactIndex > -1) addModalContactsArr.splice(contactIndex, 1);

          // проверка на количество элементов в массиве, меньше 10.. возврат возможности прожатия кнопки "Добавить контакт"
          if (addModalContactsArr.length < 10) {
            addModalBodyAddBtn.disabled = false;
          }

          // проверка на количество строк контактов (нет, скрытие обвёртки/родителя и удаление дополнительных отступов)
          if (
            document.querySelectorAll('.modal__add-body-add-contact-element')
              .length === 0
          ) {
            const addBodySelectWrap = document.querySelector(
              '.modal__add-body-add-contacts-row-wrap'
            );
            addBodySelectWrap.classList.add('d-none');
            addModalBodyAddBtn.classList.remove('add-modal-btn-margin');
          }
        }
      }
    }
  }

  // ** дополнительная/местная организация логики для tooltips (т.е. помимо customTippy.js)
  function initTippy(selector, content, side) {
    if (typeof tippy === 'function') {
      tippy(selector, {
        content: content,
        theme: 'main',
        delay: [50, 0],
        offset: [0, 13],
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
          arrowElement.style.marginBottom = '-1px';
        },
      });
    } else {
      console.error('Tippy.js is not loaded!');
    }
  }
})();
