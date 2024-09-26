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

  // ** организация появления/скрытия поля для ввода данных/фильтрационного инпута (по нажатию на logo, на 320px)
  document
    .querySelector('.crm__search-logo-img')
    .addEventListener('click', () => {
      document
        .querySelector('.crm__search-data')
        .classList.toggle('show-search-input');
    });

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

  // ** организация валидации для ввода данных/фильтрационного инпута (для формы без submit)
  function searchFormInputValidation(input) {
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

  const searchFormInput = document.querySelector('.crm__search-form input'); // получение search-инпута
  searchFormInputValidation(searchFormInput);
})();
