// функция с двумя параметрами
function findCard(cards, wantedCard = 'Туз') {
  console.log('В колоде ищем? карту.. ' + wantedCard + '!');

  let found = false;

  for (let card of cards) {
    console.log(`Из колоды вытащили - ${card}!`);
    if (card === wantedCard) {
      found = true;
      break;
    }
  }

  return console.log(
    found
      ? `Мы нашли карту: ${wantedCard}!`
      : `В колоде видимо нет, карты: ${wantedCard} :(`
  );
}

let arrCards = ['2', 'Король', '10', 'Туз', '5', '6', 'Валет'];

// поиск 'Туза', по сути параметра/значения по умолчанию
findCard(arrCards); // Мы нашли карту: Туз!

// поиск произвольной карты
findCard(arrCards, 'Дама'); // В колоде видимо нет, карты: Дама :(
