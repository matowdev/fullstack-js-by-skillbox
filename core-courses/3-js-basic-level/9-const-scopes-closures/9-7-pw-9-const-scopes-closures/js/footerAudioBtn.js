(() => {
  const audioBtn = document.querySelector('.footer__audio-btn');
  const audio = document.querySelector('.footer__audio');
  const svgPlay = document.querySelector('.footer__audio-svg-play');
  const svgX = document.querySelector('.footer__audio-svg-x');

  audioBtn.addEventListener('click', () => {
    audio.classList.toggle('hidden');

    const isHidden = audio.classList.contains('hidden');

    svgPlay.classList.toggle('hidden', !isHidden);
    svgX.classList.toggle('hidden', isHidden);
  });

  audio.addEventListener('play', () => {
    audioBtn.classList.add('footer__audio-btn_glow');
  });

  audio.addEventListener('pause', () => {
    audioBtn.classList.remove('footer__audio-btn_glow');
  });
})();
