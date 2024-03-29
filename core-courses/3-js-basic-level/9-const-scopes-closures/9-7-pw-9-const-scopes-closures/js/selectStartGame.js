(() => {
  const playfieldSizeOptions = document.querySelectorAll(
    '.playfield__options-item'
  );
  let selectedOption = null;

  playfieldSizeOptions.forEach((option) => {
    option.addEventListener('click', function () {
      if (this === selectedOption) {
        this.classList.remove('selected__options-item');
        selectedOption = null;
      } else if (selectedOption) {
        selectedOption.classList.remove('selected__options-item');
        this.classList.add('selected__options-item');
        selectedOption = this;
      } else {
        this.classList.add('selected__options-item');
        selectedOption = this;
      }
    });
  });

  // ? или внутри функции
  const page = document.querySelector('.page');
  const header = document.querySelector('.header');
  const title = document.querySelector('.header__title');
  const playfield = document.querySelector('.playfield');
  const playfieldArea = document.querySelector('.playfield__options-wrap');
  const playfieldOptionsList = document.querySelector('.playfield__options');
  const playfieldBtnWrap = document.querySelector('.playfield__btn-wrap');
  const startBtn = document.querySelector('.playfield__btn-start');
  const footerContainer = document.querySelector('.footer__container');
  const audioWrap = document.querySelector('.footer__audio-wrap');
  const infoLink = document.querySelector('.footer__info-link');

  const restartBtn = document.createElement('button');
  const backBtn = document.createElement('button');

  function startGame() {
    if (selectedOption && selectedOption.id == 'four') {
      title.textContent = 'Path to mystery!';
    } else if (selectedOption && selectedOption.id == 'six') {
      title.textContent = 'Explore and combine!';
    } else if (selectedOption && selectedOption.id == 'eight') {
      title.textContent = 'Find your way to victory!';
    } else {
      alert('Select the playing field and press "Start".');
      return;
    }

    page.classList.add('game-page');
    header.classList.add('game-header');
    title.classList.add('game-title');
    playfield.classList.add('game-playfield');
    playfieldBtnWrap.classList.add('game-btn-wrap');
    startBtn.classList.add('hidden');
    footerContainer.classList.add('game-footer-container');
    audioWrap.classList.add('game-audio-wrap');
    infoLink.classList.add('hidden');
    restartBtn.classList.add(
      'btn',
      'playfield__btn-restart',
      'game-btn',
      'game-btn-restart'
    );
    backBtn.classList.add(
      'btn',
      'playfield__btn-back',
      'game-btn',
      'game-btn-back'
    );

    playfieldOptionsList.outerHTML = '<div class="playfield__area"></div>';
    restartBtn.textContent = 'Restart';
    backBtn.textContent = 'Back';

    playfieldBtnWrap.append(restartBtn, backBtn);
  }

  startBtn.addEventListener('click', startGame);

  function restartSelectedGame() {}

  restartBtn.addEventListener('click', restartSelectedGame);

  function returnToMainMenu() {}

  backBtn.addEventListener('click', returnToMainMenu);
})();
