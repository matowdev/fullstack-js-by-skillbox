(() => {
  let tracksArr = [
    'tracks/brain.mp3',
    'tracks/close.mp3',
    'tracks/golden.mp3',
    'tracks/sigh.mp3',
    'tracks/sky.mp3',
  ];
  let currentTrack = -1;
  const audioPlayer = document.querySelector('.footer__audio-player');

  audioPlayer.onended = function () {
    currentTrack++;

    if (currentTrack >= tracksArr.length) {
      currentTrack = 0;
    }

    audioPlayer.src = tracksArr[currentTrack];
    audioPlayer.load();
    audioPlayer.play();
  };
})();
