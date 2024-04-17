(() => {
  const cardBackgroundsArr = [
    'images/tarot-1.jpg',
    'images/tarot-2.jpg',
    'images/tarot-3.jpg',
    'images/tarot-4.jpg',
    'images/tarot-5.jpg',
    'images/tarot-6.jpg',
    'images/tarot-7.jpg',
    'images/tarot-8.jpg',
    'images/tarot-9.jpg',
    'images/tarot-10.jpg',
    'images/tarot-11.jpg',
    'images/tarot-12.jpg',
    'images/tarot-13.jpg',
    'images/tarot-14.jpg',
    'images/tarot-15.jpg',
    'images/tarot-16.jpg',
  ];

  // фиксация начальных состоянии/классов (у некоторых элементов)
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

  // получение существующих, создание новых элементов (глобальное объявление)
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

  // выделение/фиксация варианта игрового поля 4, 6 или 8 (мышью, через tab/enter)
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

  // добавление дополнительных/первичных классов, наполнение, вставка элементов в DOM-структуру (при старте игры)
  function updateUIAfterStartGame() {
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
  }

  // создание дублированного, перемешенного массива (т.е. 16, 24 или 32-е будущих карт(ы), согласно выбранного поля)
  function getPairedNumArr(selectedItemValue) {
    const pairedNumArr = [];

    for (let i = 1; i <= selectedItemValue; i++) {
      pairedNumArr.push(i, i);
    }

    return pairedNumArr;
  }

  function getShuffledArr(pairedArr) {
    const newArr = [...pairedArr];

    for (let i = newArr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * newArr.length);
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }

    return newArr;
  }

  // создание карт, под соответствующее игровое поле (разная стилизация)
  function createCardsItem(shuffledArr) {
    for (let i = 0; i < shuffledArr.length; i++) {
      const playfieldCardsItem = document.createElement('li');

      playfieldCardsItem.classList.add('playfield__area-item');
      playfieldCardsItem.setAttribute('value', shuffledArr[i]);
      playfieldCardsItem.setAttribute('tabindex', '0');

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

  // взаимодействие с игровыми картами: выбор, их сравнение (исключение из выбора)
  let selectedCardsArr = [];
  let isChecked = false;
  let cardBackTimer;

  function cardSelection(card) {
    if (isChecked || selectedCardsArr.length >= 2) return;

    const cardValue = card.getAttribute('value');

    if (!card.classList.contains('playfield__area-item_selected')) {
      const alreadySelected = selectedCardsArr.some(
        (selected) => selected.card === card
      );

      if (!alreadySelected) {
        card.classList.add('playfield__area-item_selected');
        selectedCardsArr.push({ card, value: cardValue });

        clearTimeout(cardBackTimer);

        cardBackTimer = setTimeout(() => {
          card.classList.remove('playfield__area-item_selected');
          selectedCardsArr = selectedCardsArr.filter(
            (selected) => selected.card !== card
          );
          card.blur();
        }, 10000);
      }

      if (selectedCardsArr.length === 2) {
        isChecked = true;
        setTimeout(checkPairCards, 500);
      }
    } else {
      card.classList.remove('playfield__area-item_selected');
      selectedCardsArr = selectedCardsArr.filter(
        (selected) => selected.card !== card
      );
      card.blur();

      clearTimeout(cardBackTimer);
    }
  }

  function checkPairCards() {
    if (selectedCardsArr[0].value === selectedCardsArr[1].value) {
      selectedCardsArr.forEach(({ card }) => {
        card.classList.add('paired');
        card.setAttribute('tabindex', '-1');
      });
    } else {
      selectedCardsArr.forEach(({ card }) => {
        card.classList.remove('playfield__area-item_selected');
        card.blur();
      });
    }

    selectedCardsArr = [];
    isChecked = false;
  }

  // организация внутри-игрового таймера (разное время, обновление)
  let interval;
  let selectedTime = 0;
  let isTimerActive = false;

  function setGameTime(minutes, timer) {
    selectedTime = minutes * 60;
    timer.textContent = `${minutes}:00`;
  }

  function updateTimer(timer) {
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
    timer.textContent = `${minutes}:${seconds}`;
  }

  // ! начало игры, кнопка "Start" (ряд действий)
  function startGame() {
    // предварительные очистки/сбросы
    clearInterval(interval);
    isTimerActive = false;
    playfieldCardsList.innerHTML = '';

    // определение заголовка игрового поля, исходя из размера поля
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

    // обновление интерфейса (ввод игрового поля, новых кнопок, таймера)
    updateUIAfterStartGame();

    // получение/создание карт
    let selectedItemValue = selectedOption.value * 2;
    const pairedArr = getPairedNumArr(selectedItemValue);
    const shuffledArr = getShuffledArr(pairedArr);
    createCardsItem(shuffledArr);

    // взаимодействие с картами: выбор, сравнение (мышью, через tab/enter)
    const playfieldCards = document.querySelectorAll('.playfield__area-item');

    playfieldCards.forEach((card) => {
      card.addEventListener('click', function () {
        cardSelection(card);
      });

      card.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
          cardSelection(card);
          event.preventDefault();
        }
      });
    });

    // установка таймера (запуск/отмена)
    const timer = document.querySelector('.footer__timer');
    let minutes = 0;

    if (title.textContent == 'Path to mystery!') {
      minutes = 2;
    } else if (title.textContent == 'Explore and combine!') {
      minutes = 4;
    } else if (title.textContent == 'Find your way to victory!') {
      minutes = 6;
    }

    setGameTime(minutes, timer);

    document.querySelector('.game-timer-on').addEventListener('click', () => {
      if (!isTimerActive) {
        clearInterval(interval);
        interval = setInterval(() => updateTimer(timer), 1000);
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

  // перезапуск выбранного игрового поля, кнопка "Restart" (новое расположение карт, таймер за ново)
  function restartSelectedGame() {}

  restartBtn.addEventListener('click', restartSelectedGame);

  // возврат на основную страницу, кнопка "Back" (очистка/удаление, первичное состояние)
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
