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
  const dboardSort = document.getElementById('dboard-sort');
  const dboardFilter = document.getElementById('dboard-filter');
  const dboardOutput = document.getElementById('dboard-output');

  const table = document.createElement('table');
  const tableHead = document.createElement('thead');
  const tableBody = document.createElement('tbody');
  const tableHeadTr = document.createElement('tr');
  const tableHeadThFIO = document.createElement('th');
  const tableHeadThFaculty = document.createElement('th');
  const tableHeadThBirthDate = document.createElement('th');
  const tableHeadThStartYear = document.createElement('th');

  tableHeadThFIO.textContent = 'Ф.И.О.';
  tableHeadThFaculty.textContent = 'Факультет';
  tableHeadThBirthDate.textContent = 'Дата рождения и возраст';
  tableHeadThStartYear.textContent = 'Годы обучения';

  tableHeadTr.append(
    tableHeadThFIO,
    tableHeadThFaculty,
    tableHeadThBirthDate,
    tableHeadThStartYear
  );
  tableHead.append(tableHeadTr);
  table.append(tableHead, tableBody);
  dboardOutput.append(table);
  dashboard.append(dboardInput, dboardSort, dboardFilter, dboardOutput);

  // ** корректировка исходного массива студентов (добавление свойства fullName, изменения в birthDate)
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
    for (const student of newStudentsDataArr) {
      const todayDate = new Date();
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
})();
