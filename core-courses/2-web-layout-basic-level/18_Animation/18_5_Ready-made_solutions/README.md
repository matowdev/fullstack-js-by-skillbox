# Lionic

### Описание проекта

**Lionic** — это первый "полноценный" проект/сайт, согласно программы обучения. Он демонстрирует работу с CSS-анимацией, адаптивными элементами и интерактивными компонентами, включая бургер-меню.

[🔗 Демо-версия на GitHub Pages](https://matowdev.github.io/fullstack-js-by-skillbox/core-courses/2-web-layout-basic-level/18_Animation/18_5_Ready-made_solutions/)

---

### Функциональность

- **Адаптивная верстка** (для различных экранов).
- **CSS-анимации** (для плавного появления и скрытия элементов).
- **Интерактивное бургер-меню** (для удобной навигации на мобильных устройствах).
- **Использование CSS-переменных** (для удобного управления стилями).
- **Гибкая сетка на основе Bootstrap Grid**.

---

### Используемые технологии и библиотеки

#### Front-end:

- **HTML, CSS, JavaScript** — базовые технологии.
- **Bootstrap Grid v5.3.0** — сетка для адаптивной вёрстки.
- **Animate.css** — библиотека CSS-анимаций.
- **Hover.css** - библиотека CSS-анимаций.

---

### Структура проекта

```
project-root/
│── css/                # Основные стили проекта
│── fonts/              # Подключаемые шрифты
│── img/                # Графические материалы
│── libs/               # Сторонние библиотеки
│── index.html          # Главный HTML-файл
│── main.js             # Основной JS-файл
```

---

### Основные файлы и их назначение

#### `index.html`

- Разметка проекта, включая меню, контентные блоки и интерактивные элементы.

#### `style.css`

- Основные стили, включая сетку, кнопки, заголовки и декоративные элементы.

#### `media.css`

- Адаптивные стили для корректного отображения на мобильных устройствах.

#### `main.js`

- Логика бургер-меню для мобильных устройств.

```js
// burger menu / mobile
let burger = document.querySelector(".burger");
let menu = document.querySelector(".header__nav");
let menuLinks = menu.querySelectorAll(".nav__link");

burger.addEventListener("click", function () {
  burger.classList.toggle("burger_active");
  menu.classList.toggle("header__nav_active");
  document.body.classList.toggle("stop-scroll");
});

menuLinks.forEach(function (el) {
  el.addEventListener("click", function () {
    burger.classList.remove("burger_active");
    menu.classList.remove("header__nav_active");
    document.body.classList.remove("stop-scroll");
  });
});
```

---

### Заключение

Проект **Lionic** стал важным шагом/первым шагом в изучении анимации и адаптивной вёрстки. Работа с CSS-анимацией, медиазапросами и интерактивными элементами позволила глубже понять принципы фронтенд-разработки.
