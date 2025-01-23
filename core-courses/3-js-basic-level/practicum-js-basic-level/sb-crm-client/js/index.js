(() => {
  // ** получение существующих, создание "новых" элементов (глобальное объявление)
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

  // ** организация кнопки для добавления "нового" клиента (последующее открытие модального окна, ряд сопутствующих действий)
  const addBtnWrap = document.createElement('div');
  const addBtn = document.createElement('button');
  const addBtnIcon = document.createElement('i');

  addBtnWrap.classList.add('crm__add-btn-wrap');
  addBtn.classList.add('crm__add-btn');
  addBtnIcon.classList.add('crm__add-btn-icon', 'bi', 'bi-person-plus-fill');

  addBtn.setAttribute('id', 'add-btn');
  addBtn.setAttribute('type', 'button');

  addBtn.textContent = 'Добавить клиента';

  addBtn.append(addBtnIcon);
  addBtnWrap.append(addBtn);
  crmAddContainer.append(addBtnWrap);

  // обработка клика по кнопке, создание/отображение модального окна
  addBtn.addEventListener('click', () => {
    const modalWrap = createModalWindowByType('add'); // создание по типу "add"

    crmAddContainer.append(modalWrap); // добавление в DOM

    // инициализация через Bootstrap API
    const bootstrapModal = new bootstrap.Modal(modalWrap);
    bootstrapModal.show(); // отображение

    // добавление валидации для вводимых данных/в модальном окне (для "основных" инпутов, ФИО)
    const allModalBodyFormInputs =
      modalWrap.querySelectorAll('.modal__body-input');
    mainInputsValidation(allModalBodyFormInputs, {
      allowOnlyRussian: true,
      singleHyphen: true,
      noExtraSpaces: true,
    });

    // принудительное удаление атрибута aria-hidden="true" с модального окна (исключение ошибки с ARIA)
    deleteAriaHiddenTrue(modalWrap);
  });

  // ** появление/скрытие поля для ввода данных/фильтрационного инпута (по нажатию на logo, на 320px)
  searchLogoImg.addEventListener('click', () => {
    document
      .querySelector('.crm__search-data')
      .classList.toggle('show-search-input');
  });

  // ** организация "общей/универсальной" логики для валидации полей ввода/инпутов (согласно передаваемых параметров)
  function mainInputsValidation(inputs, options) {
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

        // возврат предусмотренных/валидационных сообщений при очистке от введённых данных в состоянии "submit" (т.е. если ввели и очистили поле.. сразу)
        if (target.closest('form').classList.contains('was-submitted')) {
          if (target.value.trim() === '') {
            if (target.classList.contains('modal__body-add-contact-input')) {
              errors.push('Заполните поле контакта или удалите!'); // для/у row-контактов
            } else if (!target.classList.contains('modal-patronymic-input')) {
              errors.push(`Заполните поле "${target.placeholder}"!`); // для/у инпутов, как "Фамилия", "Имя"
            } else {
              errors.push('Заполните поле "Отчество" или оставьте его пустым!'); // для/у инпута "Отчество"
            }
          }
        }

        // проверки для полей ввода/инпутов из "динамической" строки контактов (согласно type="" значений)
        if (options.dynamicContactValidation) {
          const hiddenInput = targetParentNode.querySelector(
            '.modal-hidden-input'
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

                // дополнительные/итоговая проверки вводимых данных (согласно определённых условий для ввода/поля)
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
                  /[=+,`~!?%#$^&:{}()<>|"'*/\\]/g,
                  ''
                );

                // отдельная обработка пробелов через событие "beforeinput" (попытка исключить непонятный возврат "каретки" в начало строки/инпута при вводе пробела)
                target.addEventListener('beforeinput', (event) => {
                  if (event.data === ' ') {
                    event.preventDefault(); // исключение пробелов

                    // организация сообщение об ошибке
                    if (!target.classList.contains('is-invalid')) {
                      errors.push('Пробелы недопустимы!');
                      target.classList.add('is-invalid');
                      invalidFeed.textContent = 'Пробелы недопустимы!';
                    }
                    // очистка сообщения об ошибке через "backspace", т.е. первичное прожатие "backspace" удаляет только сообщение "о недопустимости пробелов" и только потом присутствующие данные (буквы, цифры..)
                  } else if (event.inputType === 'deleteContentBackward') {
                    if (invalidFeed.textContent === 'Пробелы недопустимы!') {
                      event.preventDefault(); // предотвращение удаления символов
                      invalidFeed.textContent = ''; // очистка/удаление сообщения
                      target.classList.remove('is-invalid'); // исключение НЕ валидности
                    }
                  }
                });

                // дополнительные/итоговая проверки вводимых данных (согласно определённых условий для ввода/поля)
                if ((target.value.match(/-/g) || []).length > 3) {
                  errors.push(
                    'Адрес почты не может содержать более трёх тире!'
                  ); // исключение ввода более трёх тире
                  target.classList.add('is-invalid');
                  invalidFeed.textContent =
                    'Адрес почты не может содержать более трёх тире!';
                }
                // исключение ввода более десяти нижних подчёркиваний
                else if ((target.value.match(/_/g) || []).length > 10) {
                  errors.push(
                    'Адрес почты не может содержать более десяти подчёркиваний!'
                  );
                  target.classList.add('is-invalid');
                  invalidFeed.textContent =
                    'Адрес почты не может содержать более десяти подчёркиваний!';
                }
                // исключение ввода более трёх точек
                else if ((target.value.match(/\./g) || []).length > 2) {
                  errors.push(
                    'Основная часть почты не может содержать более двух точек!'
                  );
                  target.classList.add('is-invalid');
                  invalidFeed.textContent =
                    'Основная часть почты не может содержать более двух точек!';
                }
                // определение максимальной длины
                else if (target.value.length > 35) {
                  errors.push('Адрес почты должен быть не более 35 символов!');
                  target.classList.add('is-invalid');
                  invalidFeed.textContent =
                    'Адрес почты должен быть не более 35 символов!';
                }
                // исключение несколько символов "@""
                else if ((target.value.match(/@/g) || []).length > 1) {
                  errors.push(
                    'Почта не может содержать более одного символа "@"!'
                  );
                  target.classList.add('is-invalid');
                  invalidFeed.textContent =
                    'Почта не может содержать более одного символа "@"!';
                }
                // только английские буквы
                else if (/[а-яА-ЯёЁ]/.test(target.value)) {
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
                    'Исключите цифры/символы, лишние точки.. после "@"!'
                  );
                  target.classList.add('is-invalid');
                  invalidFeed.textContent =
                    'Исключите цифры/символы, лишние точки.. после "@"!';
                } else if (!/\.[a-zA-Z]{2,}$/.test(target.value)) {
                  invalidFeed.textContent = '';
                  target.classList.remove('is-invalid');
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

                // дополнительные проверки вводимых данных (согласно определённых условий для ввода/поля)
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
                // определение максимальной длины id
                else if (target.value.length > 32) {
                  errors.push('Vk "id" должен быть не более 32 символов!');
                  target.classList.add('is-invalid');
                  invalidFeed.textContent =
                    'Vk "id" должен быть не более 32 символов!';
                }
                // если всё корректно (сообщений нет)
                else {
                  invalidFeed.textContent = '';
                  target.classList.remove('is-invalid');
                }
                break;

              case 'facebook':
                // первичная проверка на "пустое" поле ввода (выход из проверки соответствия)
                if (target.value === '') {
                  invalidFeed.textContent = '';
                  target.classList.remove('is-invalid');
                  break;
                }

                // дополнительные проверки вводимых данных (согласно определённых условий для ввода/поля)
                if (/\s/.test(target.value)) {
                  errors.push('Пробелы недопустимы!'); // исключение пробелов
                  target.classList.add('is-invalid');
                  invalidFeed.textContent = 'Пробелы недопустимы!';
                }
                // только английские буквы
                else if (/[а-яА-ЯёЁ]/.test(target.value)) {
                  errors.push(
                    'Некорректный ввод! Измените раскладку клавиатуры!'
                  );
                  target.classList.add('is-invalid');
                  invalidFeed.textContent =
                    'Некорректный ввод! Измените раскладку клавиатуры!';
                }
                // цифры в начале не допустимы
                else if (/^\d/.test(target.value)) {
                  errors.push('Никнейм не может начинаться с цифр(ы)!');
                  target.classList.add('is-invalid');
                  invalidFeed.textContent =
                    'Никнейм не может начинаться с цифр(ы)!';
                }
                // определение корректного ввода/никнейма
                else if (/[^a-zA-Z0-9@_\-.$]/.test(target.value)) {
                  errors.push('Укажите корректный никнейм, например: user1');
                  target.classList.add('is-invalid');
                  invalidFeed.textContent =
                    'Укажите корректный никнейм, например: user1';
                }
                // исключение ввода более двух точек
                else if ((target.value.match(/\./g) || []).length > 2) {
                  errors.push('Никнейм не может содержать более двух точек!');
                  target.classList.add('is-invalid');
                  invalidFeed.textContent =
                    'Никнейм не может содержать более двух точек!';
                }
                // исключение ввода более пяти тире
                else if ((target.value.match(/-/g) || []).length > 5) {
                  errors.push('Никнейм не может содержать более пяти тире!');
                  target.classList.add('is-invalid');
                  invalidFeed.textContent =
                    'Никнейм не может содержать более пяти тире!';
                }
                // исключение ввода более десяти нижних подчёркиваний
                else if ((target.value.match(/_/g) || []).length > 10) {
                  errors.push(
                    'Никнейм не может содержать более десяти подчёркиваний!'
                  );
                  target.classList.add('is-invalid');
                  invalidFeed.textContent =
                    'Никнейм не может содержать более десяти подчёркиваний!';
                }
                // определение максимальной длины никнейма
                else if (target.value.length > 50) {
                  errors.push('Никнейм должен быть не более 50 символов!');
                  target.classList.add('is-invalid');
                  invalidFeed.textContent =
                    'Никнейм должен быть не более 50 символов!';
                }
                // определение с чего должен начинаться никнейм
                else if (!/^[a-zA-Z0-9]/.test(target.value)) {
                  errors.push('Никнейм должен начинаться с буквы!');
                  target.classList.add('is-invalid');
                  invalidFeed.textContent =
                    'Никнейм должен начинаться с буквы!';
                }
                // если всё корректно (сообщений нет)
                else {
                  invalidFeed.textContent = '';
                  target.classList.remove('is-invalid');
                }
                break;

              case 'twitter':
                // первичная проверка на "пустое" поле ввода (выход из проверки соответствия)
                if (target.value === '') {
                  invalidFeed.textContent = '';
                  target.classList.remove('is-invalid');
                  break;
                }

                // дополнительные проверки вводимых данных (согласно определённых условий для ввода/поля)
                if (/\s/.test(target.value)) {
                  errors.push('Пробелы недопустимы!'); // исключение пробелов
                  target.classList.add('is-invalid');
                  invalidFeed.textContent = 'Пробелы недопустимы!';
                }
                // только английские буквы
                else if (/[а-яА-ЯёЁ]/.test(target.value)) {
                  errors.push(
                    'Некорректный ввод! Измените раскладку клавиатуры!'
                  );
                  target.classList.add('is-invalid');
                  invalidFeed.textContent =
                    'Некорректный ввод! Измените раскладку клавиатуры!';
                }
                // определение корректного ввода/никнейма
                else if (/[^a-zA-Z0-9@_\-.$]/.test(target.value)) {
                  errors.push(
                    'Укажите корректное имя пользователя, например: @Im_123'
                  );
                  target.classList.add('is-invalid');
                  invalidFeed.textContent =
                    'Укажите корректное имя пользователя, например: @Im_123';
                }
                // исключение ввода точек
                else if ((target.value.match(/\./g) || []).length > 0) {
                  errors.push('Имя пользователя не может содержать точки!');
                  target.classList.add('is-invalid');
                  invalidFeed.textContent =
                    'Имя пользователя не может содержать точки!';
                }
                // исключение ввода более трёх тире
                else if ((target.value.match(/-/g) || []).length > 3) {
                  errors.push(
                    'Имя пользователя не может содержать более трёх тире!'
                  );
                  target.classList.add('is-invalid');
                  invalidFeed.textContent =
                    'Имя пользователя не может содержать более трёх тире!';
                }
                // исключение ввода более десяти нижних подчёркиваний
                else if ((target.value.match(/_/g) || []).length > 10) {
                  errors.push(
                    'Имя пользователя не может содержать более десяти подчёркиваний!'
                  );
                  target.classList.add('is-invalid');
                  invalidFeed.textContent =
                    'Имя пользователя не может содержать более десяти подчёркиваний!';
                }
                // определение максимальной длины имени пользователя
                else if (target.value.length > 15) {
                  errors.push(
                    'Имя пользователя должно быть не более 15 символов!'
                  );
                  target.classList.add('is-invalid');
                  invalidFeed.textContent =
                    'Имя пользователя должно быть не более 15 символов!';
                }
                // определение с чего должен начинаться имя пользователя
                else if (!/^[@]/.test(target.value)) {
                  errors.push(
                    'Имя пользователя должно начинаться только со знака "@"!'
                  );
                  target.classList.add('is-invalid');
                  invalidFeed.textContent =
                    'Имя пользователя должно начинаться только со знака "@"!';
                }
                // если всё корректно (сообщений нет)
                else {
                  invalidFeed.textContent = '';
                  target.classList.remove('is-invalid');
                }
                break;

              case 'extra-contact':
                // первичная проверка на "пустое" поле ввода (выход из проверки соответствия)
                if (target.value === '') {
                  invalidFeed.textContent = '';
                  target.classList.remove('is-invalid');
                  break;
                }

                // дополнительные проверки вводимых данных (согласно определённых условий для ввода/поля)
                if ((target.value.match(/\s/g) || []).length > 1) {
                  errors.push('Только ОДИН пробел допустим!');
                  target.classList.add('is-invalid');
                  invalidFeed.textContent = 'Только ОДИН пробел допустим!';
                }
                // только английские буквы
                else if (/[а-яА-ЯёЁ]/.test(target.value)) {
                  errors.push(
                    'Некорректный ввод! Измените раскладку клавиатуры!'
                  );
                  target.classList.add('is-invalid');
                  invalidFeed.textContent =
                    'Некорректный ввод! Измените раскладку клавиатуры!';
                }
                // определение корректного ввода/никнейма
                else if (/[^a-zA-Z0-9@_:\-.$\s]/.test(target.value)) {
                  errors.push(
                    'Укажите доп. контакт, в формате: "название контакта: никнейм", без лишних символов!'
                  );
                  target.classList.add('is-invalid');
                  invalidFeed.textContent =
                    'Укажите доп. контакт, в формате: "название контакта: никнейм", без лишних символов!';
                }
                // исключение ввода более двух точек
                else if ((target.value.match(/\./g) || []).length > 2) {
                  errors.push(
                    'Доп. контакт не может содержать более двух точек!'
                  );
                  target.classList.add('is-invalid');
                  invalidFeed.textContent =
                    'Доп. контакт не может содержать более двух точек!';
                }
                // исключение ввода более трёх тире
                else if ((target.value.match(/-/g) || []).length > 3) {
                  errors.push(
                    'Доп. контакт не может содержать более трёх тире!'
                  );
                  target.classList.add('is-invalid');
                  invalidFeed.textContent =
                    'Доп. контакт не может содержать более трёх тире!';
                }
                // исключение ввода более десяти нижних подчёркиваний
                else if ((target.value.match(/_/g) || []).length > 10) {
                  errors.push(
                    'Доп. контакт не может содержать более десяти подчёркиваний!'
                  );
                  target.classList.add('is-invalid');
                  invalidFeed.textContent =
                    'Доп. контакт не может содержать более десяти подчёркиваний!';
                }
                // определение максимальной длины имени пользователя
                else if (target.value.length > 50) {
                  errors.push(
                    'Длинна "всего" доп. контакт должна быть не более 50 символов!'
                  );
                  target.classList.add('is-invalid');
                  invalidFeed.textContent =
                    'Длинна "всего" доп. контакт должна быть не более 50 символов!';
                }
                // определение с чего должен начинаться доп. контакт
                else if (!/^[a-zA-Z]/.test(target.value)) {
                  errors.push(
                    'Доп. контакт должен начинаться только с английских букв, например: Instagram: @user1'
                  );
                  target.classList.add('is-invalid');
                  invalidFeed.textContent =
                    'Доп. контакт должен начинаться только с английских букв, например: Instagram: @user1';
                }
                // если всё корректно (сообщений нет)
                else {
                  invalidFeed.textContent = '';
                  target.classList.remove('is-invalid');
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

          // дополнительная/опциональная проверка для инпутов, обработка дефисов
          if (options.singleHyphen) {
            if (
              target.classList.contains('modal-name-input') ||
              target.classList.contains('modal-patronymic-input')
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

          // дополнительная/опциональная проверка для инпутов, обработка пробелов
          if (
            target.classList.contains('modal__body-input') &&
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
  mainInputsValidation([searchFormMainInput], {
    allowOnlyRussian: true,
    singleHyphen: true,
    noExtraSpaces: true,
  });

  // ** организация "дополнительной" логики для валидации полей ввода/инпутов в модальных окнах (при/в "submit" состояниях)
  function additionalFormInputsValidation(allModalInputs, modalBodyForm) {
    const validErrors = [];

    allModalInputs.forEach((input) => {
      const parent = input.parentNode;
      const feedback = parent.querySelector('.invalid-feedback');

      if (input.value.trim() === '' || !input.checkValidity()) {
        // определение/вывод сообщения в зависимости от "класса" инпута
        if (!input.classList.contains('is-invalid')) {
          if (input.classList.contains('modal__body-add-contact-input')) {
            validErrors.push('Заполните поле контакта или удалите!');
            if (feedback)
              feedback.textContent = 'Заполните поле контакта или удалите!';
          } else if (!input.classList.contains('modal-patronymic-input')) {
            validErrors.push(`Заполните поле "${input.placeholder}"!`);
            if (feedback)
              feedback.textContent = `Заполните поле "${input.placeholder}"!`;
          } else if (input.classList.contains('modal-patronymic-input')) {
            // индивидуальное сообщение для поля "Отчество", НО без добавления в массив ошибок
            if (feedback)
              feedback.textContent =
                'Заполните поле "Отчество" или оставьте его пустым!';
          }

          input.classList.add('is-invalid'); // выделение инпута "красным"
        }
      } else {
        // отображение ошибок
        if (input.classList.contains('is-invalid')) {
          return; // если "is-invalid".. оставляем
        }

        // а если данные валидны, отмена выделения/исключение сообщения
        input.classList.remove('is-invalid');
        if (feedback) feedback.textContent = '';
      }
    });

    // добавление кастомного "класса-состояния" для формы (на основе этого последующая отработка)
    if (validErrors.length > 0) {
      modalBodyForm.classList.add('was-submitted');
    }

    return validErrors; // возврат массива ошибок/сообщений
  }

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

  // ** создание "универсального" модального окна, для добавления или изменения данных клиента (согласно передаваемого типа)
  let modalContactsArr = []; // глобальная инициализация массива контактов (будущих row-контактов)

  function createModalWindowByType(type, clientData = {}) {
    // проверка входящего аргумента/параметра "type" (отработка по default)
    const validTypes = ['add', 'edit'];
    if (!validTypes.includes(type)) {
      console.error(`Invalid type: "${type}". Defaulting to "add"!`);
      type = 'add';
    }

    // при типе "edit" проверка наличия/корректности свойства id
    if (
      type === 'edit' &&
      (!clientData.id || typeof clientData.id !== 'string')
    ) {
      console.warn(
        'Missing or invalid "id" in clientData! Some features may not work as expected!'
      );
    }

    const modalId = type === 'add' ? 'add-modal' : 'edit-modal';
    const modalTitle = type === 'add' ? 'Новый клиент' : 'Изменить данные';
    const modalCancelBtn = type === 'add' ? 'Отмена' : 'Удалить клиента';

    const modalWrap = document.createElement('div');
    const modalDialog = document.createElement('div');
    const modalContent = document.createElement('div');
    const modalHeader = document.createElement('div');
    const modalHeaderTitleWrap = document.createElement('div');
    const modalHeaderTitle = document.createElement('h1');
    const modalHeaderClientId = document.createElement('span');
    const modalHeaderXBtn = document.createElement('button');
    const modalBody = document.createElement('div');
    const modalBodyForm = document.createElement('form');
    const modalBodyInputsWrap = document.createElement('div');
    const modalBodySurnameInputWrap = document.createElement('div');
    const modalBodySurnameInput = document.createElement('input');
    const modalBodySurnameInputLabel = document.createElement('label');
    const modalBodySurnameLabelSpan = document.createElement('span');
    const modalBodySurnameFeedback = document.createElement('div');
    const modalBodyNameInputWrap = document.createElement('div');
    const modalBodyNameInput = document.createElement('input');
    const modalBodyNameInputLabel = document.createElement('label');
    const modalBodyNameInputLabelSpan = document.createElement('span');
    const modalBodyNameFeedback = document.createElement('div');
    const modalBodyPatronymicInputWrap = document.createElement('div');
    const modalBodyPatronymicInput = document.createElement('input');
    const modalBodyPatronymicInputLabel = document.createElement('label');
    const modalBodyPatronymicFeedback = document.createElement('div');
    const modalBodyAddContactsWrap = document.createElement('div');
    const modalBodyAddContactsRowWrap = document.createElement('div');
    const modalBodyAddBtn = document.createElement('button');
    const modalBodyAddBtnIconStroke = document.createElement('i');
    const modalBodyAddBtnIconFill = document.createElement('i');
    const modalBodySaveBtn = document.createElement('button');
    const modalFooter = document.createElement('div');
    const modalFooterCancelBtn = document.createElement('button');

    modalWrap.classList.add('modal', 'crm__modal-wrap', 'fade');
    modalDialog.classList.add('modal__dialog', 'modal-dialog');
    modalContent.classList.add('modal__content-wrap', 'modal-content');
    modalHeader.classList.add('modal__header', 'modal-header');
    modalHeaderTitleWrap.classList.add('modal__header-title-wrap');
    modalHeaderTitle.classList.add('modal__header-title', 'modal-title');
    modalHeaderClientId.classList.add('modal__header-client-id');
    modalHeaderXBtn.classList.add('modal__header-x-btn', 'btn-close');
    modalBody.classList.add('modal__body', 'modal-body');
    modalBodyForm.classList.add('modal__body-form', 'needs-validation');
    modalBodyInputsWrap.classList.add('modal__body-inputs-wrap');
    modalBodySurnameInputWrap.classList.add(
      'modal__body-input-wrap',
      'modal-surname-input-wrap',
      'form-floating'
    );
    modalBodySurnameInput.classList.add(
      'modal__body-input',
      'modal-surname-input',
      'modal-input',
      'form-control'
    );
    modalBodySurnameInputLabel.classList.add(
      'modal__body-input-label',
      'modal-surname-input-labe'
    );
    modalBodySurnameLabelSpan.classList.add(
      'modal__body-label-span',
      'modal-surname-input-label-span'
    );
    modalBodySurnameFeedback.classList.add(
      'modal__body-input-feedback',
      'modal-surname-input-feedback',
      'invalid-feedback'
    );
    modalBodyNameInputWrap.classList.add(
      'modal__body-input-wrap',
      'modal-name-input-wrap',
      'form-floating'
    );
    modalBodyNameInput.classList.add(
      'modal__body-input',
      'modal-name-input',
      'modal-input',
      'form-control'
    );
    modalBodyNameInputLabel.classList.add(
      'modal__body-input-label',
      'modal-name-input-labe'
    );
    modalBodyNameInputLabelSpan.classList.add(
      'modal__body-label-span',
      'modal-name-input-label-span'
    );
    modalBodyNameFeedback.classList.add(
      'modal__body-input-feedback',
      'modal-name-input-feedback',
      'invalid-feedback'
    );
    modalBodyPatronymicInputWrap.classList.add(
      'modal__body-input-wrap',
      'modal-patronymic-input-wrap',
      'form-floating'
    );
    modalBodyPatronymicInput.classList.add(
      'modal__body-input',
      'modal-patronymic-input',
      'modal-input',
      'form-control'
    );
    modalBodyPatronymicInputLabel.classList.add(
      'modal__body-input-label',
      'modal-patronymic-input-labe'
    );
    modalBodyPatronymicFeedback.classList.add(
      'modal__body-input-feedback',
      'modal-patronymic-input-feedback',
      'invalid-feedback'
    );
    modalBodyAddContactsWrap.classList.add('modal__body-contacts-wrap');
    modalBodyAddContactsRowWrap.classList.add(
      'modal__body-contacts-row-wrap',
      'd-none'
    );
    modalBodyAddBtn.classList.add('modal__body-add-btn', 'modal-btn');
    modalBodyAddBtnIconStroke.classList.add(
      'modal__body-add-btn-icon',
      'bi',
      'bi-plus-circle',
      'plus-circle-stroke'
    );
    modalBodyAddBtnIconFill.classList.add(
      'modal__body-add-btn-icon',
      'bi',
      'bi-plus-circle-fill',
      'plus-circle-fill'
    );
    modalBodySaveBtn.classList.add('modal__body-save-btn', 'modal-btn');
    modalFooter.classList.add('modal__footer', 'modal-footer');
    modalFooterCancelBtn.classList.add('modal__footer-cancel-btn', 'modal-btn');

    modalWrap.setAttribute('id', modalId); // определяется в переменной
    modalHeaderClientId.setAttribute('id', 'client-id');
    modalHeaderXBtn.setAttribute('type', 'button');
    modalHeaderXBtn.setAttribute('data-bs-dismiss', 'modal');
    modalHeaderXBtn.setAttribute('aria-label', 'Close');
    modalBodyForm.setAttribute('id', 'modal-form');
    modalBodyForm.setAttribute('action', '#');
    modalBodyForm.setAttribute('novalidate', '');
    modalBodyForm.setAttribute('autocomplete', 'off');
    modalBodySurnameInput.setAttribute('id', 'modal-surname-floating-input');
    modalBodySurnameInput.setAttribute('type', 'text');
    modalBodySurnameInput.setAttribute('pattern', '[А-Яа-яЁё\\-]+');
    modalBodySurnameInput.setAttribute('placeholder', 'Фамилия');
    modalBodySurnameInput.setAttribute('required', '');
    modalBodySurnameInputLabel.setAttribute(
      'for',
      'modal-surname-floating-input'
    );
    modalBodyNameInput.setAttribute('id', 'modal-name-floating-input');
    modalBodyNameInput.setAttribute('type', 'text');
    modalBodyNameInput.setAttribute('pattern', '[А-Яа-яЁё\\-]+');
    modalBodyNameInput.setAttribute('placeholder', 'Имя');
    modalBodyNameInput.setAttribute('required', '');
    modalBodyNameInputLabel.setAttribute('for', 'modal-name-floating-input');
    modalBodyPatronymicInput.setAttribute(
      'id',
      'modal-patronymic-floating-input'
    );
    modalBodyPatronymicInput.setAttribute('type', 'text');
    modalBodyPatronymicInput.setAttribute('pattern', '[А-Яа-яЁё\\-]+');
    modalBodyPatronymicInput.setAttribute('placeholder', 'Отчество');
    // modalBodyPatronymicInput.setAttribute('required', '');
    modalBodyPatronymicInputLabel.setAttribute(
      'for',
      'modal-patronymic-floating-input'
    );
    modalBodyAddBtn.setAttribute('id', 'modal-body-add-btn');
    modalBodyAddBtn.setAttribute('type', 'button');
    modalBodySaveBtn.setAttribute('id', 'modal-body-save-btn');
    modalBodySaveBtn.setAttribute('type', 'submit');
    modalFooterCancelBtn.setAttribute('id', 'modal-footer-cancel-btn');
    modalFooterCancelBtn.setAttribute('type', 'button');
    modalFooterCancelBtn.setAttribute('data-bs-dismiss', 'modal');

    modalHeaderTitle.textContent = modalTitle; // определяется в переменной
    modalHeaderClientId.textContent = `ID: ${clientData.id || ''}`; // "вытягивается" из входящего объекта
    modalBodySurnameInputLabel.textContent = 'Фамилия';
    modalBodySurnameLabelSpan.textContent = '*';
    modalBodySurnameFeedback.textContent = 'Заполните поле "Фамилия"!';
    modalBodyNameInputLabel.textContent = 'Имя';
    modalBodyNameInputLabelSpan.textContent = '*';
    modalBodyNameFeedback.textContent = 'Заполните поле "Имя"!';
    modalBodyPatronymicInputLabel.textContent = 'Отчество';
    modalBodyPatronymicFeedback.textContent = 'Заполните поле "Отчество"!';
    modalBodyAddBtn.textContent = 'Добавить контакт';
    modalBodySaveBtn.textContent = 'Сохранить';
    modalFooterCancelBtn.textContent = modalCancelBtn; // определяется в переменной

    modalHeaderClientId.style.display = type === 'edit' ? 'inline' : 'none'; // отображение/скрытие ID

    modalHeaderTitleWrap.append(modalHeaderTitle, modalHeaderClientId);
    modalHeader.append(modalHeaderTitleWrap, modalHeaderXBtn);
    modalBodySurnameInputLabel.append(modalBodySurnameLabelSpan);
    modalBodySurnameInputWrap.append(
      modalBodySurnameInput,
      modalBodySurnameInputLabel,
      modalBodySurnameFeedback
    );
    modalBodyNameInputLabel.append(modalBodyNameInputLabelSpan);
    modalBodyNameInputWrap.append(
      modalBodyNameInput,
      modalBodyNameInputLabel,
      modalBodyNameFeedback
    );
    modalBodyPatronymicInputWrap.append(
      modalBodyPatronymicInput,
      modalBodyPatronymicInputLabel,
      modalBodyPatronymicFeedback
    );
    modalBodyInputsWrap.append(
      modalBodySurnameInputWrap,
      modalBodyNameInputWrap,
      modalBodyPatronymicInputWrap
    );
    modalBodyAddBtn.append(modalBodyAddBtnIconStroke, modalBodyAddBtnIconFill);

    modalBodyAddContactsWrap.append(
      modalBodyAddContactsRowWrap,
      modalBodyAddBtn
    );
    modalBodyForm.append(
      modalBodyInputsWrap,
      modalBodyAddContactsWrap,
      modalBodySaveBtn
    );
    modalBody.append(modalBodyForm);
    modalFooter.append(modalFooterCancelBtn);
    modalContent.append(modalHeader, modalBody, modalFooter);
    modalDialog.append(modalContent);
    modalWrap.append(modalDialog);

    // вызов/инициализация tooltips для "X" модальной кнопки (для кнопки закрытия модального окна, с задержкой)
    setTimeout(() => {
      initTippy(modalHeaderXBtn, 'закрыть', 'left');
    }, 0);

    // запуск логики добавления/создания "внутренней" строки контактов (передача объекта/context(a) с необходимыми элементами)
    modalBodyAddBtn.addEventListener('click', () => {
      createModalContactsElement({
        modalWrap,
        modalBodyAddContactsRowWrap,
        modalBodyAddBtn,
      });
    });

    // отработка/момента закрытия модального окна (ряд сопутствующих действий, передача объекта/context(a))
    modalWrap.addEventListener('hide.bs.modal', (event) => {
      const context = {
        modalWrap,
        modalBodyAddContactsRowWrap,
        modalBodyAddBtn,
      };

      // проверка на наличие валидных данных в инпутах: основных, контактных (хотя бы в одном.. отработка confirm)
      const hasAnyData = checkModalInputsBeforeClose(event, context);

      // если/там "cancel" в confirm, перевод focus на кнопку "Сохранить"
      if (!hasAnyData) {
        return; // т.е. без/вообще удалений инпутов (и "пустые" и не валидные остаются.. пока)
      }

      // если/там "ок" в confirm, отработка удаления и "пустых", и невалидных контактов (если такие были)
      deleteModalRowContacts(context);
    });

    // очистка массива после закрытия модального окна
    modalWrap.addEventListener('hidden.bs.modal', () => {
      modalContactsArr = [];
    });

    // обработка "submit" события для формы (общая валидация, ряд действий)
    handleModalFormSubmit({ modalBodyForm, type, clientData });

    return modalWrap; // возврат модального окна (т.е. здесь/без добавления в DOM.. позже, при клике)
  }

  // ** организация принудительного удаления атрибута aria-hidden="true" с модальных окон (исключение ошибок с ARIA)
  function deleteAriaHiddenTrue(modalWrap) {
    // мониторинг/ожидание появления соответствующего атрибута
    const observer = new MutationObserver((mutationsList) => {
      mutationsList.forEach((mutation) => {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'aria-hidden'
        ) {
          modalWrap.removeAttribute('aria-hidden'); // принудительное удаление
        }
      });
    });

    // запуск мониторинга
    observer.observe(modalWrap, { attributes: true });

    // return observer; // можно вернуть observe (если более не требуется)
  }

  // ** организация проверки на наличие валидных данных в модальных инпутах: основных, контактных (отработка "уточняющего" confirm, возврат true/false)
  function checkModalInputsBeforeClose(event, context = {}) {
    const { modalWrap } = context; // получение необходимого элемента (через деструктуризациию входящего/передаваемого объекта)
    const modalInputs = Array.from(modalWrap.querySelectorAll('.modal-input')); // фиксация всех модальных инпутов

    // определение заполненных/валидных инпутов (хотя бы одного)
    const hasValidInputs = modalInputs.some((input) => {
      return (
        input.value.trim() !== '' && !input.classList.contains('is-invalid')
      );
    });

    // отработка уточняющего сообщения (если есть заполненные/валидные инпуты)
    if (hasValidInputs) {
      const userConfirmed = confirm(
        'Есть не сохранённые данные! Закрыть окно?'
      );

      if (!userConfirmed) {
        event.preventDefault(); // исключение закрытия модального окна
        event.stopPropagation(); // исключение передачи данного события (выше)

        // организация/перевод focus на кнопку "Сохранить" (при введённых данных, при "cancel" в confirm)
        const saveButton = modalWrap.querySelector('#modal-body-save-btn');
        if (saveButton) {
          // установка через задержку (без задержки не фокусируется)
          setTimeout(() => {
            saveButton.classList.add('custom-focus'); // добавление "класса" для выделения
            saveButton.focus(); // добавление "программного/TAB" фокуса

            // очистка выделения кнопки (при переводе фокуса)
            saveButton.addEventListener('blur', () => {
              saveButton.classList.remove('custom-focus');
            });
          }, 100); // минимальная задержка
        }

        return false; // т.е. при "cancel" в confirm, всё остаётся как было (т.е. вообще/без удалений)
      }
    }

    return true; // т.е. при "ok" в confirm, всё можно очищать.. удалять и "пустые", и невалидные контакты
  }

  // ** организация "динамического" добавления строки контакта/row-contact (по нажатию "Добавить контакт" кнопки, в  модальных/универсальных окнах)
  function createModalContactsElement(context = {}) {
    const { modalWrap, modalBodyAddContactsRowWrap, modalBodyAddBtn } = context; // получение необходимых элементов (через деструктуризациию входящего/передаваемого объекта)

    if (modalContactsArr.length >= 10) return; // проверка количества контактов (не более 10)

    const modalContactElement = document.createElement('div');
    const modalContactCustomSelect = document.createElement('div');
    const modalContactDropBtn = document.createElement('button');
    const modalContactList = document.createElement('ul');
    const modalContactItemPhone = document.createElement('li');
    const modalContactItemExtraPhone = document.createElement('li');
    const modalContactItemEmail = document.createElement('li');
    const modalContactItemVk = document.createElement('li');
    const modalContactItemFacebook = document.createElement('li');
    const modalContactItemTwitter = document.createElement('li');
    const modalContactItemExtraContact = document.createElement('li');
    const modalContactHiddenInput = document.createElement('input');
    const modalContactInput = document.createElement('input');
    const modalContactXBtn = document.createElement('button');
    const modalContactXBtnIcon = document.createElement('i');
    const modalContactFeedback = document.createElement('div');

    modalContactElement.classList.add(
      'modal__body-add-contact-element',
      'modal-contact-element',
      'input-group'
    );
    modalContactCustomSelect.classList.add(
      'modal__body-add-contact-select'
      // 'form-select'
    );
    modalContactDropBtn.classList.add('modal__body-add-contact-drop-btn');
    modalContactList.classList.add(
      'modal__body-add-contact-list',
      'modal-contact-list',
      'd-none'
    );
    modalContactItemPhone.classList.add(
      'modal__body-add-contact-item',
      'modal-phone-item'
    );
    modalContactItemExtraPhone.classList.add(
      'modal__body-add-contact-item',
      'modal-extra-phone-item'
    );
    modalContactItemEmail.classList.add(
      'modal__body-add-contact-item',
      'modal-email-item'
    );
    modalContactItemVk.classList.add(
      'modal__body-add-contact-item',
      'modal-vk-item'
    );
    modalContactItemFacebook.classList.add(
      'modal__body-add-contact-item',
      'modal-facebook-item'
    );
    modalContactItemTwitter.classList.add(
      'modal__body-add-contact-item',
      'modal-twitter-item'
    );
    modalContactItemExtraContact.classList.add(
      'modal__body-add-contact-item',
      'modal-extra-contact-item'
    );
    modalContactHiddenInput.classList.add(
      'modal__body-add-hidden-input',
      'modal-hidden-input'
    );
    modalContactInput.classList.add(
      'modal__body-add-contact-input',
      'modal-contact-input',
      'modal-input',
      'form-control'
    );
    modalContactXBtn.classList.add(
      'modal__body-add-x-btn',
      'modal-delete-contact-btn'
    );
    modalContactXBtnIcon.classList.add(
      'modal__body-add-x-btn-icon',
      'modal-delete-contact-btn-icon',
      'bi',
      'bi-x-circle'
    );
    modalContactFeedback.classList.add(
      'modal__body-add-contact-feedback',
      'invalid-feedback'
    );

    modalContactCustomSelect.setAttribute('name', 'contact-options');
    modalContactDropBtn.setAttribute('id', 'add-modal-drop-btn');
    modalContactDropBtn.setAttribute('type', 'button');
    modalContactItemPhone.setAttribute('data-value', 'phone');
    modalContactItemPhone.setAttribute('tabindex', '0');
    modalContactItemExtraPhone.setAttribute('data-value', 'extra-phone');
    modalContactItemExtraPhone.setAttribute('tabindex', '0');
    modalContactItemEmail.setAttribute('data-value', 'email');
    modalContactItemEmail.setAttribute('tabindex', '0');
    modalContactItemVk.setAttribute('data-value', 'vk');
    modalContactItemVk.setAttribute('tabindex', '0');
    modalContactItemFacebook.setAttribute('data-value', 'facebook');
    modalContactItemFacebook.setAttribute('tabindex', '0');
    modalContactItemTwitter.setAttribute('data-value', 'twitter');
    modalContactItemTwitter.setAttribute('tabindex', '0');
    modalContactItemExtraContact.setAttribute('data-value', 'extra-contact');
    modalContactItemExtraContact.setAttribute('tabindex', '0');
    modalContactHiddenInput.setAttribute('value', 'phone'); // начальное значение, согласно textContent кнопки
    modalContactHiddenInput.setAttribute('type', 'hidden');
    modalContactHiddenInput.setAttribute('name', 'contact-type');
    modalContactInput.setAttribute('type', 'tel');
    modalContactInput.setAttribute('name', 'contact-data');
    modalContactInput.setAttribute('placeholder', 'Введите данные контакта');
    modalContactInput.setAttribute('required', '');
    modalContactXBtn.setAttribute('type', 'button');
    modalContactXBtn.setAttribute('tabindex', '0');

    modalContactDropBtn.textContent = 'Телефон';
    modalContactItemPhone.textContent = 'Телефон';
    modalContactItemExtraPhone.textContent = 'Доп. телефон';
    modalContactItemEmail.textContent = 'Email';
    modalContactItemVk.textContent = 'Vk';
    modalContactItemFacebook.textContent = 'Facebook';
    modalContactItemTwitter.textContent = 'Twitter';
    modalContactItemExtraContact.textContent = 'Доп. контакт';
    modalContactFeedback.textContent = 'Заполните поле контакта или удалите!';

    modalContactList.append(
      modalContactItemPhone,
      modalContactItemExtraPhone,
      modalContactItemEmail,
      modalContactItemVk,
      modalContactItemFacebook,
      modalContactItemTwitter,
      modalContactItemExtraContact
    );
    modalContactCustomSelect.append(modalContactDropBtn, modalContactList);
    modalContactXBtn.append(modalContactXBtnIcon);
    modalContactElement.append(
      modalContactCustomSelect,
      modalContactHiddenInput,
      modalContactInput,
      modalContactXBtn,
      modalContactFeedback
    );

    // отображение изначально скрытой обвёртки/родителя
    modalBodyAddContactsRowWrap.classList.remove('d-none');
    modalBodyAddContactsRowWrap.append(modalContactElement); // добавление в DOM строки контактов

    // организация дополнительных отступов для "Добавить контакт" кнопки (при появлении строки контактов)
    if (modalContactsArr.length === 0) {
      modalBodyAddBtn.classList.add('modal-contact-btn-margin');
    }

    // добавление "не большого" эффекта/задержки появления для "новой" строки контактов (элемента)
    modalContactElement.style.opacity = '0';
    setTimeout(() => {
      modalContactElement.style.transition = 'opacity 0.1s ease';
      modalContactElement.style.opacity = '1';
    }, 10);

    // скрытие/сразу li/варианта, как "Телефон" (т.к. в drop-btn отображение по умолчанию)
    if (modalContactDropBtn.textContent === 'Телефон') {
      modalContactItemPhone.style.display = 'none';
    }

    // добавление валидации для вводимых данных контакта (при добавлении строки контактов)
    mainInputsValidation([modalContactInput], {
      dynamicContactValidation: true,
    });

    // добавление класса/состояния "is-invalid" пустой строке контакта, при появлении (если форма уже/в "was-submitted")
    const modalForm = modalWrap.querySelector('form');
    if (modalForm.classList.contains('was-submitted')) {
      const invalidFeed =
        modalContactElement.querySelector('.invalid-feedback');

      // добавление "is-invalid", сообщения
      if (modalContactInput.value.trim() === '') {
        modalContactInput.classList.add('is-invalid');
        invalidFeed.textContent = 'Заполните поле контакта или удалите!';
      }
    }

    // обновление/изменение отступов для li/вариантов выпадающего списка (для первого и последнего элементов)
    updateDropItemPaddings(modalContactList);

    modalContactsArr.push(modalContactElement); // добавление контакта во внешний/глобальный массив

    // исключение ещё/прожатия кнопки "Добавить контакт", если контактов/уже 10 (вывод сообщения)
    if (modalContactsArr.length >= 10) {
      alert('Десятый контакт.. достаточно!');
      modalBodyAddBtn.disabled = true;
    }

    let isDropdownToggleAllowed = true; // возможность/разрешение на показ выпадающего списка

    // показ/скрытие выпадающего списка вариантов/контактов (открытым может быть только один, переключение)
    modalContactDropBtn.addEventListener('click', (event) => {
      if (!isDropdownToggleAllowed) return; // проверка возможности/разрешения на показ списка

      // попытка исключения хаотичных действий/наложений (задержка)
      isDropdownToggleAllowed = false;
      setTimeout(() => (isDropdownToggleAllowed = true), 200);

      const alreadyOpenDropBtn = modalWrap.querySelector('.drop-open'); // фиксация открытого/уже списка (согласно drop-кнопки)
      const nowClickedDropBtn = event.currentTarget; // фиксация нажатой drop-кнопки (сейчас)

      // закрытие ранее открытого выпадающего списка (если такой был)
      if (alreadyOpenDropBtn && alreadyOpenDropBtn !== nowClickedDropBtn) {
        closeBtnDropdown(modalWrap);
      }

      const nowShowedDropList = nowClickedDropBtn.nextElementSibling; // фиксация "ново-открытого" выпадающего списка (согласно drop-кнопки)

      nowClickedDropBtn.classList.toggle('arrow-rotate'); // переключение направления стрелки
      nowShowedDropList.classList.toggle('d-none'); // переключение видимости текущего списка

      // переключение видимости у/для списков
      if (nowShowedDropList.classList.contains('d-none')) {
        nowClickedDropBtn.classList.remove('drop-open');
      } else {
        nowClickedDropBtn.classList.add('drop-open');
        nowClickedDropBtn.focus(); // добавление фокуса кнопке (до момента выбора)
      }
    });

    // замена/обновление содержимого/контента кнопки, так.. и через TAB/Enter (согласно значений li/вариантов)
    modalContactList.addEventListener('click', (event) => {
      if (event.target.tagName === 'LI') {
        getContactDropSelection(event.target, {
          modalWrap,
          modalContactDropBtn,
          modalContactList,
          modalContactHiddenInput,
          modalContactInput,
        }); // отработка выбора (передача context(a))
      }
    });

    modalContactList.addEventListener('keydown', (event) => {
      if (event.target.tagName === 'LI' && event.key === 'Enter') {
        event.preventDefault(); // исключение непредвиденных событий/поведения
        getContactDropSelection(event.target, {
          modalWrap,
          modalContactDropBtn,
          modalContactList,
          modalContactHiddenInput,
          modalContactInput,
        }); // отработка выбора (передача context(a))
      }
    });

    // автоматическое закрытие/скрытие развёрнутого выпадающего drop-списка (при работе НЕ с ним)
    modalWrap.addEventListener('click', (event) => {
      const openDropdownBtn = modalWrap.querySelector('.drop-open');

      // закрытие/скрытие выпадающего списка (если последующий "клик" не по нему, не по drop-кнопке)
      if (
        openDropdownBtn &&
        !openDropdownBtn.contains(event.target) &&
        !openDropdownBtn.nextElementSibling.contains(event.target)
      ) {
        closeBtnDropdown(modalWrap); // вызов соответствующей функции
      }
    });

    modalWrap.addEventListener('focusout', (event) => {
      const openDropdownBtn = modalWrap.querySelector('.drop-open');

      // закрытие/скрытие выпадающего списка (если "фокус" перешёл на другой элемент, в другое место)
      if (
        openDropdownBtn &&
        !openDropdownBtn.contains(event.relatedTarget) &&
        !openDropdownBtn.nextElementSibling.contains(event.relatedTarget)
      ) {
        closeBtnDropdown(modalWrap); // вызов соответствующей функции
      }
    });

    // исключение закрытия выпадающего списка (при работе с ним)
    modalContactList.addEventListener('click', (event) => {
      event.stopPropagation();
    });

    // вызов/инициализация tooltips для "X" кнопки (для кнопки удаления строки контактов, с задержкой)
    setTimeout(() => {
      initTippy(modalContactXBtn, 'удалить контакт', 'top');
    }, 0);

    // организация удаления строки контактов
    modalContactXBtn.addEventListener('click', (event) => {
      event.stopPropagation(); // исключение непредвиденных событий/поведения
      deleteModalContactsElement(event, {
        modalBodyAddBtn,
        modalBodyAddContactsRowWrap,
      }); // удаление строки контактов (посредствам "X", передача context(a))
    });

    // организация удаления строки контактов и через TAB/Enter
    modalContactXBtn.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.stopPropagation(); // исключение непредвиденных событий/поведения
        deleteModalContactsElement(event, {
          modalBodyAddBtn,
          modalBodyAddContactsRowWrap,
        }); // удаление строки контактов (посредствам "X", передача context(a))
      }
    });
  }

  // ** обработка выбора/типа строки контакта, согласно вариантов выпадающего drop-btn списка (в модальных/универсальных окнах, ряд сопутствующих действий)
  function getContactDropSelection(target, context = {}) {
    const selectedItemValue = target.getAttribute('data-value');
    const {
      modalWrap,
      modalContactDropBtn,
      modalContactList,
      modalContactHiddenInput,
      modalContactInput,
    } = context; // получение необходимых элементов/сущностей (через деструктуризациию входящего/передаваемого объекта)

    const previousItemValue = modalContactHiddenInput.value; // фиксация скрытого значения

    // обработка смены/типа контакта (если/с одного "вдруг" на другой решили)
    if (
      !changeContactRowType(
        modalContactInput,
        selectedItemValue,
        previousItemValue
      )
    ) {
      return; // исключение корректировки, если/в confirm отмена
    }

    modalContactDropBtn.textContent = target.textContent;
    modalContactHiddenInput.value = selectedItemValue; // обновление данных в "скрытом" input (для последующей отправки на сервер)

    target.style.display = 'none'; // скрытие li/варианта в выпадающем списке (т.е. после выбора, отображения в drop-btn)

    // отображение/снова li/варианта (т.е. до этого скрытого)
    if (previousItemValue) {
      const previousItem = modalContactList.querySelector(
        `[data-value="${previousItemValue}"]`
      );
      if (previousItem) {
        previousItem.style.display = ''; // сброс display: none;
      }
    }

    updateRowInputType(modalContactInput, selectedItemValue); // обновление атрибута/значения "type" у/для инпута (кому возможно)
    updateDropItemPaddings(modalContactList); // обновление/изменение отступов для li/вариантов выпадающего списка (для первого и последнего элементов)
    closeBtnDropdown(modalWrap); // закрытие выпадающего списка

    // возврат класса/состояния "is-invalid" строке контакта, при смене типа контакта из drop-down меню (когда форма уже/в "was-submitted")
    const modalForm = modalWrap.querySelector('form');
    if (modalForm.classList.contains('was-submitted')) {
      const invalidFeed = modalContactInput
        .closest('.modal-contact-element')
        .querySelector('.invalid-feedback');

      // возврат/добавление "is-invalid", сообщения
      if (modalContactInput.value.trim() === '') {
        modalContactInput.classList.add('is-invalid');
        invalidFeed.textContent = 'Заполните поле контакта или удалите!';
      }
    }

    modalContactInput.focus(); // перевод фокуса на соседний инпут (после выбора в выпадающем списке)
  }

  // ** обновление атрибута/значения "type" у/для модального row-contact инпута (кому возможно, после выбора)
  function updateRowInputType(modalContactInput, contactType) {
    // объект для сопоставления (кому заменять, на какое значение)
    const typeMapping = {
      phone: 'tel',
      'extra-phone': 'tel',
      email: 'email',
    };

    // корректировка атрибута/значения "type" (или будет text)
    const newType = typeMapping[contactType] || 'text';
    modalContactInput.setAttribute('type', newType);
  }

  // ** обновление/изменение отступов у/для модального row-contact списка (для первого и последнего li/элементов)
  function updateDropItemPaddings(modalContactList) {
    Array.from(modalContactList.children).forEach((item) => {
      item.classList.remove('first-visible', 'last-visible'); // изначальная очистка от дополнительных классов
    });

    // фиксация li/вариантов находящихся "сейчас" в выпадающем списке
    const visibleDropItems = Array.from(modalContactList.children).filter(
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

  // ** организация закрытия/скрытия выпадающего row-contact списка в модальном окне (снятие фокуса)
  function closeBtnDropdown(modalWrap) {
    const openDropdownBtn = modalWrap.querySelector('.drop-open'); // фиксация "открывающей" drop-кнопки

    if (openDropdownBtn) {
      const dropdownList = openDropdownBtn.nextElementSibling; // фиксация выпадающего списка
      openDropdownBtn.classList.remove('arrow-rotate', 'drop-open'); // возврат направления стрелки, удаление "открывающего" класса
      dropdownList.classList.add('d-none'); // скрытие выпадающего списка
      openDropdownBtn.blur(); // снятие фокуса с кнопки (после выбора)
    }
  }

  // ** организация замены выбора/типа модального row-контакта, после начала/внесения данных в инпут (вывод уточняющего сообщения)
  function changeContactRowType(modalContactInput, newType, previousType) {
    const inputCurrentValue = modalContactInput.value.trim();

    // определение типов контактов, которые схожи/одного формата (замена без изменений)
    const phoneTypes = ['phone', 'extra-phone'];

    // проверка на схожий/один формат (просто сообщение о смене)
    if (phoneTypes.includes(previousType) && phoneTypes.includes(newType)) {
      if (inputCurrentValue) {
        alert(
          `Тип контакта: "${
            previousType === 'phone' ? 'Телефон' : 'Доп. телефон'
          }" меняется на "${newType === 'phone' ? 'Телефон' : 'Доп. телефон'}".`
        );
      }
      return true; // завершить без подтверждения
    }

    // если row-инпут не "пустой" запрос на подтверждение действий
    if (inputCurrentValue) {
      const userConfirmed = confirm(
        'Изменить тип контакта? Разные форматы! Внесённые ранее данные будут удалены.. продолжить?'
      );
      if (!userConfirmed) {
        return false; // отмена изменений
      }

      modalContactInput.value = ''; // очистка инпута
    }

    // очистка от уведомлений на некорректный ввод/валидации (от предыдущих типов, кроме схожих/телефонов)
    if (
      !phoneTypes.includes(newType) ||
      (phoneTypes.includes(newType) && !phoneTypes.includes(previousType))
    ) {
      const feedback = modalContactInput
        .closest('.modal-contact-element')
        .querySelector('.invalid-feedback');

      if (feedback) {
        feedback.textContent = ''; // удаление сообщений
      }
      modalContactInput.classList.remove('is-invalid'); // исключение классов ошибки
    }

    updateRowInputType(modalContactInput, newType); // обновление атрибута/значения "type" у/дя инпута (нового выбора)
    return true; // факт завершения
  }

  // ** удаление строки row-контакта в модальном окне (через "X" кнопку, с/без уточняющего сообщения)
  function deleteModalContactsElement(event, context = {}) {
    const clickedContactsXBtn = event.currentTarget; // получение ИМЕННО кнопки, а не/может внутренней иконки (согласно "размазанного" события)
    const { modalBodyAddBtn, modalBodyAddContactsRowWrap } = context; // получение необходимых элементов (через деструктуризациию входящего/передаваемого объекта)

    if (clickedContactsXBtn) {
      tippy.hideAll(); // предварительное скрытие всех/вдруг "активных" tooltips (перед удалением искомой строки)

      // фиксация родительского элемента/"всей" строки контакта
      const modalContactsElement = clickedContactsXBtn.closest(
        '.modal__body-add-contact-element'
      );
      // фиксация инпута в данной строке контакта (в родительском элементе)
      const currentInput = modalContactsElement.querySelector(
        '.modal__body-add-contact-input'
      );

      if (modalContactsElement) {
        // удаление/исключение привязанного tooltip (к конкретной строке/кнопке)
        if (clickedContactsXBtn._tippy) {
          clickedContactsXBtn._tippy.destroy();
        }

        const isCurrentInputFilled =
          currentInput && currentInput.value.trim() !== '';
        const isCurrentInputValid =
          currentInput && !currentInput.classList.contains('is-invalid');
        let confirmed = true; // изначально подтверждение/confirm не требуется

        if (isCurrentInputFilled && isCurrentInputValid) {
          confirmed = confirm('Вы действительно хотите удалить этот контакт?'); // если/есть валидные данные в инпуте, то тогда confirm/подтверждение при удалении (так, сразу удаление)
        }

        if (confirmed) {
          modalContactsElement.remove(); // удаление строки контактов

          // удаление строки контактов и из массива
          const contactIndex = modalContactsArr.indexOf(modalContactsElement);
          if (contactIndex > -1) modalContactsArr.splice(contactIndex, 1);

          // проверка на количество элементов в массиве, меньше 10.. возврат возможности прожатия кнопки "Добавить контакт"
          if (modalContactsArr.length < 10) {
            modalBodyAddBtn.disabled = false;
          }

          // проверка на количество строк контактов (нет, скрытие обвёртки/родителя и удаление дополнительных отступов)
          if (
            modalBodyAddContactsRowWrap.querySelectorAll(
              '.modal__body-add-contact-element'
            ).length === 0
          ) {
            modalBodyAddContactsRowWrap.classList.add('d-none');
            modalBodyAddBtn.classList.remove('modal-contact-btn-margin');
          }
        } else {
          currentInput.focus(); // возврат фокуса искомому инпуту (после отмены удаления в confirm)
        }
      }
    }
  }

  // ** проверка/последующее удаление незаполненных/невалидных row-контактов (при закрытии модального окна)
  function deleteModalRowContacts(context = {}) {
    const { modalWrap, modalBodyAddContactsRowWrap, modalBodyAddBtn } = context; // получение необходимых элементов (через деструктуризациию входящего/передаваемого объекта)

    if (!modalWrap) return; // если modalWrap "вообще" не определён, выход из функции

    const allContactRows = Array.from(
      modalWrap.querySelectorAll('.modal-contact-element') // фиксация всех строк контактов (если имеются)
    );

    // перебор полученных контактов (ряд дополнительных действий)
    allContactRows.forEach((contactRow) => {
      // отработка через задержку
      setTimeout(() => {
        const rowInput = contactRow.querySelector('.modal-contact-input'); // фиксация контактных инпутов

        // проверка/удаление только "пустых" и невалидных строк
        if (
          !rowInput ||
          rowInput.value.trim() === '' ||
          rowInput.classList.contains('is-invalid')
        ) {
          contactRow.remove();
          // обновление массива
          const contactIndex = modalContactsArr.indexOf(contactRow);
          if (contactIndex > -1) {
            modalContactsArr.splice(contactIndex, 1);
          }

          // проверка общего количества row-контактов
          if (modalContactsArr.length < 10) {
            modalBodyAddBtn.disabled = false; // разблокировка кнопки "Добавить контакт", если меньше 10 контактов
          }

          // скрытие "обвёртки" контактов если в массиве контактов пусто
          if (modalContactsArr.length === 0) {
            modalBodyAddContactsRowWrap.classList.add('d-none');
            modalBodyAddBtn.classList.remove('modal-contact-btn-margin'); // удаление дополнительных отступов
          }
        }
      }, 500); // минимальная задержка (чтобы не видеть удаления при анимации/закрытии)
    });
  }

  // ** дополнительная/местная организация логики для tooltips (т.е. помимо customTippy.js)
  function initTippy(selector, content, side) {
    // определение входящего элемента (селектор или DOM-элемент, поиск/корректировка)
    const elements =
      typeof selector === 'string'
        ? document.querySelectorAll(selector)
        : [selector];

    if (typeof tippy === 'function') {
      elements.forEach((el) => {
        if (!el._tippy) {
          tippy(el, {
            content,
            theme: 'main',
            delay: [50, 0],
            offset: [0, 13],
            placement: side,
            animation: 'scale', // анимация появления/скрытия (через дополнительный файл/подключение)
            trigger: 'mouseenter', // только по наведению мыши (исключение вывода по клику, в другом месте)

            onShow(instance) {
              setTimeout(() => instance.hide(), 1000); // автоматическое скрытие (по истечению времени)
            },

            // точечная корректировка стилей (для "стрелки" подсказки)
            onMount(instance) {
              const arrowElement =
                instance.popper.querySelector('.tippy-arrow');
              arrowElement.style.marginBottom = '-1px';
            },
          });
        }
      });
    } else {
      console.error('Tippy.js is not loaded!');
    }
  }

  // ** универсальная обработка модальных форм их "submit" событий, т.е. при добавление/изменении данных клиента (после валидаций, после проверки по ФИО)
  // ! за основу берётся students-db..

  //   const allFormInInputs = document.querySelectorAll(
  //     '.dboard__input-form input'
  //   );
  //
  //   // корректировка регистра, для полей Ф.И.О.
  //   function toUpFirstLetter(value) {
  //     if (!value) return ''; // если вдруг "пусто"
  //     return value[0].toUpperCase() + value.slice(1).toLowerCase();
  //   }
  //
  //   // проверка на совпадение по ФИО, в исходном/формирующемся массиве
  //   function checkStudentFIO(
  //     formInSurname,
  //     formInName,
  //     formInPatronymic,
  //     updateStudentsDataArr
  //   ) {
  //     return updateStudentsDataArr.some(
  //       (student) =>
  //         student.surname === formInSurname &&
  //         student.name === formInName &&
  //         student.patronymic === formInPatronymic
  //     );
  //   }
  //
  //   allFormInInputs.forEach((input) => {
  //     additionalFormInputsValidation(input); // !! дополнительная валидация (на корректный ввод)
  //   });

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

        // "дополнительная" проверка на наличие "invalid-feedback" у контактных инпутов (т.к. всё не просто с 'was-validated')
        const hasInvalidFeedback = Array.from(
          modalBodyForm.querySelectorAll('.modal__body-add-contact-input')
        ).some((input) => {
          const feedback =
            input.parentElement.querySelector('.invalid-feedback');
          return feedback && feedback.textContent.trim() !== '';
        });

        if (
          !modalBodyForm.checkValidity() ||
          validErrors.length > 0 ||
          hasInvalidFeedback
        ) {
          event.stopPropagation();
        } else {
          modalBodyForm.classList.add('was-validated'); // если всё "ок", т.е. нет ошибок, невалидных сообщений.. добавление всей форме валидационного класса (для/по Bootstrap)

          setTimeout(() => {
            alert('Клиент успешно добавлен!'); // вывод сообщения об успешном добавлении клиента

            // очистка всех полей формы (удаление классов/сообщений ошибок)
            allModalInputs.forEach((input) => {
              input.value = '';
              input.classList.remove('is-invalid');
            });
            modalBodyForm.classList.remove('was-validated'); // удаление класса "was-validated"

            // закрытие модального окна (через/посредствам Bootstrap API)
            const bootstrapModal = bootstrap.Modal.getInstance(
              modalBodyForm.closest('.modal')
            );
            if (bootstrapModal) {
              bootstrapModal.hide();
            }

            // и напоследок.. выделение/показ только что добавленного клиента/строки
            setTimeout(() => {
              // movingToLastNewTableRow();
            }, 300); // временная задержка, больше.. чтобы модальное окно успело закрыться
          }, 200);
        }
      },
      false
    );
  }
})();
