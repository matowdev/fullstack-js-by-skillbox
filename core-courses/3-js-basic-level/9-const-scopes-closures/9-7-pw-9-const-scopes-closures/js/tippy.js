(() => {
  function initTippy(selector, content, side) {
    tippy(selector, {
      content: content,
      theme: 'main',
      delay: [50, 100],
      offset: [0, 12],
      placement: side,
    });
  }

  initTippy('#four', 'The playing field is 4 by 4 cards', 'right');
  initTippy('#six', 'The playing field is 6 by 4 cards', 'left');
  initTippy('#eight', 'The playing field is 8 by 4 cards', 'right');
  initTippy('#audio-btn', 'Play music', 'bottom');
  initTippy('#info', 'Info', 'top');
})();
