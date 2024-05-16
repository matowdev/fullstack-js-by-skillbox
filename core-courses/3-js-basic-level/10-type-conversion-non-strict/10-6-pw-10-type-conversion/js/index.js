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

  // организация таблицы
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
    for (const student of newStudentsDataArr) {
      const studentTableTr = document.createElement('tr');
      const studentThFIO = document.createElement('th');
      const studentThFaculty = document.createElement('th');
      const studentThBirthDate = document.createElement('th');
      const studentThStartYear = document.createElement('th');

      studentThFIO.textContent = student.fullName;
      studentThFaculty.textContent = student.faculty;
      studentThBirthDate.textContent = student.birthDate;
      studentThStartYear.textContent = student.startYear;

      studentTableTr.append(
        studentThFIO,
        studentThFaculty,
        studentThBirthDate,
        studentThStartYear
      );
      tableBody.append(studentTableTr);
    }
  }

  addStudentsToTable(newStudentsDataArr);
})();
