# REST API для базы данных студентов

Перед запуском убедитесь, что вы установили Node.js версии 12 или выше.

Для запуска сервера перейдите в папку с репозиторием и выполните команду `node index`. Для остановки нажмите сочетание клавиш CTRL+C. Важно разделить папку запуска сервера и клиентской части. Запустите папку сервера, как отдельный проект и отельно папку клиентской части.

После запуска сервера API будет доступен по пути `http://localhost:3000` (локально).

<!-- !! ВНИМАНИЕ! возможна корректировка и на удалённый сервер, с последующими изменениями! -->

## Методы API

Все методы API, требующие тела запроса, ожидают получить тело в виде JSON. Ответы всех методов также отдаются в виде JSON.

- `GET /api/students` получить список студентов. Параметры, передаваемые в URL:
- `search={search string}` поисковый запрос, при передаче метод вернёт студентов, у которых имя, фамилия, отчество или значение одного из контактов содержат указанную подстроку
- `POST /api/students` создать нового студента. В теле запроса нужно передать объект студентов. Тело ответа успешно обработанного запроса будет содержать объект с созданным студентом.
- `GET /api/students/{id}` получить данные студента по его ID. Тело ответа успешно обработанного запроса будет содержать объект студента.
- `PATCH /api/students/{id}` перезаписать данные о студенте с переданным ID. Тело ответа успешно обработанного запроса будет содержать объект с обновлённым студентом.
- `DELETE /api/students/{id}` удалить студента по переданному ID.

## Структура объекта студента

```javascript
{
  // ID студента, заполняется сервером автоматически, после создания нельзя изменить
  id: '1234567890',
  // дата и время создания студента, заполняется сервером автоматически, после создания нельзя изменить. Это полезная информация, которая может потребоваться для последующей доработки приложения.
  createdAt: '2021-02-03T13:07:29.554Z',
  // дата и время изменения студента, заполняется сервером автоматически при изменении студента. Это полезная информация, которая может потребоваться для последующей доработки приложения.
  updatedAt: '2021-02-03T13:07:29.554Z',
  // * обязательное поле, имя студента
  name: 'Василий',
  // * обязательное поле, фамилия студента
  surname: 'Мостовой',
  // * обязательное поле, отчество студента
  patronymic: 'Васильевич',
  // * обязательное поле, дата рождения студента (в формате даты. Побробнее читать о функциях объекта Data)
  birthDate: '2000-03-03T13:07:29.554Z',
  // * обязательное поле, год начала обучения студента
  startYear: '2010',
  // * обязательное поле, факультет
  faculty: 'Исторический',
}
```

## Возможные статусы ответов

Ответ сервера может содержать один из статусов ответа:

- `200` - запрос обработан нормально
- `201` - запрос на создание нового элемента успешно обработан, а заголовок ответа Location содержит ссылку на GET метод получения созданного элемента
- `404` - переданный в запросе метод не существует или запрашиваемый элемент не найден в базе данных
- `422` - объект, переданный в теле запроса, не прошёл валидацию. Тело ответа содержит массив с описаниями ошибок валидации:
  ```javascript
  [
    {
      field: "Название поля объекта, в котором произошла ошибка",
      message: "Сообщение об ошибке, которое можно показать пользователю",
    },
  ];
  ```
- `500` - странно, но сервер сломался :(<br>Обратитесь к куратору Skillbox, чтобы решить проблему
