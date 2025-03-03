/* eslint-disable no-console */
// импорт стандартных библиотек Node.js
const { existsSync, readFileSync, writeFileSync } = require("fs");
const { createServer } = require("http");

// файл для базы данных
// ?? следует раскомментировать
// const DB_FILE = process.env.DB_FILE || "./db.json";

// !! [FOR DEMO - Render] организация временной папки /tmp/db.json, для работы с Render
const isRender = process.env.RENDER || false; // проверка/понимание, где запускается сервер.. на Render
const DB_FILE = isRender ? "/tmp/db.json" : "./db.json";

// номер порта, на котором будет запущен сервер
const PORT = process.env.PORT || 3000;
// префикс URI для всех методов приложения
const URI_PREFIX = "/api/clients";

/**
 * Класс ошибки, используется для отправки ответа с определённым кодом и описанием ошибки
 */
class ApiError extends Error {
  constructor(statusCode, data) {
    super();
    this.statusCode = statusCode;
    this.data = data;
  }
}

/**
 * Асинхронно считывает тело запроса и разбирает его как JSON
 * @param {Object} req - Объект HTTP запроса
 * @throws {ApiError} Некорректные данные в аргументе
 * @returns {Object} Объект, созданный из тела запроса
 */
function drainJson(req) {
  return new Promise((resolve) => {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
    });
    req.on("end", () => {
      resolve(JSON.parse(data));
    });
  });
}

/**
 * Проверяет входные данные и создаёт из них корректный объект клиента
 * @param {Object} data - Объект с входными данными
 * @throws {ApiError} Некорректные данные в аргументе (statusCode 422)
 * @returns {{ name: string, surname: string, patronymic: string, contacts: object[] }} Объект клиента
 */
function makeClientFromData(data) {
  const errors = [];

  function asString(v) {
    return (v && String(v).trim()) || "";
  }

  // составляем объект, где есть только необходимые поля
  const client = {
    surname: asString(data.surname),
    name: asString(data.name),
    patronymic: asString(data.patronymic),
    contacts: Array.isArray(data.contacts)
      ? data.contacts.map((contact) => ({
          type: asString(contact.type),
          value: asString(contact.value),
        }))
      : [],
  };

  // проверяем, все ли данные корректные и заполняем объект ошибок, которые нужно отдать клиенту
  if (!client.surname)
    errors.push({ field: "surname", message: "Не указана фамилия!" });
  if (!client.name) errors.push({ field: "name", message: "Не указано имя!" });
  if (client.contacts.some((contact) => !contact.type || !contact.value))
    errors.push({
      field: "contacts",
      message: "Не все контакты полностью заполнены!",
    });

  // если есть ошибки, то бросаем объект ошибки с их списком и 422 статусом
  if (errors.length) throw new ApiError(422, { errors });

  return client;
}

/**
 * Возвращает список клиентов из базы данных
 * @param {{ search: string }} [params] - Поисковая строка
 * @returns {{ id: string, name: string, surname: string, patronymic: string, contacts: object[] }[]} Массив клиентов
 */
function getClientList(params = {}) {
  const clients = JSON.parse(readFileSync(DB_FILE) || "[]");
  if (params.search) {
    const search = params.search.trim().toLowerCase();
    return clients.filter((client) =>
      [
        client.surname,
        client.name,
        client.patronymic,
        ...client.contacts.map(({ value }) => value),
      ].some((str) => str.toLowerCase().includes(search))
    );
  }
  return clients;
}

/**
 * Создаёт и сохраняет клиента в базу данных
 * @throws {ApiError} Некорректные данные в аргументе, клиент не создан (statusCode 422)
 * @param {Object} data - Данные из тела запроса
 * @returns {{ id: string, name: string, surname: string, patronymic: string, contacts: object[], createdAt: string, updatedAt: string }} Объект клиента
 */
function createClient(data) {
  const newItem = makeClientFromData(data);
  newItem.id = Date.now().toString();
  newItem.createdAt = newItem.updatedAt = new Date().toISOString();
  writeFileSync(DB_FILE, JSON.stringify([...getClientList(), newItem]), {
    encoding: "utf8",
  });
  return newItem;
}

/**
 * Возвращает объект клиента по его ID
 * @param {string} itemId - ID клиента
 * @throws {ApiError} Клиент с таким ID не найден (statusCode 404)
 * @returns {{ id: string, name: string, surname: string, patronymic: string, contacts: object[], createdAt: string, updatedAt: string }} Объект клиента
 */
function getClient(itemId) {
  const client = getClientList().find(({ id }) => id === itemId);
  if (!client) throw new ApiError(404, { message: "Client Not Found!" });
  return client;
}

/**
 * Изменяет клиента с указанным ID и сохраняет изменения в базу данных
 * @param {string} itemId - ID изменяемого клиента
 * @param {{ name?: string, surname?: string, patronymic?: string, contacts?: object[] }} data - Объект с изменяемыми данными
 * @throws {ApiError} Клиент с таким ID не найден (statusCode 404)
 * @throws {ApiError} Некорректные данные в аргументе (statusCode 422)
 * @returns {{ id: string, name: string, surname: string, patronymic: string, contacts: object[], createdAt: string, updatedAt: string }} Объект клиента
 */
function updateClient(itemId, data) {
  const clients = getClientList();
  const itemIndex = clients.findIndex(({ id }) => id === itemId);
  if (itemIndex === -1)
    throw new ApiError(404, { message: "Client Not Found!" });
  Object.assign(
    clients[itemIndex],
    makeClientFromData({ ...clients[itemIndex], ...data })
  );
  clients[itemIndex].updatedAt = new Date().toISOString();
  writeFileSync(DB_FILE, JSON.stringify(clients), { encoding: "utf8" });
  return clients[itemIndex];
}

/**
 * Удаляет клиента из базы данных
 * @param {string} itemId - ID клиента
 * @returns {{}}
 */
function deleteClient(itemId) {
  const clients = getClientList();
  const itemIndex = clients.findIndex(({ id }) => id === itemId);
  if (itemIndex === -1)
    throw new ApiError(404, { message: "Client Not Found!" });
  clients.splice(itemIndex, 1);
  writeFileSync(DB_FILE, JSON.stringify(clients), { encoding: "utf8" });
  return {};
}

// создаём новый файл с базой данных, если он не существует
// ?? следует раскомментировать
// if (!existsSync(DB_FILE)) writeFileSync(DB_FILE, "[]", { encoding: "utf8" });

// !! [FOR DEMO - Render] автоматическое создание db.json при первом запуске на Render
if (!existsSync(DB_FILE)) {
  const defaultData = [
    {
      surname: "Скворцов",
      name: "Денис",
      patronymic: "Юрьевич",
      contacts: [
        { type: "phone", value: "+7 (987) 333-55-77" },
        { type: "extra-phone", value: "+9 (566) 678-22-11" },
        { type: "email", value: "skvor@gmail.com" },
        { type: "vk", value: "id345678" },
        { type: "facebook", value: "dskvor88" },
        { type: "twitter", value: "@skvor" },
      ],
      id: "1738150048864",
      updatedAt: "2025-02-03T08:15:58.537Z",
      createdAt: "2025-01-29T11:27:28.864Z",
    },
    {
      surname: "Куприянов",
      name: "Арсений",
      patronymic: "Валерьевич",
      contacts: [
        { type: "phone", value: "+9 (211) 543-01-00" },
        { type: "email", value: "kpv@gmail.com" },
      ],
      id: "1738156123828",
      updatedAt: "2025-01-29T13:08:43.828Z",
      createdAt: "2025-01-29T13:08:43.828Z",
    },
    {
      surname: "Константинопольская",
      name: "Людмила",
      patronymic: "Александровна",
      contacts: [
        { type: "phone", value: "+5 (866) 449-13-12" },
        { type: "email", value: "konsta@gmail.com" },
        { type: "facebook", value: "kalexa91" },
      ],
      id: "1738156235186",
      updatedAt: "2025-01-29T13:10:35.186Z",
      createdAt: "2025-01-29T13:10:35.186Z",
    },
    {
      surname: "Дмитриевский",
      name: "Олег",
      patronymic: "Алексеевич",
      contacts: [{ type: "phone", value: "+9 (888) 399-99-91" }],
      id: "1738156379829",
      updatedAt: "2025-02-04T06:57:27.611Z",
      createdAt: "2025-01-29T13:11:19.829Z",
    },
    {
      surname: "Александрова",
      name: "Татьяна",
      patronymic: "Павловна",
      contacts: [
        { type: "phone", value: "+6 (344) 678-00-00" },
        { type: "email", value: "tata@gmail.com" },
        { type: "vk", value: "id891267" },
      ],
      id: "1738156451839",
      updatedAt: "2025-02-05T06:12:12.786Z",
      createdAt: "2025-01-29T13:12:51.839Z",
    },
  ];

  writeFileSync(DB_FILE, JSON.stringify(defaultData, null, 2), {
    encoding: "utf8",
  });
}

// создаём HTTP сервер, переданная функция будет реагировать на все запросы к нему
module.exports = createServer(async (req, res) => {
  // req - объект с информацией о запросе, res - объект для управления отправляемым ответом

  // этот заголовок ответа указывает, что тело ответа будет в JSON формате
  res.setHeader("Content-Type", "application/json");

  // CORS заголовки ответа для поддержки кросс-доменных запросов из браузера
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // запрос с методом OPTIONS может отправлять браузер автоматически для проверки CORS заголовков
  // в этом случае достаточно ответить с пустым телом и этими заголовками
  if (req.method === "OPTIONS") {
    // end = закончить формировать ответ и отправить его клиенту
    res.end();
    return;
  }

  // если URI не начинается с нужного префикса - можем сразу отдать 404
  if (!req.url || !req.url.startsWith(URI_PREFIX)) {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: "Not Found" }));
    return;
  }

  // убираем из запроса префикс URI, разбиваем его на путь и параметры
  const [uri, query] = req.url.slice(URI_PREFIX.length).split("?");
  const queryParams = {};

  // параметры могут отсутствовать вообще или иметь вид a=b&b=c
  // во втором случае наполняем объект queryParams { a: 'b', b: 'c' }
  if (query) {
    for (const piece of query.split("&")) {
      const [key, value] = piece.split("=");
      queryParams[key] = value ? decodeURIComponent(value) : "";
    }
  }

  try {
    // обрабатываем запрос и формируем тело ответа
    const body = await (async () => {
      if (uri === "" || uri === "/") {
        // /api/clients
        if (req.method === "GET") return getClientList(queryParams);
        if (req.method === "POST") {
          const createdItem = createClient(await drainJson(req));
          res.statusCode = 201;
          res.setHeader("Access-Control-Expose-Headers", "Location");
          res.setHeader("Location", `${URI_PREFIX}/${createdItem.id}`);
          return createdItem;
        }
      } else {
        // /api/clients/{id}
        // параметр {id} из URI запроса
        const itemId = uri.slice(1);
        if (req.method === "GET") return getClient(itemId);
        if (req.method === "PATCH")
          return updateClient(itemId, await drainJson(req));
        if (req.method === "DELETE") return deleteClient(itemId);
      }
      return null;
    })();
    res.end(JSON.stringify(body));
  } catch (err) {
    // обрабатываем сгенерированную нами же ошибку
    if (err instanceof ApiError) {
      res.writeHead(err.statusCode);
      res.end(JSON.stringify(err.data));
    } else {
      // если что-то пошло не так - пишем об этом в консоль и возвращаем 500 ошибку сервера
      res.statusCode = 500;
      res.end(JSON.stringify({ message: "Server Error!" }));
      console.error(err);
    }
  }
})
  // выводим инструкцию, как только сервер запустился...
  .on("listening", () => {
    if (process.env.NODE_ENV !== "test") {
      console.log(`Сервер CRM запущен на порту: ${PORT}..`);
      console.log("Нажмите CTRL+C, чтобы остановить сервер");
      console.log("Доступные методы:");
      console.log(
        `GET ${URI_PREFIX} - получить список клиентов, в query параметр search можно передать поисковый запрос`
      );
      console.log(
        `POST ${URI_PREFIX} - создать клиента, в теле запроса нужно передать объект { name: string, surname: string, patronymic?: string, contacts?: object[] }`
      );
      console.log(
        `\tcontacts - массив объектов контактов вида { type: string, value: string }`
      );
      console.log(`GET ${URI_PREFIX}/{id} - получить клиента по его ID`);
      console.log(
        `PATCH ${URI_PREFIX}/{id} - изменить клиента с ID, в теле запроса нужно передать объект { name?: string, surname?: string, patronymic?: string, contacts?: object[] }`
      );
      console.log(
        `\tcontacts - массив объектов контактов вида { type: string, value: string }`
      );
      console.log(`DELETE ${URI_PREFIX}/{id} - удалить клиента по ID`);
    }
  })
  // ...и вызываем запуск сервера на указанном порту
  .listen(PORT);
