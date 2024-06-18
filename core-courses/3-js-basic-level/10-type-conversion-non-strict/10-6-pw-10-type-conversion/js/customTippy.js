(() => {
  // в данной реализации прослушка DOMContentLoaded необходима
  document.addEventListener('DOMContentLoaded', () => {
    function initTippy(selector, content, side) {
      if (typeof tippy === 'function') {
        tippy(selector, {
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
        });
      } else {
        console.error('Tippy.js is not loaded!');
      }
    }

    initTippy('#formInputCollapse', 'развернуть/свернуть', 'right');
    initTippy('#formFilterCollapse', 'развернуть/свернуть', 'right');
    initTippy('#linkToAddStudForm', 'к форме добавления', 'right');
  });
})();
