(() => {
  document.addEventListener('DOMContentLoaded', () => {
    function initBootstrapTooltip(
      selector,
      content,
      placement,
      customOptions = {}
    ) {
      const element = document.querySelector(selector);
      if (element) {
        const defaultOptions = {
          title: content,
          placement: placement,
          trigger: 'hover', // появление по наведению мыши
          delay: { show: 50, hide: 0 }, // задержка появления
        };

        const options = { ...defaultOptions, ...customOptions };

        if (element.tooltipInstance) {
          element.tooltipInstance.dispose(); // удаление предыдущего tooltip (т.е. здесь появление, там сразу скрытие)
        }

        const tooltip = new bootstrap.Tooltip(element, options); // инициализация Bootstrap tooltips

        element.addEventListener('shown.bs.tooltip', () => {
          setTimeout(() => {
            tooltip.hide(); // автоматическое скрытие (по истечению времени)
          }, 1000);
        });

        element.tooltipInstance = tooltip; // фиксация tooltip на элементе
      }
    }

    // инициализация Tippy только/для #search-logo (в зависимости от ширины экрана)
    function initTooltipForSearchLogo() {
      const isSmallWidth = window.matchMedia('(max-width: 320px)').matches; // уточнение ширины
      const searchLogo = document.querySelector('#search-logo');

      if (isSmallWidth && searchLogo) {
        initBootstrapTooltip('#search-logo', 'Показать/скрыть..!?', 'top', {
          offset: [0, 8],
        });
      } else if (!isSmallWidth && searchLogo && searchLogo.tooltipInstance) {
        searchLogo.tooltipInstance.dispose(); // исключение всплывающей подсказки, если экран больше 320px
      }
    }

    // инициализация Tippy для/всех "остальных" элементов (без учёта ширины экрана)
    function initTooltipForOther() {
      initBootstrapTooltip('#hash-tag-title', 'сбросить сортировку', 'bottom', {
        offset: [0, 2],
      });
      initBootstrapTooltip('#table-th-id', 'сортировать ⇵', 'bottom', {
        offset: [0, 2],
      });
      initBootstrapTooltip('#table-th-fio', 'сортировать ⇵', 'bottom', {
        offset: [0, 2],
      });
      initBootstrapTooltip('#table-th-dt', 'сортировать ⇵', 'bottom', {
        offset: [0, 2],
      });
      initBootstrapTooltip('#table-th-change', 'сортировать ⇵', 'bottom', {
        offset: [0, 2],
      });
    }

    initTooltipForSearchLogo();
    initTooltipForOther();

    window.addEventListener('resize', initTooltipForSearchLogo); // отслеживание изменения ширины экрана (разрешения)
  });
})();
