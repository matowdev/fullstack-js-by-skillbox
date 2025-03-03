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
  searchInput.setAttribute('placeholder', 'Введите запрос.. ФИО');
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
  const outputTableWrap = document.createElement('div');
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
  outputTableWrap.classList.add('crm__output-table-wrap', 'table-responsive');
  outputTable.classList.add('crm__output-table', 'table', 'table-hover');
  outTableHead.classList.add('crm__output-table-head');
  outTableBody.classList.add('crm__output-table-body');
  outTblHeadTr.classList.add('crm__output-table-head-row');
  outTblHeadThId.classList.add(
    'crm__output-table-head-cell',
    'head-cell',
    'head-cell-with-icon'
  );
  outTblHeadThIdWrap.classList.add('head-cell__wrap', 'head-cell__wrap-id');
  outTblHeadThIdText.classList.add('head-cell__text', 'head-cell__text-id');
  outTblHeadThIdIcon.classList.add(
    'head-cell__icon',
    'head-cell__icon-id',
    'head-cell__icon-up'
  );
  outTblHeadThFIO.classList.add(
    'crm__output-table-head-cell',
    'head-cell',
    'head-cell-with-icon'
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
    'crm__output-table-head-cell',
    'head-cell',
    'head-cell-with-icon'
  );
  outTblHeadThDTWrap.classList.add('head-cell__wrap', 'head-cell__wrap-dt');
  outTblHeadThDTText.classList.add('head-cell__text', 'head-cell__text-dt');
  outTblHeadThDTIcon.classList.add(
    'head-cell__icon',
    'head-cell__icon-dt',
    'head-cell__icon-down'
  );
  outTblHeadThChanges.classList.add(
    'crm__output-table-head-cell',
    'head-cell',
    'head-cell-with-icon'
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
    'crm__output-table-head-cell',
    'head-cell'
  );
  outTblHeadThContactWrap.classList.add(
    'head-cell__wrap',
    'head-cell__wrap-contact'
  );
  outTblHeadThContactText.classList.add(
    'head-cell__text',
    'head-cell__text-contact'
  );
  outTblHeadThActions.classList.add('crm__output-table-head-cell', 'head-cell');
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
  outputTableWrap.append(outputTable);
  crmOutputContainer.append(outputTitleWrap, outputTableWrap);

  // ** появление/скрытие поля для ввода данных/фильтрационного инпута (по нажатию на logo, на 320px)
  searchLogoImg.addEventListener('click', () => {
    document
      .querySelector('.crm__search-data')
      .classList.toggle('show-search-input');
  });

  // TODO: что бы перейти на "полностью" [СЕРВЕРНУЮ] логику/обратно.. нужно пошагово просмотреть весь файл и раскомментировать закомментированный код, при этом комментируя/удаляя код/строки помеченные, как [FOR DEMO - sessionStorage] в полном объёме (т.е. некоторые инициализации переменных, доп. функций проводились каждой логике свои)

  // ** [СЕРВЕР] организация запроса, получение данных/списка клиентов с сервера (корректировка входящих данных)
  // ?? следует раскомментировать (полностью)
  //   let clientsDataArrWithIds;
  //
  //   async function getClientsServerListData() {
  //     try {
  //       const response = await fetch('http://localhost:3000/api/clients'); // запрос на сервер
  //
  //       // проверка успешности/выполнения запроса
  //       if (!response.ok) {
  //         throw new Error(`Ошибка: ${response.status}!`);
  //       }
  //
  //       const data = await response.json(); // преобразование данных в JSON-формат
  //       clientsDataArrWithIds = addLocalIdsToClients(data); // добавление поля localId
  //
  //       if (clientsDataArrWithIds.length > 0) {
  //         addClientsToTable(clientsDataArrWithIds); // отрисовка данных, наполнение таблицы клиентов
  //       } else {
  //         outTableBody.append(createEmptyTableMessageRow()); // если данных нет, вывод/добавление строки-сообщения
  //       }
  //     } catch (error) {
  //       console.error('Не удалось загрузить список клиентов..', error);
  //       outTableBody.innerHTML = ''; // очистка таблицы
  //       outTableBody.append(createEmptyTableMessageRow()); // если ошибка, вывод/добавление строки-сообщения
  //     }
  //   }
  //
  //   // добавление поля localId (необходимого/возможно, для дальнейших отработок)
  //   function addLocalIdsToClients(clientsFromServer) {
  //     return clientsFromServer.map((client, index) => ({
  //       ...client, // сохранение приходящих/серверных полей
  //       localId: index + 1, // добавление localId
  //     }));
  //   }
  //
  //   getClientsServerListData(); // получение данных о клиентах (с сервера)

  // !! [FOR DEMO - sessionStorage] фиксация исходных данных/серверных данных, для сохранения в sessionStorage
  let clientsDataArrWithIds;
  let updateClientsDataArr = [];
  let clientsServerDataArr = []; // потом/будет использоваться для генерации storage ID

  async function addClientsDataToStorage() {
    try {
      // ! запрос на RENDER-сервер (а не на локальный, согласно маршрута.. ВНИМАНИЕ)
      const response = await fetch(
        'https://skillbus-crm.onrender.com/api/clients'
      );

      // проверка успешности/выполнения запроса
      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}!`);
      }

      const data = await response.json(); // преобразование данных в JSON-формат
      sessionStorage.setItem('demoClients', JSON.stringify(data)); // добавление/сохранение в Session storage

      clientsServerDataArr = data; // "дополнительно" фиксируем входящий серверный массив

      return data; // возврат массива данных
    } catch (error) {
      console.error('Ошибка загрузки списка клиентов с сервера!', error);
      return []; //  если ошибка возврат "пустого" массива
    }
  }

  // !! [FOR DEMO - sessionStorage] получение данных/списка из Session storage (корректировка входящих данных)
  async function getClientsListDataFromStorage() {
    let savedClients = await addClientsDataToStorage(); // получение данных из Session storage

    // обновление Session storage
    sessionStorage.setItem('demoClients', JSON.stringify(savedClients));

    // корректировка данных (добавление поля localId)
    clientsDataArrWithIds = savedClients || [];
    updateClientsDataArr = addLocalIdsToClients(clientsDataArrWithIds);

    if (updateClientsDataArr.length > 0) {
      addClientsToTable(updateClientsDataArr); // отрисовка данных, наполнение таблицы клиентов
    } else {
      outTableBody.append(createEmptyTableMessageRow()); // если ошибка, вывод/добавление строки-сообщения
    }
  }

  // !! [FOR DEMO - sessionStorage] добавление поля localId (необходимого/возможно, для дальнейших отработок)
  function addLocalIdsToClients(clientsFromServer) {
    return clientsFromServer.map((client, index) => ({
      ...client, // сохранение приходящих/серверных полей
      localId: index + 1, // добавление localId
    }));
  }

  // !! [FOR DEMO - sessionStorage]
  getClientsListDataFromStorage(); // получение данных о клиентах (из Session storage)

  // ** наполнение таблицы данных о клиентах (согласно откорректированного/формирующегося массива)
  // ?? следует раскомментировать
  // let updateClientsDataArr = [];

  function addClientsToTable(clientsServerData = []) {
    outTableBody.innerHTML = ''; // предварительная очистка таблицы
    updateClientsDataArr = correctInitArr(clientsServerData);

    if (updateClientsDataArr.length === 0) {
      const emptyTableRow = createEmptyTableMessageRow(); // если массив клиентов/таблица данных пуста, вывод сообщения
      outTableBody.append(emptyTableRow);
    } else {
      for (const client of updateClientsDataArr) {
        const clientTableTrRow = createClientsTableTrRow(client); // создание элементов/строк таблицы, наполнение
        outTableBody.append(clientTableTrRow);
      }
    }
  }

  // ** корректировка исходного/серверного массива клиентов (обработка ID, добавление свойства fullName и временных свойств)
  function correctInitArr(clientsServerData = []) {
    const newClientsDataArr = structuredClone(clientsServerData); // клонирование входящего массива (серверного)

    for (const client of newClientsDataArr) {
      client.shortId = client.id.slice(-6); // сокращение серверного ID (до 6 цифр)
      client.fullName = `${client.surname} ${client.name} ${client.patronymic}`; // получение "общего" fullName

      // преобразование серверных "createdAt" и "updatedAt" в отдельные поля, как даты и времени
      if (client.createdAt) {
        const createdAtDate = conversionStringDate(client.createdAt);
        client.createdAtDate = createdAtDate.toLocaleDateString('ru-RU'); // дата создания
        client.createdAtTime = createdAtDate.toLocaleTimeString('ru-RU', {
          hour: '2-digit',
          minute: '2-digit',
        }); // время создания
      }

      if (client.updatedAt) {
        const updatedAtDate = conversionStringDate(client.updatedAt);
        client.updatedAtDate = updatedAtDate.toLocaleDateString('ru-RU'); // дата изменений
        client.updatedAtTime = updatedAtDate.toLocaleTimeString('ru-RU', {
          hour: '2-digit',
          minute: '2-digit',
        }); // время изменений
      }
    }

    return newClientsDataArr; // передача откорректированного/дополненного массива
  }

  // ** преобразование строковой даты в объект Date
  function conversionStringDate(dateString) {
    return new Date(dateString); // возврат "полноценного" объекта Date
  }

  // ** создание "пустой" строки для таблицы клиентов (при/для фильтрации, пустом массиве)
  function createEmptyTableMessageRow() {
    const emptyTableTrRow = document.createElement('tr');
    const emptyTableTdCell = document.createElement('td');

    emptyTableTrRow.classList.add('crm__output-table-body-empty-row');

    emptyTableTdCell.colSpan = 6; // объединение всех колонок
    emptyTableTdCell.textContent =
      'Пусто.. измените фильтрацию, добавьте клиента!? Запустите сервер?';
    emptyTableTdCell.style.fontWeight = '500';
    emptyTableTdCell.style.fontSize = '16px';
    emptyTableTdCell.style.color = '#dc3545';
    emptyTableTdCell.style.textAlign = 'center';
    emptyTableTrRow.append(emptyTableTdCell);

    return emptyTableTrRow;
  }

  // ** создание элементов/строк таблицы данных о клиентах (заполнение ячеек)
  function createClientsTableTrRow(client = {}) {
    const clientTableTr = document.createElement('tr');
    const clientTdID = document.createElement('td');
    const clientTdFIO = document.createElement('td');
    const clientTdCreateDateTime = document.createElement('td');
    const clientTdCreateDateTimeWrap = document.createElement('div');
    const clientTdCreateDate = document.createElement('span');
    const clientTdCreateTime = document.createElement('span');
    const clientTdUpdateDateTime = document.createElement('td');
    const clientTdUpdateDateTimeWrap = document.createElement('div');
    const clientTdUpdateDate = document.createElement('span');
    const clientTdUpdateTime = document.createElement('span');
    const clientTdContacts = document.createElement('td');
    const clientTdContactsWrap = document.createElement('div');
    const clientTdContactsList = createContactsCell(client.contacts); // динамическое создание/наполнение ячейки (с ul/li, ссылками, иконками)
    const clientTdActionsBtns = document.createElement('td');
    const clientTdActionsBtnsWrap = document.createElement('div');
    const clientTdActionsBtnEdit = document.createElement('button');
    const clientTdActionsBtnEditIconPen = document.createElement('i');
    const clientTdActionsBtnEditIconLap = document.createElement('i');
    const clientTdActionsBtnDelete = document.createElement('button');
    const clientTdActionsBtnDeleteIconX = document.createElement('i');
    const clientTdActionsBtnDeleteIconLap = document.createElement('i');

    clientTableTr.classList.add('crm__output-table-body-row');
    clientTdID.classList.add('crm__output-table-body-cell_id');
    clientTdFIO.classList.add('crm__output-table-body-cell_fio');
    clientTdCreateDateTime.classList.add(
      'crm__output-table-body-cell_crt-d-time'
    );
    clientTdCreateDateTimeWrap.classList.add(
      'crm__output-table-body-cell_crt-d-time-wrap'
    );
    clientTdCreateDate.classList.add('crm__output-table-body-cell_crt-date');
    clientTdCreateTime.classList.add('crm__output-table-body-cell_crt-time');
    clientTdUpdateDateTime.classList.add(
      'crm__output-table-body-cell_chg-d-time'
    );
    clientTdUpdateDateTimeWrap.classList.add(
      'crm__output-table-body-cell_chg-d-time-wrap'
    );
    clientTdUpdateDate.classList.add('crm__output-table-body-cell_chg-date');
    clientTdUpdateTime.classList.add('crm__output-table-body-cell_chg-time');
    clientTdContacts.classList.add('crm__output-table-body-cell_contacts');
    clientTdContactsWrap.classList.add(
      'crm__output-table-body-cell_contacts-wrap'
    );
    clientTdContactsList.classList.add(
      'crm__output-table-body-cell_contacts-list'
    );
    clientTdActionsBtns.classList.add(
      'crm__output-table-body-cell_actions-btns'
    );
    clientTdActionsBtnsWrap.classList.add(
      'crm__output-table-body-cell_actions-btns-wrap'
    );
    clientTdActionsBtnEdit.classList.add(
      'crm__output-table-body-cell_actions-btn-edit',
      'table-row-btn',
      'table-row-btn-edit'
    );
    clientTdActionsBtnEditIconPen.classList.add(
      'crm__output-table-body-cell_actions-btn-edit-icon-pen',
      'table-row-btn-icon',
      'bi',
      'bi-pencil-fill'
    );
    clientTdActionsBtnEditIconLap.classList.add(
      'crm__output-table-body-cell_actions-btn-edit-icon-lap',
      'table-row-btn-icon',
      'bi',
      'bi-download'
    );
    clientTdActionsBtnDelete.classList.add(
      'crm__output-table-body-cell_actions-btn-delete',
      'table-row-btn',
      'table-row-btn-delete'
    );
    clientTdActionsBtnDeleteIconX.classList.add(
      'crm__output-table-body-cell_actions-btn-delete-icon-x',
      'table-row-btn-icon',
      'bi',
      'bi-x-circle'
    );
    clientTdActionsBtnDeleteIconLap.classList.add(
      'crm__output-table-body-cell_actions-btn-delete-icon-lap',
      'table-row-btn-icon',
      'bi',
      'bi-upload'
    );

    clientTableTr.setAttribute('id', `body-row-${client.localId}`); // добавление строчного ID (исходя из локального ID клиента (не серверного))
    clientTableTr.setAttribute('data-server-id', `${client.id}`); // добавление серверного ID
    clientTableTr.setAttribute('tabindex', '0');

    clientTdID.textContent = client.shortId;
    clientTdFIO.textContent = client.fullName;
    clientTdCreateDate.textContent = client.createdAtDate;
    clientTdCreateTime.textContent = client.createdAtTime;
    clientTdUpdateDate.textContent = client.updatedAtDate;
    clientTdUpdateTime.textContent = client.updatedAtTime;
    clientTdActionsBtnEdit.textContent = 'Изменить';
    clientTdActionsBtnDelete.textContent = 'Удалить';

    clientTdActionsBtnEdit.append(
      clientTdActionsBtnEditIconPen,
      clientTdActionsBtnEditIconLap
    );
    clientTdActionsBtnDelete.append(
      clientTdActionsBtnDeleteIconX,
      clientTdActionsBtnDeleteIconLap
    );

    clientTdCreateDateTimeWrap.append(clientTdCreateDate, clientTdCreateTime);
    clientTdUpdateDateTimeWrap.append(clientTdUpdateDate, clientTdUpdateTime);
    clientTdContactsWrap.append(clientTdContactsList);
    clientTdActionsBtnsWrap.append(
      clientTdActionsBtnEdit,
      clientTdActionsBtnDelete
    );

    clientTdCreateDateTime.append(clientTdCreateDateTimeWrap);
    clientTdUpdateDateTime.append(clientTdUpdateDateTimeWrap);
    clientTdContacts.append(clientTdContactsWrap);
    clientTdActionsBtns.append(clientTdActionsBtnsWrap);

    clientTableTr.append(
      clientTdID,
      clientTdFIO,
      clientTdCreateDateTime,
      clientTdUpdateDateTime,
      clientTdContacts,
      clientTdActionsBtns
    );

    return clientTableTr;
  }

  // ** организация "динамического" наполнения ячейки контактов (в строке/таблице о клиентах)
  function createContactsCell(contacts = []) {
    const contactsList = document.createElement('ul');

    // подготовка иконок, ссылок (для последующего формирования "li" элементов)
    const contactIconsLinks = {
      phone: { icon: 'bi-telephone-fill', linkPrefix: 'tel:' },
      'extra-phone': { icon: 'bi-telephone-plus-fill', linkPrefix: 'tel:' },
      email: { icon: 'bi-envelope-at-fill', linkPrefix: 'mailto:' },
      vk: { icon: 'bi-person-rolodex', linkPrefix: 'https://vk.com/' },
      facebook: { icon: 'bi-facebook', linkPrefix: 'https://facebook.com/' },
      twitter: { icon: 'bi-twitter', linkPrefix: 'https://twitter.com/' },
      'extra-contact': { icon: 'bi-send-plus', linkPrefix: '' },
    };

    // проверка, создание/наполнение "li" элементов (согласно объекта данных)
    if (contacts.length === 0) {
      const emptyLi = document.createElement('li');
      emptyLi.classList.add('crm__output-table-body-cell_contacts-empty-item');
      emptyLi.innerHTML = `<i class="crm__output-table-body-cell_contacts-empty-item-i table-row-contacts-icon bi bi-dash-lg"></i>`;
      contactsList.append(emptyLi);
    } else {
      // соблюдение порядка отображения контактов ("строго" как в drop-down меню, так и будет в ячейке/таблице)
      contacts.sort((a, b) => {
        const order = [
          'phone',
          'extra-phone',
          'email',
          'vk',
          'facebook',
          'twitter',
          'extra-contact',
        ];
        return order.indexOf(a.type) - order.indexOf(b.type);
      });

      contacts.forEach(({ type, value }) => {
        const contactData =
          contactIconsLinks[type] || contactIconsLinks['extra-contact'];
        const contactLi = document.createElement('li');
        contactLi.classList.add('crm__output-table-body-cell_contacts-item');

        const contactLink = document.createElement('a');
        contactLink.classList.add(
          'crm__output-table-body-cell_contacts-item-link'
        );
        contactLink.href = contactData.linkPrefix + value;

        // если email, открытие окна сразу для написания письма
        if (type === 'email') {
          contactLink.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${value}`;
        } else {
          contactLink.href = contactData.linkPrefix + value;
        }

        // исключение действий для/с дополнительными контактами
        if (type === 'extra-contact') {
          contactLink.href = 'javascript:void(0);'; // исключение перехода
          contactLink.addEventListener('click', (event) =>
            event.preventDefault()
          ); // отмена кликов
        }

        contactLink.setAttribute('target', '_blank');

        contactLink.innerHTML = `<i class="crm__output-table-body-cell_contacts-item-i table-row-contacts-icon bi ${contactData.icon}"></i>`;

        // вызов/инициализация tooltips
        tippy(contactLi, {
          content: `<span style="color: #B89EFF; font-weight: bold;">${
            type.charAt(0).toUpperCase() + type.slice(1)
          }:</span>
          <span style="color: #fff;">${value}</span>`,
          allowHTML: true, // возможность использовать HTML-теги внутри tooltip структуры
          theme: 'main',
          offset: [0, 8],
          placement: 'top',
          animation: 'scale', // анимация появления/скрытия (через дополнительный файл/подключение)
          trigger: 'mouseenter', // только по наведению мыши (исключение вывода по клику, в другом месте)

          onShow(instance) {
            setTimeout(() => {
              instance.hide(); // автоматическое скрытие (по истечению времени)
            }, 2000);
          },

          // точечная корректировка стилей (для "стрелки" подсказки)
          onMount(instance) {
            const arrowElement = instance.popper.querySelector('.tippy-arrow');
            arrowElement.style.marginBottom = '-1px';
          },
        });

        contactLi.append(contactLink);
        contactsList.append(contactLi);
      });
    }

    return contactsList; // возврат списка контактов/ячейки
  }

  // ** редактирование данных клиента, элементов/строк таблицы (через "Изменить" кнопку)
  const getOutputTable = document.querySelector('.crm__output-table');

  function editClientByBtn(event) {
    const row = event.target.closest('tr'); // фиксация всей строки
    if (!row || !event.target.classList.contains('table-row-btn-edit')) return; // не нашли, возврат

    const clientServerId = row.getAttribute('data-server-id'); // фиксация серверного id (из атрибута)

    // определение клиента в "общем" массиве клиентов
    const clientData = updateClientsDataArr.find(
      (client) => client.id === clientServerId
    );
    if (!clientData) {
      console.error(`Ошибка: клиент с ID ${clientServerId} не найден!`);
      return;
    }

    const modalWrap = createModalWindowByType('edit', clientData); // создание "универсального" модального окна (согласно передаваемого типа)

    // фиксация элементов формы
    const inputSurname = modalWrap.querySelector('.modal-surname-input');
    const inputName = modalWrap.querySelector('.modal-name-input');
    const inputPatronymic = modalWrap.querySelector('.modal-patronymic-input');
    const addContactBtn = modalWrap.querySelector('.modal__body-add-btn');

    if (!addContactBtn) {
      console.error('Ошибка: Кнопка "Добавить контакт" не найдена!');
      return;
    }

    // восстановление ФИО
    if (inputSurname) inputSurname.value = clientData.surname || '';
    if (inputName) inputName.value = clientData.name || '';
    if (inputPatronymic) inputPatronymic.value = clientData.patronymic || '';

    // восстановление списка контактов (как бы через прожатие "Добавить контакт")
    if (clientData.contacts && clientData.contacts.length > 0) {
      clientData.contacts.forEach((contact) => {
        addContactBtn.click();

        const lastContact = modalContactsArr[modalContactsArr.length - 1]; // фиксация "крайнего" контакта

        if (!lastContact) {
          console.error('Ошибка: Не удалось создать строку контакта!');
          return;
        }

        // обновление контактных данных
        const dropBtn = lastContact.querySelector(
          '.modal__body-add-contact-drop-btn'
        );
        const hiddenInput = lastContact.querySelector(
          '.modal__body-add-hidden-input'
        );
        const contactInput = lastContact.querySelector(
          '.modal__body-add-contact-input'
        );

        if (dropBtn && hiddenInput && contactInput) {
          dropBtn.textContent = convertContactTypeToText(contact.type); // определение типа контакта (для/в drop-down)
          hiddenInput.value = contact.type;
          contactInput.value = contact.value || '';
        } else {
          console.error('Ошибка: Ожидаемые элементы контакта не найдены!');
        }
      });
    }

    crmAddContainer.append(modalWrap); // добавление модального окна

    // инициализация модального окна, через Bootstrap API
    const bootstrapModal = new bootstrap.Modal(modalWrap);
    bootstrapModal.show();

    // добавление валидации для вводимых/корректируемых данных/в модальном окне (для "основных" инпутов, ФИО)
    const allModalBodyFormInputs =
      modalWrap.querySelectorAll('.modal__body-input');
    mainInputsValidation(allModalBodyFormInputs, {
      allowOnlyRussian: true,
      singleHyphen: true,
      noExtraSpaces: true,
    });

    // принудительное удаление атрибута aria-hidden="true" с модального окна (исключение ошибки с ARIA)
    deleteAriaHiddenTrue(modalWrap);
  }

  // добавление обработчика события на таблицу (редактирование данных)
  getOutputTable.addEventListener('click', editClientByBtn);

  // определение типа контакта, для отображения в drop-down кнопке контакта (при восстановлении данных)
  function convertContactTypeToText(type) {
    const typeMap = {
      phone: 'Телефон',
      'extra-phone': 'Доп. телефон',
      email: 'Email',
      vk: 'Vk',
      facebook: 'Facebook',
      twitter: 'Twitter',
      'extra-contact': 'Доп. контакт',
    };

    return typeMap[type] || 'Телефон';
  }

  // ** удаление элементов/строк таблицы данных о клиентах (через "Удалить" кнопку)
  function deleteBodyRowsByBtn(event) {
    const row = event.target.closest('tr'); // фиксация всей строки

    if (!row || !event.target.classList.contains('table-row-btn-delete'))
      return; // не нашли, возврат

    const clientServerId = row.getAttribute('data-server-id'); // фиксация серверного id (из атрибута)

    if (!clientServerId) {
      console.error('Ошибка: отсутствует ID клиента для удаления!');
      return; // нет ID или не корректен, возврат
    }

    // вызов/создание "отдельного" модального окна, для последующего удаления клиента/строки
    const deleteModal = createDeleteModalWindow(clientServerId);
    document.body.append(deleteModal);
    // инициализация модального окна, через Bootstrap API
    const modalInstance = new bootstrap.Modal(deleteModal);
    modalInstance.show(); // отображение

    // принудительное удаление атрибута aria-hidden="true" с модального окна (исключение ошибки с ARIA)
    deleteAriaHiddenTrue(deleteModal);
  }

  // добавление обработчика события на таблицу (удаление строки)
  getOutputTable.addEventListener('click', deleteBodyRowsByBtn);

  // ** удаление элементов/строк таблицы данных о клиентах (ОБЩАЯ ЛОГИКА)
  async function deleteBodyRowsClients(
    clientsServerIdsToDelete,
    currentBtn = null
  ) {
    // если кнопка передаётся, снятие фокуса (после прожатия)
    if (currentBtn) {
      currentBtn.blur();
    }

    // ?? следует раскомментировать
    // clientsServerIdsToDelete.forEach(async (serverId) => {
    //   await deleteClientsFromServer(serverId); // удаление клиентов с сервера по серверным ID
    // });

    updateClientsDataArr = updateClientsDataArr.filter(
      (client) => !clientsServerIdsToDelete.includes(client.id)
    ); // обновление массива

    // изменение/корректировка локальных ID оставшихся клиентов (для корректной сортировки после добавления "новых" клиентов)
    updateClientsDataArr.forEach((client, index) => {
      client.localId = index + 1;
    });

    // !! [FOR DEMO - sessionStorage] ..одна строчка
    sessionStorage.setItem('demoClients', JSON.stringify(updateClientsDataArr)); // обновление данных в Session storage

    addClientsToTable(updateClientsDataArr); // обновление таблицы клиентов (пере-компоновка) после удаления
  }

  // ** [СЕРВЕР] организация удаления клиентов с сервера (согласно серверных id)
  // ?? следует раскомментировать (полностью)
  //   async function deleteClientsFromServer(serverId) {
  //     try {
  //       const response = await fetch(
  //         `http://localhost:3000/api/clients/${serverId}`,
  //         {
  //           method: 'DELETE',
  //         }
  //       );
  //
  //       if (!response.ok) {
  //         throw new Error(`Ошибка при удалении клиента: ${response.status}`);
  //       }
  //
  //       // await getClientsServerListData(); // обновление списка клиентов после удаления (комментировалась не при/для [FOR DEMO - sessionStorage].. а ранее)
  //     } catch (error) {
  //       console.error('Ошибка при удалении клиента с сервера..', error);
  //       alert('Не удалось удалить клиента с сервера!');
  //     }
  //   }

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
                const invalidCharacters = /[=+,`;~!?%#№$^&:{}()<>|"'*/\\]/g;

                if (invalidCharacters.test(target.value)) {
                  errors.push(
                    'Введите корректную почту, например: example_123@gmail.com'
                  );
                  target.classList.add('is-invalid');
                  invalidFeed.textContent =
                    'Введите корректную почту, например: example_123@gmail.com';
                }

                target.value = target.value.replace(invalidCharacters, '');

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

    // инициализация модального окна, через Bootstrap API
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
    modalHeaderClientId.textContent = `ID: ${
      clientData.id ? String(clientData.id).slice(-6) : ''
    }`; // "вытягивается" из входящего объекта
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

    // корректировка Bootstrap атрибута для кнопки "Отмена/Удалить клиента" (т.к. при "edit" нужны другие действия)
    if (type === 'edit') {
      modalFooterCancelBtn.removeAttribute('data-bs-dismiss');
    }

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
        modalType: type, // передача типа модального окна (или "add" / или "edit")
        initialData: clientData, // передача копии исходных данных клиента (с сервера)
      };

      // проверка на наличие "валидных" данных в инпутах: основных, контактных / проверка на изменение клиентских данных при "edit" (хотя бы в одном.. отработка confirm)
      const hasAnyChangeData = checkModalInputsBeforeClose(event, context);

      // если/там "cancel" в confirm, перевод focus на кнопку "Сохранить"
      if (!hasAnyChangeData) {
        return; // т.е. без/вообще удалений инпутов (и "пустые" и не валидные остаются.. пока)
      }

      // если/там "ок" в confirm, отработка удаления и "пустых", и невалидных контактов (если такие были)
      deleteModalRowContacts(context);
    });

    // корректировка z-index у/для drop-btn кнопки
    correctDropDownZIndex(modalWrap);

    // очистка массива после закрытия модального окна
    modalWrap.addEventListener('hidden.bs.modal', () => {
      modalContactsArr = [];
    });

    // обработка "submit" события для формы (общая валидация, ряд действий)
    handleModalFormSubmit({ modalBodyForm, type, clientData });

    // организация удаления клиента/строки, через внутреннюю кнопку "Удалить клинта" (при "edit" модальном окне)
    if (type === 'edit') {
      modalFooterCancelBtn.addEventListener('click', async (event) => {
        event.preventDefault(); // исключение закрытия модального окна

        const clientServerId = clientData.id; // фиксация серверного ID клиента
        if (!clientServerId) {
          console.error('Ошибка: отсутствует ID клиента для удаления!');
          return;
        }

        // вызов "confirm" для подтверждения удаления
        const confirmed = confirm('Вы уверены, что хотите удалить клиента?');
        if (!confirmed) {
          return;
        }

        // отработка удаления клиента/строки
        await deleteBodyRowsClients([clientServerId], event.target);

        // закрытие модального окна после удаления
        const modalInstance = bootstrap.Modal.getInstance(modalWrap);
        if (modalInstance) {
          modalInstance.hide();
        }
      });
    }

    return modalWrap; // возврат модального окна (т.е. здесь/без добавления в DOM.. позже, при клике)
  }

  // ** создание "отдельного" модального окна, для удаления клиента из таблицы (при прожатии "Удалить" кнопки)
  function createDeleteModalWindow(clientId) {
    const deleteModalWrap = document.createElement('div');
    deleteModalWrap.classList.add(
      'modal-delete',
      'crm__delete-modal-wrap',
      'modal',
      'fade'
    );
    deleteModalWrap.setAttribute('id', 'modal-delete-client');
    deleteModalWrap.setAttribute('tabindex', '-1');

    deleteModalWrap.innerHTML = `
      <div class="modal-delete__dialog modal-dialog">
        <div class="modal-delete__content-wrap modal-content">
          <div class="modal-delete__header modal-header">
            <h2 class="modal-delete__header-title modal-title">Удалить клиента</h2>
            <button class="modal-delete__header-x-btn btn-close" data-bs-dismiss="modal" type="button" aria-label="Закрыть"></button>
          </div>
          <div class="modal-delete__body modal-body">
            <p class="modal-delete__body-text">Вы действительно хотите удалить данного клиента?</p>
          </div>
          <div class="modal-delete__footer modal-footer">
            <div class="modal-delete__footer-btns-wrap">
              <button class="modal-delete__footer-delete-btn modal-delete-btn" id="modal-footer-delete-btn" type="button">Удалить</button>
              <button class="modal-delete__footer-cancel-btn modal-delete-btn" id="modal-footer-cancel-btn" type="button" data-bs-dismiss="modal">Отмена</button>
            </div>
          </div>
        </div>
      </div>
    `;

    // фиксация внутренней "свеже" созданной "X" кнопки
    const deleteModalXBtn = deleteModalWrap.querySelector(
      '.modal-delete__header-x-btn'
    );
    // фиксация внутренней "свеже" созданной "Удалить" кнопки
    const deleteModalBtn = deleteModalWrap.querySelector(
      '.modal-delete__footer-delete-btn'
    );

    // вызов/инициализация tooltips для "X" модальной кнопки (для кнопки закрытия модального окна, с задержкой)
    setTimeout(() => {
      initTippy(deleteModalXBtn, 'закрыть', 'left', { offset: [0, 9] });
    }, 0);

    // ?? следует раскомментировать
    // организация удаления клиента/строки
    //     deleteModalBtn.addEventListener('click', async () => {
    //       // вызов "confirm" для подтверждения удаления
    //       const confirmed = confirm('Вы уверены?');
    //       if (!confirmed) {
    //         return; // нет, возврат
    //       }
    //
    //       await deleteBodyRowsClients([clientId]); // запуск логики удаления
    //
    //       // закрытие модального окна, через Bootstrap API
    //       const modalInstance = bootstrap.Modal.getInstance(deleteModalWrap);
    //       if (modalInstance) {
    //         modalInstance.hide(); // скрытие
    //       }
    //     });

    // !! [FOR DEMO - sessionStorage] ..весь блок до return
    // организация удаления клиента/строки
    deleteModalBtn.addEventListener('click', () => {
      // вызов "confirm" для подтверждения удаления
      const confirmed = confirm('Вы уверены?');
      if (!confirmed) {
        return; // нет, возврат
      }

      deleteClientFromStorage(clientId); // организация удаления из Session storage

      // закрытие модального окна, через Bootstrap API
      const modalInstance = bootstrap.Modal.getInstance(deleteModalWrap);
      if (modalInstance) {
        modalInstance.hide(); // скрытие
      }
    });

    return deleteModalWrap; // передача/возврат модального окна
  }

  // !! [FOR DEMO - sessionStorage] организация удаления клиентов из Session storage (согласно передаваемых id)
  function deleteClientFromStorage(clientId) {
    if (!clientId) {
      console.error('Ошибка: отсутствует ID клиента для удаления!');
      return;
    }

    // обновление массива (кто на удаление)
    clientsDataArrWithIds = clientsDataArrWithIds.filter(
      (client) => client.id !== clientId
    );

    // внесение изменений в Session storage
    sessionStorage.setItem(
      'demoClients',
      JSON.stringify(clientsDataArrWithIds)
    );

    addClientsToTable(clientsDataArrWithIds); // перерисовка таблицы
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

  // ** организация проверки на наличие валидных данных в модальных инпутах: основных, контактных / проверка на изменение клиентских данных при/в "edit" модальном окне (отработка "уточняющего" confirm или нет)
  function checkModalInputsBeforeClose(event, context = {}) {
    const { modalWrap, modalType, initialData } = context; // получение необходимого элемента (через деструктуризациию входящего/передаваемого объекта)
    const modalInputs = Array.from(modalWrap.querySelectorAll('.modal-input')); // фиксация всех модальных инпутов

    // фиксация ФИО из "edit" окна (далее для сравнения)
    const formInSurname = toUpFirstLetter(
      modalWrap.querySelector('.modal-surname-input').value.trim()
    );
    const formInName = toUpFirstLetter(
      modalWrap.querySelector('.modal-name-input').value.trim()
    );
    const formInPatronymicInput = modalWrap.querySelector(
      '.modal-patronymic-input'
    );
    const formInPatronymic = formInPatronymicInput
      ? toUpFirstLetter(formInPatronymicInput.value.trim())
      : '';

    // фиксация контактов из "edit" окна (далее для сравнения)
    const formInContacts = Array.from(
      modalWrap.querySelectorAll('.modal__body-add-contact-element')
    )
      .map((contact) => {
        const contactType = contact
          .querySelector('input[name="contact-type"]')
          ?.value.trim(); // фиксация типа контакта из "скрытого" инпута
        const contactValue = contact
          .querySelector('input[name="contact-data"]')
          ?.value.trim(); // фиксация введённых данных из "основного" инпута

        // проверка на наличие значений
        if (contactType && contactValue) {
          return { type: contactType, value: contactValue };
        }

        return null; // если данные некорректны, пропуск/далее
      })
      .filter((contact) => contact !== null); // исключение некорректных/null контактов

    // проверка изменений в ФИО/контактах, если это "edit" модальное окно (т.е. надо будет выводить confirm или нет)
    if (modalType === 'edit' && initialData) {
      const isNameChanged = initialData.name !== formInName;
      const isSurnameChanged = initialData.surname !== formInSurname;
      const isPatronymicChanged = initialData.patronymic !== formInPatronymic;
      const isContactsLengthChanged =
        initialData.contacts.length !== formInContacts.length;

      const hasDataChanged =
        isNameChanged ||
        isSurnameChanged ||
        isPatronymicChanged ||
        isContactsLengthChanged;

      // если ничего не поменялось при "edit", уточняющее сообщение "Есть не сохранённые данные! Закрыть окно?".. НЕ выводим
      if (!hasDataChanged) {
        return true;
      }
    }

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
    const modalBodyForm = modalWrap.querySelector('form');
    const saveButton = modalWrap.querySelector('#modal-body-save-btn');

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

    // корректировка z-index у/для drop-btn кнопки
    correctDropDownZIndex(modalWrap);

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

    // обновление состояния кнопки "Сохранить" (согласно действий с контактными инпутами)
    updateSaveButtonState(modalBodyForm, saveButton);

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
      initTippy(modalContactXBtn, 'удалить контакт', 'top', {
        offset: [0, 15],
      });
    }, 0);

    // организация удаления строки контактов
    modalContactXBtn.addEventListener('click', (event) => {
      event.stopPropagation(); // исключение непредвиденных событий/поведения
      deleteModalContactsElement(event, {
        modalBodyForm,
        modalBodyAddBtn,
        modalBodyAddContactsRowWrap,
      }); // удаление строки контактов (посредствам "X", передача context(a))
    });

    // организация удаления строки контактов и через TAB/Enter
    modalContactXBtn.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.stopPropagation(); // исключение непредвиденных событий/поведения
        deleteModalContactsElement(event, {
          modalBodyForm,
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

  // ** корректировка z-index у/для drop-btn из строки контакта (при "focus" перекрытие соседнего row-contact инпута)
  function correctDropDownZIndex(modalWrap) {
    const dropDownButtons = modalWrap.querySelectorAll(
      '.modal__body-add-contact-drop-btn'
    );

    dropDownButtons.forEach((button) => {
      button.addEventListener('focus', () => {
        button.style.zIndex = '5'; // увеличение z-index при "focus"
      });

      button.addEventListener('blur', () => {
        button.style.zIndex = '3'; // возврат z-index к default значению
      });
    });
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
    const { modalBodyForm, modalBodyAddBtn, modalBodyAddContactsRowWrap } =
      context; // получение необходимых элементов (через деструктуризациию входящего/передаваемого объекта)
    const saveButton = modalBodyForm.querySelector('#modal-body-save-btn'); // фиксация кнопки "Сохранить"

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

          // обновление состояния кнопки "Сохранить" (после удалений строк контактов)
          updateSaveButtonState(modalBodyForm, saveButton);
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
  function initTippy(selector, content, side, customOptions = {}) {
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
            offset: [0, 10],
            placement: side,
            animation: 'scale', // анимация появления/скрытия (через дополнительный файл/подключение)
            trigger: 'mouseenter', // только по наведению мыши (исключение вывода по клику, в другом месте)

            // переопределение default параметров, согласно объекта customOptions (если передавались)
            ...customOptions,

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
  // корректировка регистра, для полей ФИО
  function toUpFirstLetter(value) {
    if (!value) return ''; // если вдруг "пусто"
    return value[0].toUpperCase() + value.slice(1).toLowerCase();
  }

  // проверка на совпадение по ФИО, в исходном/формирующемся массиве
  function checkClientFIO(
    formInSurname,
    formInName,
    formInPatronymic,
    updateClientsDataArr
  ) {
    return updateClientsDataArr.some(
      (client) =>
        client.surname === formInSurname &&
        client.name === formInName &&
        client.patronymic === formInPatronymic
    );
  }

  function handleModalFormSubmit(context = {}) {
    const { modalBodyForm, type, clientData } = context; // получение необходимых элементов (через деструктуризациию входящего/передаваемого объекта)

    // проверка наличия входящих аргументов/параметров (нет.. возврат)
    if (!modalBodyForm || !type || !clientData) {
      console.error(
        'Событие "submit" невозможно.. недостаточно входящих параметров!?'
      );
      return;
    }

    const saveButton = modalBodyForm.querySelector('#modal-body-save-btn'); // фиксация кнопки "Сохранить"

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

        // обновление состояния кнопки "Сохранить" (доступна, не доступна)
        updateSaveButtonState(modalBodyForm, saveButton);

        if (
          !modalBodyForm.checkValidity() ||
          validErrors.length > 0 ||
          hasInvalidFeedback
        ) {
          event.stopPropagation();
          return; // если есть ошибки, прекращение отработки
        }

        modalBodyForm.classList.add('was-validated'); // если всё "ок", т.е. нет ошибок, невалидных сообщений.. добавление всей форме валидационного класса (для/по Bootstrap)

        // фиксация/обработка вводимых данных, ФИО/контакты (формирование объекта "client")
        const formInSurname = toUpFirstLetter(
          modalBodyForm.querySelector('.modal-surname-input').value.trim()
        );
        const formInName = toUpFirstLetter(
          modalBodyForm.querySelector('.modal-name-input').value.trim()
        );
        const formInPatronymicInput = modalBodyForm.querySelector(
          '.modal-patronymic-input'
        );
        const formInPatronymic = formInPatronymicInput
          ? toUpFirstLetter(formInPatronymicInput.value.trim())
          : '';

        // фиксация контактов
        const formInContacts = Array.from(
          modalBodyForm.querySelectorAll('.modal__body-add-contact-element')
        )
          .map((contact) => {
            const contactType = contact
              .querySelector('input[name="contact-type"]')
              ?.value.trim(); // фиксация типа контакта из "скрытого" инпута
            const contactValue = contact
              .querySelector('input[name="contact-data"]')
              ?.value.trim(); // фиксация введённых данных из "основного" инпута

            // проверка на наличие значений
            if (contactType && contactValue) {
              return { type: contactType, value: contactValue };
            }

            return null; // если данные некорректны, пропуск/далее
          })
          .filter((contact) => contact !== null); // исключение некорректных/null контактов

        // проверка на совпадение по ФИО в таблице (только/если, это добавление "нового" клиента)
        if (
          type === 'add' &&
          checkClientFIO(
            formInSurname,
            formInName,
            formInPatronymic,
            updateClientsDataArr
          )
        ) {
          const formInNotification = confirm(
            'Совпадение по Ф.И.О! Такой клиент уже существует! Всё равно добавить?'
          );
          if (!formInNotification) {
            return; // не добавляем клиента
          }
        }

        // ?? следует раскомментировать
        // итоговый объект клиента (передаваемый на сервер)
        // const client = {
        //   surname: formInSurname,
        //   name: formInName,
        //   patronymic: formInPatronymic,
        //   contacts: formInContacts,
        // };

        // !! [FOR DEMO - sessionStorage] "расширенный" объект client (т.к. нет серверных полей.. добавление самостоятельно)
        const client = {
          id: type === 'edit' ? clientData.id : generateClientStorageId(), // генерация custom ID
          surname: formInSurname,
          name: formInName,
          patronymic: formInPatronymic,
          fullName: `${formInSurname} ${formInName} ${formInPatronymic}`.trim(), // целое ФИО
          createdAt:
            type === 'edit'
              ? clientData.createdAt
              : new Date().toLocaleString(), // дата создания
          updatedAt: new Date().toLocaleString(), // дата изменения
          contacts: formInContacts,
        };

        try {
          // ?? следует раскомментировать
          // if (type === 'add') {
          //   await addClientToServer(client); // отправка клиента на сервер
          // } else if (type === 'edit' && clientData.id) {
          //   await editClientOnServer(clientData.id, client); // изменение данных клиента на сервере
          // } else {
          //   throw new Error(
          //     'Неизвестный тип модального окна или отсутствует ID клиента!'
          //   );
          // }

          // !! [FOR DEMO - sessionStorage] временные изменения в/для Session storage (обновление/перерисовка таблицы)
          if (type === 'add') {
            addNewClientToStorage(client); // добавление клинта в Session storage
          } else if (type === 'edit' && clientData.id) {
            updateClientInStorage(client); // изменение данных клиента в Session storage
          } else {
            throw new Error(
              'Неизвестный тип модального окна или отсутствует ID клиента!'
            );
          }

          // по-шаговая отработка setTimeout/задержек, т.е. валидное выделение формы/инпутов и потом/уже.. вывод сообщений, очистка/закрытие, перемещение фокуса
          setTimeout(() => {
            alert(
              type === 'add'
                ? 'Клиент успешно добавлен!'
                : 'Клиент успешно обновлён!'
            );

            setTimeout(() => {
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

              // выделение/показ только что добавленного/от редактируемого клиента/строки (исходя из типа)
              setTimeout(() => {
                moveToAndHighlightClientRow(type, clientData.id); // перемещение фокуса на только, что добавленного/изменённого клиента
              }, 300); // временная задержка, больше.. чтобы модальное окно успело закрыться
            }, 200);
          }, 100);
        } catch (error) {
          console.error(
            `Ошибка при ${
              type === 'add' ? 'добавлении' : 'обновлении'
            } клиента:`,
            error
          );
          alert(
            `Не удалось ${
              type === 'add' ? 'добавить' : 'обновить'
            } клиента! Проверьте данные и попробуйте снова!?`
          );
        }
      },
      false
    );

    // обновление состояния кнопки "Сохранить" (согласно ввода данных)
    modalBodyForm.addEventListener('input', () =>
      updateSaveButtonState(modalBodyForm, saveButton)
    );
  }

  // !! [FOR DEMO - sessionStorage] генерация custom ID номеров для "новых" клиентов (продолжение порядка.. до 99 потом нужно/будет корректировать)
  function generateClientStorageId() {
    const orderPrefix = clientsServerDataArr.length; // фиксация длинны серверного массива (ранее/выше приходящего)

    // генерация случайных/дополнительных цифр для ID (т.е. генерация 5-ти цифр, если в массиве < 10 клиентов, если больше.. то генерация 4-х цифр)
    const randomDigits =
      clientsServerDataArr.length < 10
        ? Math.floor(10000 + Math.random() * 90000) // 5 цифр
        : Math.floor(1000 + Math.random() * 9000); // 4 цифры

    return `${orderPrefix}${randomDigits}`; // возврат сформированного ID
  }

  // ** [СЕРВЕР] отправка данных/добавление клиентов на сервер, получение обратно (проверка статуса)
  // ?? следует раскомментировать (полностью)
  //   async function addClientToServer(clientData) {
  //     try {
  //       const response = await fetch('http://localhost:3000/api/clients', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify(clientData),
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
  //       await getClientsServerListData(); // обновление списка клиентов (в контексте.. перерисовка таблицы)
  //     } catch (error) {
  //       console.error('Ошибка при добавлении клиента..', error);
  //       alert('Ошибка при добавлении клиента на сервер!');
  //     }
  //   }

  // ** [СЕРВЕР] корректировка данных/клиентов на сервере, получение обратно (проверка статуса)
  // ?? следует раскомментировать (полностью)
  //   async function editClientOnServer(clientId, clientData) {
  //     try {
  //       const response = await fetch(
  //         `http://localhost:3000/api/clients/${clientId}`,
  //         {
  //           method: 'PATCH',
  //           headers: {
  //             'Content-Type': 'application/json',
  //           },
  //           body: JSON.stringify(clientData),
  //         }
  //       );
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
  //       await getClientsServerListData(); // обновляем данных/списка клиентов (в контексте.. перерисовка таблицы)
  //     } catch (error) {
  //       console.error('Ошибка при обновлении клиента..', error);
  //       alert('Ошибка при обновлении клиента на сервере!');
  //     }
  //   }

  // !! [FOR DEMO - sessionStorage] добавление "новых" клиентов/данных в Session storage
  function addNewClientToStorage(newClient) {
    if (!clientsDataArrWithIds) {
      clientsDataArrWithIds = []; // если, что то не так с массивом.. создание
    }

    // сразу добавление в массив, следом в Session storage
    clientsDataArrWithIds.push(newClient);
    sessionStorage.setItem(
      'demoClients',
      JSON.stringify(clientsDataArrWithIds)
    );

    addClientsToTable(clientsDataArrWithIds); // перерисовка таблицы
  }

  // !! [FOR DEMO - sessionStorage] корректировка данных/клиентов в Session storage
  function updateClientInStorage(updatedClient) {
    // корректировка искомого массива
    clientsDataArrWithIds = clientsDataArrWithIds.map((client) =>
      client.id === updatedClient.id ? updatedClient : client
    );

    // внесение изменений в Session storage
    sessionStorage.setItem(
      'demoClients',
      JSON.stringify(clientsDataArrWithIds)
    );

    addClientsToTable(clientsDataArrWithIds); // перерисовка таблицы
  }

  // ** организация "дополнительной" логики для валидации полей ввода/инпутов в модальных окнах (при/в "submit" состояниях)
  function additionalFormInputsValidation(allModalInputs, modalBodyForm) {
    const validErrors = [];
    // определение минимального количества букв/символов (для каждого инпут/типа поля)
    const minLengths = {
      'modal-surname-input': 3,
      'modal-name-input': 2,
      'modal-patronymic-input': 5,
      'modal-contact-input': {
        phone: 18,
        'extra-phone': 18,
        vk: 7,
        email: 6,
        facebook: 5,
        twitter: 3,
        'extra-contact': 3,
      },
    };
    // использование названий как в drop-down меню
    const contactTypeLabels = {
      phone: 'Телефон',
      'extra-phone': 'Доп. телефон',
      vk: 'Vk',
      email: 'Email',
      facebook: 'Facebook',
      twitter: 'Twitter',
      'extra-contact': 'Доп. контакт',
    };

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
        // проверка минимальной длины вводимых данных
        const inputClass = Object.keys(minLengths).find((className) =>
          input.classList.contains(className)
        );

        // для полей ФИО
        if (inputClass && typeof minLengths[inputClass] === 'number') {
          if (input.value.length < minLengths[inputClass]) {
            const fieldName = {
              'modal-surname-input': 'Фамилия',
              'modal-name-input': 'Имя',
              'modal-patronymic-input': 'Отчество',
            }[inputClass];

            validErrors.push(
              `Поле "${fieldName}" должно содержать не менее ${minLengths[inputClass]} символов!`
            );
            input.classList.add('is-invalid');
            if (feedback)
              feedback.textContent = validErrors[validErrors.length - 1];
          }
        }

        // для строк контактов
        if (input.classList.contains('modal-contact-input')) {
          const hiddenInput = parent.querySelector('.modal-hidden-input');
          const contactType = hiddenInput ? hiddenInput.value : '';
          const minLength = minLengths['modal-contact-input'][contactType] || 0;
          const contactLabel = contactTypeLabels[contactType] || 'Контакт';

          if (input.value.length < minLength) {
            validErrors.push(
              `Поле "${contactLabel}" должно содержать не менее ${minLength} символов!`
            );
            input.classList.add('is-invalid');
            if (feedback)
              feedback.textContent = validErrors[validErrors.length - 1];
          }
        }

        // Если данные валидны, убираем ошибки
        if (!input.classList.contains('is-invalid')) {
          input.classList.remove('is-invalid');
          if (feedback) feedback.textContent = '';
        }
      }
    });

    // добавление кастомного "класса-состояния" для формы (на основе этого последующая отработка)
    if (validErrors.length > 0) {
      modalBodyForm.classList.add('was-submitted');
    }

    return validErrors; // возврат массива ошибок/сообщений
  }

  // ** организация блокировки доступности для модальной кнопки "Сохранить" (при "submit")
  function updateSaveButtonState(modalBodyForm, saveButton) {
    const allModalInputs = Array.from(
      modalBodyForm.querySelectorAll('.modal-input')
    );

    // проверка на наличие невалидных инпутов (за исключением поля "Отчество", его "конкретного" сообщения)
    const hasInvalidInputs = allModalInputs.some((input) => {
      if (input.classList.contains('modal-patronymic-input')) {
        const feedback = input
          .closest('.modal__body-input-wrap')
          .querySelector('.invalid-feedback');
        if (
          feedback &&
          feedback.textContent.trim() &&
          input.value.trim() !== ''
        ) {
          return true; // другие сообщения.. кнопка "Сохранить" будет не доступной
        }
        return false; // нужное сообщение.. будет доступна
      }
      return input.classList.contains('is-invalid');
    });

    // проверка обязательных полей ФИО (за исключением поля "Отчество")
    const requiredInputsEmpty = allModalInputs.some(
      (input) =>
        input.required &&
        !input.classList.contains('modal-patronymic-input') &&
        input.value.trim() === ''
    );

    // проверка состояния модальной-формы (наличие "was-submitted", да/нет)
    const wasSubmitted = modalBodyForm.classList.contains('was-submitted');

    // блокировка кнопки, если был "submit" (если/есть, появились невалидные инпуты)
    saveButton.disabled =
      wasSubmitted && (hasInvalidInputs || requiredInputsEmpty);

    // обновление/изменение состояния кнопки и прозрачности
    saveButton.style.opacity = saveButton.disabled ? '0.5' : '1';
    saveButton.style.cursor = saveButton.disabled ? 'help' : 'pointer';
  }

  // ** перемещение/фиксация области просмотра на только что добавленном/от редактируемом клиенте, соответствующей строке (выделение цветом)
  function moveToAndHighlightClientRow(type, clientId = null) {
    if (!outputTable) {
      console.error('Таблица НЕ обнаружена!');
      return;
    }

    let clientRow;

    if (type === 'add') {
      clientRow = outTableBody.lastElementChild; // фиксация последней строки
    } else if (type === 'edit' && clientId) {
      clientRow = outTableBody.querySelector(`[data-server-id="${clientId}"]`); // фиксация строки по ID
    }

    if (!clientRow) {
      console.warn(
        `Не удалось найти строку клиента (${
          type === 'add' ? 'последнюю' : `ID: ${clientId}`
        })`
      );
      return; // нет строк.. возврат
    }

    // кого предстоит перекрасить/выделить (какие ячейки?)
    const highlightClasses = [
      'crm__output-table-body-cell_fio',
      'crm__output-table-body-cell_crt-d-time',
      'crm__output-table-body-cell_chg-d-time',
    ];

    const defaultColorsMap = new Map(); // хранение исходных цветов/красок

    // перемещение к соответствующей строке таблицы
    clientRow.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });

    // изменение цвета/выделение строки
    clientRow.querySelectorAll('td').forEach((td) => {
      if (highlightClasses.some((cls) => td.classList.contains(cls))) {
        defaultColorsMap.set(td, td.style.color); // сохранение default цвета
        td.style.fontWeight = 'bold';
        td.style.color = '#7458c2'; // --cold-purple
      }
    });

    // возврат к default цвету, через несколько секунды
    setTimeout(() => {
      defaultColorsMap.forEach((color, td) => {
        td.style.fontWeight = 'normal';
        td.style.color = color;
      });
    }, 2000);
  }

  // ** сортировка клиентов/таблицы, по ячейкам заголовочной строки (по нажатию, по возрастанию/убыванию)
  const allHeaderRowCellsForSort = document.querySelectorAll(
    '.crm__output-table-head-cell'
  );
  let sortDirectionUpDown = true; // "флаг" для работы с направлением сортировки

  function sortClientsByTableCells(event) {
    const clickedTableCell = event.target.closest('th'); // определение заглавного поля/ячейки, по которой происходит "click" - событие, фиксация

    if (!clickedTableCell) return; // если клик не по "th", отмена действий

    updateClientsDataArr.sort((a, b) => {
      if (clickedTableCell.id === 'table-th-id') {
        return sortDirectionUpDown
          ? b.shortId - a.shortId
          : a.shortId - b.shortId;
      } else if (clickedTableCell.id === 'table-th-fio') {
        return sortDirectionUpDown
          ? a.fullName.localeCompare(b.fullName)
          : b.fullName.localeCompare(a.fullName);
      } else if (clickedTableCell.id === 'table-th-dt') {
        return sortDirectionUpDown
          ? new Date(b.createdAt) - new Date(a.createdAt)
          : new Date(a.createdAt) - new Date(b.createdAt);
      } else if (clickedTableCell.id === 'table-th-change') {
        return sortDirectionUpDown
          ? new Date(a.updatedAt) - new Date(b.updatedAt)
          : new Date(b.updatedAt) - new Date(a.updatedAt);
      }

      return 0;
    });

    addClientsToTable(updateClientsDataArr); // пере-рисовка (пере-компоновка) таблицы после сортировки (прожатия ячеек)
  }

  allHeaderRowCellsForSort.forEach((cell) => {
    cell.addEventListener('click', (event) => {
      sortClientsByTableCells(event); // передача события
      sortDirectionUpDown = !sortDirectionUpDown; // изменение условия сортировки
    });

    // отработка сортировки/сброса сортировки через TAB/Enter
    cell.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        sortClientsByTableCells(event); // передача события
        sortDirectionUpDown = !sortDirectionUpDown; // изменение условия сортировки
      }
    });
  });

  // ** организация сброса сортировки/фильтрации таблицы клиентов (через/посредствам прожатия #-хэштега, как было.. на сервере)
  // ?? следует раскомментировать (полностью)
  //   const hashTagReset = document.getElementById('hash-tag-title'); // фиксация #-хэштега (перед заголовком "Клиенты")
  //   const formFilterInput = document.getElementById('search-form-input'); // фиксация поля поиска
  //
  //   function resetTableSorting() {
  //     getClientsServerListData(); // обновление/перерисовка таблицы, как было.. (согласно серверных данных)
  //     sortDirectionUpDown = true; // корректировка "флага" направления сортировки (который инициализируется выше)
  //
  //     setTimeout(() => {
  //       formFilterInput.value = ''; // очистка фильтрационного поля/инпута, после прожатия по #-хэштегу
  //       formFilterInput.classList.remove('is-invalid'); // исключение "невалидных" выделений/сообщений (после очистки)
  //     }, 0); // пока.. "нулевая" задержка (будет большой объём данных в таблице, можно будет подкорректировать)
  //   }
  //
  //   hashTagReset.addEventListener('click', resetTableSorting); // прослушка/применение

  // !! [FOR DEMO - sessionStorage] организация сброса сортировки/фильтрации таблицы клиентов (через/посредствам прожатия #-хэштега, как было.. в Session storage)
  const hashTagReset = document.getElementById('hash-tag-title'); // фиксация #-хэштега (перед заголовком "Клиенты")
  const formFilterInput = document.getElementById('search-form-input'); // фиксация поля поиска

  function resetTableSortingWithoutServer() {
    let savedClients = JSON.parse(sessionStorage.getItem('demoClients')) || []; // фиксация данных из Session storage

    // обновление искомого массив (согласно него будет осуществляться возврат.. как было)
    clientsDataArrWithIds = savedClients;
    updateClientsDataArr = addLocalIdsToClients(clientsDataArrWithIds);

    addClientsToTable(updateClientsDataArr); // обновление/перерисовка таблицы, как было.. (согласно искомого массива)
    sortDirectionUpDown = true; // корректировка "флага" направления сортировки (который инициализируется выше)

    setTimeout(() => {
      formFilterInput.value = ''; // очистка фильтрационного поля/инпута, после прожатия по #-хэштегу
      formFilterInput.classList.remove('is-invalid'); // исключение "невалидных" выделений/сообщений (после очистки)
    }, 0); // пока.. "нулевая" задержка (будет большой объём данных в таблице, можно будет подкорректировать)
  }

  hashTagReset.addEventListener('click', resetTableSortingWithoutServer); // прослушка/применение

  // ** фильтрация клиентов/таблицы, согласно фильтрационного поля ввода (сразу применение)
  searchForm.addEventListener('submit', (event) => {
    event.preventDefault(); // исключение отправки
  });

  function filterClientsBySearchForm() {
    const searchValue = formFilterInput.value.trim().toLowerCase(); // определение "пустой" строки
    updateClientsDataArr = correctInitArr(clientsDataArrWithIds); // обновление исходного массива, перед фильтрацией

    // отработка поиска/фильтрации, только/если строка не "пустая"
    if (searchValue) {
      updateClientsDataArr = updateClientsDataArr.filter((clients) =>
        clients.fullName.toLowerCase().includes(searchValue)
      ); // стрелочная функция без {}, таким образом автоматический return true\false, согласно условия
    }

    addClientsToTable(updateClientsDataArr); // пере-рисовка (пере-компоновка) таблицы клиентов согласно фильтрации
    highlightSearchMatches(searchValue); // выделение/подсветка совпадений в строке ФИО (согласно вводимых данных в search-инпут)
  }

  // отработка "дебаунс" задержки (если много данных, что бы снизить нагрузку)
  let debounceTimer;

  formFilterInput.addEventListener('input', () => {
    clearTimeout(debounceTimer); // очистка предыдущей задержки
    debounceTimer = setTimeout(filterClientsBySearchForm, 600); // применение фильтрации не сразу
  });

  // ** организация выделения/подсветки совпадений в ФИО ячейках/таблице (согласно вводимых данных в search-инпут)
  function highlightSearchMatches(searchValue) {
    const allFioCells = document.querySelectorAll(
      '.crm__output-table-body-cell_fio'
    ); // фиксация ФИО строк

    allFioCells.forEach((cell) => {
      cell.innerHTML = cell.textContent; // очистка предыдущих выделений (если были)

      if (searchValue) {
        const regex = new RegExp(`(${searchValue})`, 'gi'); // логика выделения/подсветки.. добавления background(a)
        cell.innerHTML = cell.textContent.replace(
          regex,
          `<span style="background: #9873FF; color: #fff; padding: 1px 2px;">$1</span>`
        );
      }
    });
  }
})();
