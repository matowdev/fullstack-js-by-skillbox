(() => {
  const audioBtn = document.querySelector('.footer__audio-btn');
  const audioPlayer = document.querySelector('.footer__audio-player');
  const svgPlay = document.querySelector('.footer__audio-svg-play');
  const svgX = document.querySelector('.footer__audio-svg-x');

  audioBtn.addEventListener('click', () => {
    audioPlayer.classList.toggle('hidden');

    const isHidden = audioPlayer.classList.contains('hidden');

    svgPlay.classList.toggle('hidden', !isHidden);
    svgX.classList.toggle('hidden', isHidden);
  });

  audioPlayer.addEventListener('play', () => {
    audioBtn.classList.add('footer__audio-btn_glow');
  });

  audioPlayer.addEventListener('pause', () => {
    audioBtn.classList.remove('footer__audio-btn_glow');
  });
})();
