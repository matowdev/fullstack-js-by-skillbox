(() => {
  const audioBtn = document.querySelector('.footer__audio-btn');
  const audioPlayer = document.querySelector('.footer__audio-player');

  function initTippy(selector, content, side) {
    if (typeof tippy === 'function') {
      tippy(selector, {
        content: content,
        theme: 'main',
        delay: [50, 100],
        offset: [0, 12],
        placement: side,
      });
    } else {
      console.error('Tippy.js is not loaded!');
    }
  }

  initTippy('#four', 'The playing field is 4 by 4 cards', 'right');
  initTippy('#six', 'The playing field is 6 by 4 cards', 'left');
  initTippy('#eight', 'The playing field is 8 by 4 cards', 'right');
  initTippy('#info', 'Info', 'bottom');

  const audioBtnTippy = tippy(audioBtn, {
    content: 'Play music',
    theme: 'main',
    delay: [50, 100],
    offset: [8, 12],
    placement: 'bottom',
  });

  function updateAudioBtnTippy() {
    audioBtnTippy.setContent(audioPlayer.paused ? 'Play music' : 'Pause music');
  }

  audioPlayer.addEventListener('play', updateAudioBtnTippy);
  audioPlayer.addEventListener('pause', updateAudioBtnTippy);

  updateAudioBtnTippy();
})();
