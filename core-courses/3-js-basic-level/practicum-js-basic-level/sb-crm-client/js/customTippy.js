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

    // инициализация Tippy только/для #search-logo (в зависимости от ширины экрана)
    function initTippyForSearchLogo() {
      const isSmallWidth = window.matchMedia('(max-width: 320px)').matches; // уточнение ширины
      const searchLogo = document.querySelector('#search-logo');

      if (isSmallWidth && searchLogo && !searchLogo._tippy) {
        initTippy('#search-logo', 'Показать/скрыть', 'top', {
          offset: [0, 8],
        });
      } else if (!isSmallWidth && searchLogo && searchLogo._tippy) {
        searchLogo._tippy.destroy(); // исключение всплывающей подсказки, если экран больше 320px
      }
    }

    // инициализация Tippy для/всех "остальных" элементов (без учёта ширины экрана)
    function initTippyForOther() {
      initTippy('#hash-tag-title', 'к исходному виду', 'bottom', {
        offset: [0, 2],
      });
      initTippy('#table-th-id', 'сортировать ⇵', 'bottom', {
        offset: [0, 2],
      });
      initTippy('#table-th-fio', 'сортировать ⇵', 'bottom', {
        offset: [0, 2],
      });
      initTippy('#table-th-dt', 'сортировать ⇵', 'bottom', {
        offset: [0, 2],
      });
      initTippy('#table-th-change', 'сортировать ⇵', 'bottom', {
        offset: [0, 2],
      });
    }

    initTippyForSearchLogo();
    initTippyForOther();

    window.addEventListener('resize', initTippyForSearchLogo); // отслеживание изменения ширины экрана (разрешения)
  });
})();
