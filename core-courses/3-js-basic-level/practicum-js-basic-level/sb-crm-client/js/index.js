(() => {
  // ** получение существующих, создание "новых" элементов (глобальное объявление)
  const crm = document.getElementById('crm');
  const crmSearch = document.getElementById('crm-search');
  const crmOutput = document.getElementById('crm-output');
  const crmAdd = document.getElementById('crm-add');

  // организация поля для поиска клиентов (фильтрация данных)
  const searchLogoWrap = document.createElement('div');
  const searchLogo = document.createElement('a');
  const searchLogoImg = document.createElement('img');
  const searchFormInputWrap = document.createElement('div');
  const searchForm = document.createElement('form');
  const searchInputWrap = document.createElement('div');
  const searchInput = document.createElement('input');
  const searchInputFeedback = document.createElement('div');

  searchLogoWrap.classList.add('crm__search-logo-wrap');
  searchLogo.classList.add('crm__search-logo');
  searchLogoImg.classList.add('crm__search-logo-img');
  searchFormInputWrap.classList.add('crm__search-form-input-wrap');
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
  searchForm.setAttribute('action', '#');
  searchForm.setAttribute('novalidate', '');
  searchInput.setAttribute('type', 'text');
  searchInput.setAttribute('pattern', '[А-Яа-яЁё\\-]+');
  searchInput.setAttribute('placeholder', 'Введите запрос');
  searchInput.setAttribute('required', '');

  searchLogo.append(searchLogoImg);
  searchLogoWrap.append(searchLogo);
  searchInputWrap.append(searchInput, searchInputFeedback);
  searchForm.append(searchInputWrap);
  searchFormInputWrap.append(searchForm);
  crmSearch.append(searchLogoWrap, searchFormInputWrap);

  // организация таблицы данных о клиентах (структура, заголовки колонок)
  const outputTitle = document.createElement('h2');
  const outputTable = document.createElement('table');
  const outputTableHead = document.createElement('thead');
  const outputTableBody = document.createElement('tbody');
  const oTableHeadTr = document.createElement('tr');
  const oTableHeadThId = document.createElement('th');
  const oTableHeadThFIO = document.createElement('th');
  const oTableHeadThCreationDT = document.createElement('th');
  const oTableHeadThChanges = document.createElement('th');
  const oTableHeadThContacts = document.createElement('th');
  const oTableHeadThActions = document.createElement('th');

  outputTitle.classList.add('crm__output-title');
  outputTable.classList.add('crm__output-table', 'table', 'table-hover');
  outputTableHead.classList.add('crm__output-table-head');
  outputTableBody.classList.add('crm__output-table-body');
  oTableHeadTr.classList.add('crm__o-table-head-row');
  oTableHeadThId.classList.add('crm__o-table-head-cell');
  oTableHeadThFIO.classList.add('crm__o-table-head-cell');
  oTableHeadThCreationDT.classList.add('crm__o-table-head-cell');
  oTableHeadThChanges.classList.add('crm__o-table-head-cell');
  oTableHeadThContacts.classList.add('crm__o-table-head-cell');
  oTableHeadThActions.classList.add('crm__o-table-head-cell');

  oTableHeadThId.setAttribute('id', 'table-th-id');
  oTableHeadThId.setAttribute('tabindex', '0');
  oTableHeadThFIO.setAttribute('id', 'table-th-fio');
  oTableHeadThFIO.setAttribute('tabindex', '0');
  oTableHeadThCreationDT.setAttribute('id', 'table-th-dt');
  oTableHeadThCreationDT.setAttribute('tabindex', '0');
  oTableHeadThChanges.setAttribute('id', 'table-th-change');
  oTableHeadThChanges.setAttribute('tabindex', '0');
  oTableHeadThContacts.setAttribute('id', 'table-th-contact');
  oTableHeadThContacts.setAttribute('tabindex', '0');
  oTableHeadThActions.setAttribute('id', 'table-th-action');
  oTableHeadThActions.setAttribute('tabindex', '0');

  outputTitle.textContent = 'Клиенты';
  oTableHeadThId.textContent = 'ID';
  oTableHeadThFIO.textContent = 'Фамилия Имя Отчество';
  oTableHeadThCreationDT.textContent = 'Дата и время создания';
  oTableHeadThChanges.textContent = 'Последние изменения';
  oTableHeadThContacts.textContent = 'Контакты';
  oTableHeadThActions.textContent = 'Действия';

  oTableHeadTr.append(
    oTableHeadThId,
    oTableHeadThFIO,
    oTableHeadThCreationDT,
    oTableHeadThChanges,
    oTableHeadThContacts,
    oTableHeadThActions
  );
  outputTableHead.append(oTableHeadTr);
  outputTable.append(outputTableHead, outputTableBody);
  crmOutput.append(outputTitle, outputTable);

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

  const searchFormInput = document.querySelector('.crm__search-form input'); // получение search-инпута
  searchFormInputValidation(searchFormInput);
})();
