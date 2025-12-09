'use strict';

// Пример шаблона, когда нужно обновить множество элементов на основе их текущего состояния.

const container = document.getElementById('container');
const blocks = [];

// Создаем "виртуальный" контейнер в памяти. Вставка в него не вызывает перерисовку страницы.
const fragment = document.createDocumentFragment();

for (let i = 0; i < 200; i++) {
  const div = document.createElement('div');
  div.className = 'box';

  fragment.appendChild(div); // Добавляем элемент во фрагмент
  blocks.push(div); // Сохраняем ссылку на элемент в массив для быстрого доступа позже
}

// ЕДИНСТВЕННОЕ обращение к DOM. Браузер отрисует все 200 элементов за один раз (1 Layout, 1 Paint).
container.appendChild(fragment);

let rafCursor = null; // Храним ID анимации для отмены

function tick() {
  // Считываем размеры. Так как мы ничего не меняли в этом кадре ДО этого момента,
  // браузер берет данные из кэша и не запускает Reflow.
  const measures = blocks.map((block) => {
    return {
      el: block,
      newHeight: block.offsetHeight + 1, // Чтение метрики
    };
  });

  // Применяем изменения. Layout инвалидируется (становится "грязным").
  // Но так как чтение уже закончено, браузер выполнит пересчет только ОДИН раз в конце выполнения скрипта, перед отрисовкой кадра.
  measures.forEach((data) => {
    data.el.style.height = `${data.newHeight}px`; // Запись стиля
  });

  // Планируем следующий кадр
  rafCursor = requestAnimationFrame(tick);
}

function startAnimation() {
  if (!rafCursor) {
    tick();
  }
}

function pauseAnimation() {
  if (rafCursor) {
    cancelAnimationFrame(rafCursor);
    rafCursor = null;

    // Сброс высоты (также лучше делать пакетно, но здесь для краткости так)
    blocks.forEach((block) => {
      block.style.height = '20px';
    });
  }
}

document.getElementById('start').addEventListener('click', startAnimation);
document.getElementById('pause').addEventListener('click', pauseAnimation);

// !! Хотя этот метод убирает Layout Thrashing, изменение height все равно вызывает Reflow (пусть и один). Для идеальной анимации 60FPS, если логика позволяет, лучше использовать transform: scaleY(), так как это задействует только Composite (GPU).
