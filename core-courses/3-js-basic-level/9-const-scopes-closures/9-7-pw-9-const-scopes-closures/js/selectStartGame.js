(() => {
  const initialPageState = {
    title: document.querySelector('.header__title').textContent,
    pageClassList: document.querySelector('.page').className,
    headerClassList: document.querySelector('.header').className,
    titleClassList: document.querySelector('.header__title').className,
    playfieldClassList: document.querySelector('.playfield').className,
    playfieldBtnWrapClassList: document.querySelector('.playfield__btn-wrap')
      .className,
    footerContainerClassList:
      document.querySelector('.footer__container').className,
    audioWrapClassList: document.querySelector('.footer__audio-wrap').className,
  };

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

  const page = document.querySelector('.page');
  const header = document.querySelector('.header');
  const title = document.querySelector('.header__title');
  const playfield = document.querySelector('.playfield');
  const playfieldAreaWrap = document.querySelector('.playfield__options-wrap');
  const playfieldOptionsList = document.querySelector('.playfield__options');
  const playfieldBtnWrap = document.querySelector('.playfield__btn-wrap');
  const startBtn = document.querySelector('.playfield__btn-start');
  const footerContainer = document.querySelector('.footer__container');
  const audioWrap = document.querySelector('.footer__audio-wrap');
  const infoLink = document.querySelector('.footer__info-link');

  const playfieldArea = document.createElement('div');
  const restartBtn = document.createElement('button');
  const backBtn = document.createElement('button');
  // add timer
  const timerWrap = document.createElement('div');
  const timerBtnWrap = document.createElement('div');
  const timerBtnOn = document.createElement('button');
  const timerBtnSlash = document.createElement('span');
  const timerBtnOff = document.createElement('button');
  const timer = document.createElement('div');

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
    playfieldOptionsList.classList.add('hidden');
    playfieldBtnWrap.classList.add('game-btn-wrap');
    startBtn.classList.add('hidden');
    footerContainer.classList.add('game-footer-container');
    audioWrap.classList.add('game-audio-wrap');
    infoLink.classList.add('hidden');
    playfieldArea.classList.add('playfield__area');
    restartBtn.classList.add('btn', 'playfield__btn-restart', 'game-btn');
    backBtn.classList.add('btn', 'playfield__btn-back', 'game-btn');
    // timer
    timerWrap.classList.add('footer__timer-wrap');
    timerBtnWrap.classList.add('footer__timer-btn-wrap');
    timerBtnOn.classList.add('btn', 'footer__timer-btn');
    timerBtnSlash.classList.add('footer__timer-slash');
    timerBtnOff.classList.add('btn', 'footer__timer-btn');
    timer.classList.add('footer__timer');

    restartBtn.textContent = 'Restart';
    backBtn.textContent = 'Back';
    // timer
    timerBtnOn.textContent = 'on';
    timerBtnSlash.textContent = '/';
    timerBtnOff.textContent = 'off';
    timer.textContent = '00:00';

    playfieldAreaWrap.insertBefore(playfieldArea, playfieldBtnWrap);
    playfieldBtnWrap.append(restartBtn, backBtn);
    // timer
    timerBtnWrap.append(timerBtnOn, timerBtnSlash, timerBtnOff);
    timerWrap.append(timerBtnWrap, timer);
    footerContainer.append(timerWrap);
  }

  startBtn.addEventListener('click', startGame);

  function restartSelectedGame() {}

  restartBtn.addEventListener('click', restartSelectedGame);

  function returnToInitialState() {
    document.querySelector('.header__title').textContent =
      initialPageState.title;
    document.querySelector('.page').className = initialPageState.pageClassList;
    document.querySelector('.header').className =
      initialPageState.headerClassList;
    document.querySelector('.header__title').className =
      initialPageState.titleClassList;
    document.querySelector('.playfield').className =
      initialPageState.playfieldClassList;
    document.querySelector('.playfield__btn-wrap').className =
      initialPageState.playfieldBtnWrapClassList;
    document.querySelector('.footer__container').className =
      initialPageState.footerContainerClassList;
    document.querySelector('.footer__audio-wrap').className =
      initialPageState.audioWrapClassList;

    playfieldArea.remove();
    restartBtn.remove();
    backBtn.remove();
    // timer
    timerWrap.remove();

    playfieldOptionsList.classList.remove('hidden');
    startBtn.classList.remove('hidden');
    infoLink.classList.remove('hidden');

    playfieldSizeOptions.forEach((option) => {
      option.classList.remove('selected__options-item');
    });

    selectedOption = null;
  }

  backBtn.addEventListener('click', returnToInitialState);
})();
