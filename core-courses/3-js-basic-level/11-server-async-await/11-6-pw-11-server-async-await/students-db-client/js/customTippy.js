(() => {
  // в данной реализации прослушка DOMContentLoaded необходима
  document.addEventListener('DOMContentLoaded', () => {
    function initTippy(selector, content, side, customOptions = {}) {
      if (typeof tippy === 'function') {
        const defaultOptions = {
          content: content,
          theme: 'main',
          delay: [50, 0],
          offset: [0, 12],
          placement: side,
          animation: 'scale', // анимация появления/скрытия (через дополнительный файл/подключение)
          trigger: 'mouseenter', // только по наведению мыши (исключение вывода по клику, в другом месте)

          onShow(instance) {
            setTimeout(() => {
              instance.hide(); // автоматическое скрытие (по истечению времени)
            }, 1000);
          },
        };

        tippy(selector, { ...defaultOptions, ...customOptions }); // применение "общих" настроек с возможностью переопределения/индивидуального изменения, согласно customOptions
      } else {
        console.error('Tippy.js is not loaded!');
      }
    }

    initTippy('#formInputCollapse', 'развернуть/свернуть', 'right');
    initTippy('#formFilterCollapse', 'развернуть/свернуть', 'right');
    initTippy('#tableThTag', 'сбросить сортировку', 'right', {
      offset: [0, -2],
    });
    initTippy('#tableThFIO', 'сортировать ⇵', 'bottom', {
      offset: [0, -2],
    });
    initTippy('#tableThFaculty', 'сортировать ⇵', 'bottom', {
      offset: [0, -2],
    });
    initTippy('#tableThBirthDate', 'сортировать ⇵', 'bottom', {
      offset: [0, -2],
    });
    initTippy('#tableThStartYear', 'сортировать ⇵', 'bottom', {
      offset: [0, -2],
    });
    initTippy('#linkToAddStudForm', 'к форме добавления', 'bottom');
    initTippy('#deselectBtn', 'выделения студентов(а)', 'bottom');
    initTippy('#deleteBtn', 'выбранных(ого) студентов(а)', 'right');
  });
})();
