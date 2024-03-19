(() => {
  const audioBtn = document.querySelector('.footer__audio-btn');

  audioBtn.addEventListener('click', () => {
    const audio = document.querySelector('.footer__audio');
    const svgPlay = document.querySelector('.footer__audio-svg-play');
    const svgX = document.querySelector('.footer__audio-svg-x');

    audio.classList.toggle('hidden');

    if (!audio.classList.contains('hidden')) {
      svgPlay.classList.add('hidden');
      svgX.classList.remove('hidden');
    } else if (audio.classList.contains('hidden')) {
      svgPlay.classList.remove('hidden');
      svgX.classList.add('hidden');
    }

    audio.addEventListener('play', () => {
      audioBtn.classList.add('footer__audio-btn_glow');
    });

    audio.addEventListener('pause', () => {
      audioBtn.classList.remove('footer__audio-btn_glow');
    });
  });
})();
