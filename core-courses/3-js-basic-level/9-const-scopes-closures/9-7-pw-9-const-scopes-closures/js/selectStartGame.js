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

    option.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
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
        startGame();
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
  const playfieldCardsList = document.createElement('ul');
  const restartBtn = document.createElement('button');
  const backBtn = document.createElement('button');
  const timerWrap = document.createElement('div');
  const timerBtnWrap = document.createElement('div');
  const timerBtnOn = document.createElement('button');
  const timerBtnSlash = document.createElement('span');
  const timerBtnOff = document.createElement('button');
  const timer = document.createElement('div');

  let interval;
  let selectedTime = 0;
  let isTimerActive = false;

  // ! start game
  function startGame() {
    clearInterval(interval);
    isTimerActive = false;

    playfieldCardsList.innerHTML = '';

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
    playfieldCardsList.classList.add('playfield__area-list');
    restartBtn.classList.add('btn', 'playfield__btn-restart', 'game-btn');
    backBtn.classList.add('btn', 'playfield__btn-back', 'game-btn');
    timerWrap.classList.add('footer__timer-wrap');
    timerBtnWrap.classList.add('footer__timer-btn-wrap');
    timerBtnOn.classList.add('btn', 'footer__timer-btn', 'game-timer-on');
    timerBtnSlash.classList.add('footer__timer-slash');
    timerBtnOff.classList.add('btn', 'footer__timer-btn', 'game-timer-off');
    timer.classList.add('footer__timer');

    restartBtn.textContent = 'Restart';
    backBtn.textContent = 'Back';
    timerBtnOn.textContent = 'on';
    timerBtnSlash.textContent = '/';
    timerBtnOff.textContent = 'off';
    timer.textContent = '00:00';

    playfieldAreaWrap.insertBefore(playfieldArea, playfieldBtnWrap);
    playfieldArea.append(playfieldCardsList);
    playfieldBtnWrap.append(restartBtn, backBtn);
    timerBtnWrap.append(timerBtnOn, timerBtnSlash, timerBtnOff);
    timerWrap.append(timerBtnWrap, timer);
    footerContainer.append(timerWrap);

    // !
    let selectedItemValue = selectedOption.value * 2;

    function getPairedNumArr(selectedItemValue) {
      const pairedNumArr = [];

      for (let i = 1; i <= selectedItemValue; i++) {
        pairedNumArr.push(i, i);
      }

      return pairedNumArr;
    }

    const pairedArr = getPairedNumArr(selectedItemValue);

    function getShuffledArr(pairedArr) {
      const newArr = [...pairedArr];

      for (let i = newArr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
      }

      return newArr;
    }

    const shuffledArr = getShuffledArr(pairedArr);

    function creatingElements(shuffledArr) {
      for (let i = 0; i < shuffledArr.length; i++) {
        const playfieldCardsItem = document.createElement('li');

        playfieldCardsItem.classList.add('playfield__area-item');
        playfieldCardsItem.setAttribute('value', shuffledArr[i]);

        if (shuffledArr.length == 16) {
          playfieldArea.classList.add('playfield__area_small');
          playfieldCardsList.classList.add('playfield__area-list_small');
          playfieldCardsItem.classList.add('playfield__area-item_small');
        } else if (shuffledArr.length == 24) {
          playfieldArea.classList.add('playfield__area_medium');
          playfieldCardsList.classList.add('playfield__area-list_medium');
          playfieldCardsItem.classList.add('playfield__area-item_medium');
        } else if (shuffledArr.length == 32) {
          playfieldArea.classList.add('playfield__area_large');
          playfieldCardsList.classList.add('playfield__area-list_large');
          playfieldCardsItem.classList.add('playfield__area-item_large');
        }

        playfieldCardsList.appendChild(playfieldCardsItem);
      }
    }

    creatingElements(shuffledArr);

    // !
    const timerFooter = document.querySelector('.footer__timer');

    function setGameTime(minutes) {
      selectedTime = minutes * 60;
      timerFooter.textContent = `${minutes}:00`;
    }

    function updateTimer() {
      if (selectedTime <= 0) {
        clearInterval(interval);

        if (isTimerActive) alert("Time's up!");

        isTimerActive = false;
        return;
      }

      selectedTime--;

      let minutes = Math.floor(selectedTime / 60);
      let seconds = selectedTime % 60;

      seconds = seconds < 10 ? '0' + seconds : seconds;
      timerFooter.textContent = `${minutes}:${seconds}`;
    }

    if (title.textContent == 'Path to mystery!') {
      setGameTime(2);
    } else if (title.textContent == 'Explore and combine!') {
      setGameTime(4);
    } else if (title.textContent == 'Find your way to victory!') {
      setGameTime(6);
    }

    document.querySelector('.game-timer-on').addEventListener('click', () => {
      if (!isTimerActive) {
        clearInterval(interval);
        interval = setInterval(updateTimer, 1000);
        isTimerActive = true;
      }
    });

    document.querySelector('.game-timer-off').addEventListener('click', () => {
      if (isTimerActive) {
        clearInterval(interval);
        isTimerActive = false;
      }
    });
  }

  startBtn.addEventListener('click', startGame);

  // !
  function restartSelectedGame() {}

  restartBtn.addEventListener('click', restartSelectedGame);

  // !
  function returnToInitialState() {
    clearInterval(interval);

    playfieldArea.classList.remove(
      'playfield__area_small',
      'playfield__area_medium',
      'playfield__area_large'
    );
    playfieldCardsList.classList.remove(
      'playfield__area-list_small',
      'playfield__area-list_medium',
      'playfield__area-list_large'
    );
    const areaItems = document.querySelectorAll('.playfield__area-item');
    areaItems.forEach((item) => {
      item.classList.remove(
        'playfield__area-item_small',
        'playfield__area-item_medium',
        'playfield__area-item_large'
      );
    });

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
