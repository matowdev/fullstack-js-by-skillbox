# Игра "Tarot cards"

### Описание проекта

Данный проект представляет собой браузерную игру "Tarot cards", разработанную для практики работы с замыканиями, областями видимости и `const`. Игрок открывает карточки, находя пары, и стремится завершить игру за минимальное время. В проекте реализованы анимации, звуковые эффекты и система выбора сложности.

[🔗 Демо-версия на GitHub Pages](https://matowdev.github.io/fullstack-js-by-skillbox/core-courses/3-js-basic-level/9-const-scopes-closures/9-7-pw-9-const-scopes-closures/)

---

### Функциональность

- **Выбор размера игрового поля** (4×4, 6×4, 8×4).
- **Перемешивание карт** при начале игры.
- **Выбор и сравнение карт**.
- **Анимация переворота** карт.
- **Звуковые эффекты** (включение/выключение фона).
- **Таймер игры** (возможность включения и выключения).
- **Перезапуск игры** (без перезагрузки страницы).

---

### Внешний вид приложения

![Игра "Tarot cards"](https://github.com/matowdev/fullstack-js-by-skillbox/blob/0a993570367cc5bda5028ddbd943a56a4a09647c/core-courses/3-js-basic-level/9-const-scopes-closures/9-7-pw-9-const-scopes-closures/images/final-app-view.png?raw=true)

---

### Используемые технологии и библиотеки

#### Front-end:

- **HTML, CSS, JavaScript** – основные технологии проекта.
- **Tippy.js** – всплывающие подсказки.
- **Popper.js** – управление позиционированием элементов.
- **CSS-анимации и keyframes** – эффекты для карт.

---

### Структура проекта

#### Основные принципы:

- **Структурированный и читаемый код**.
- **Использование замыканий и областей видимости**.
- **Адаптивность игрового поля**.

**Основные файлы и папки:**

```
project-root/
│── css/                 # Стили проекта
│── fonts/               # Подключенные шрифты
│── images/              # Графика (карты, задние фоны)
│── js/                  # Скрипты игры
│── libs/                # Подключенные библиотеки
│── tracks/              # Аудиофайлы игры
│── index.html           # Главная страница игры
│── README.md            # Описание проекта
```

---

### Основные файлы и их назначение

#### `index.html`

- Основной HTML-файл с игровым интерфейсом.
- Включает навигацию по игровому полю и кнопки управления.

#### `selectStartGame.js`

- Логика выбора количества карт и запуска игры.
- Обрабатывает клик и навигацию клавишами.

#### `customTippy.js`

- Реализует подсказки с описанием игровых элементов.

#### `footerAudioBtn.js`

- Управляет аудиоплеером (включение/выключение музыки).

#### `infinitePlayback.js`

- Организует бесконечное воспроизведение музыкальных треков.

---

### Запуск проекта

#### Открытие локально:

```sh
open index.html
```

---

### Заключение

Этот проект демонстрирует работу с JavaScript в интерактивной среде. Он помогает закрепить навыки работы с событиями, анимациями, областями видимости и динамическим взаимодействием с DOM.
