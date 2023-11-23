// *организация возврата значения
function getCardIndex(cards, wantedCard = 'Туз') {
  console.log('В колоде ищем? карту.. ' + wantedCard + '!');

  let foundIndex = -1;

  for (let index in cards) {
    let card = cards[index];
    console.log(`Из колоды вытащили - ${card}!`);
    if (card === wantedCard) {
      foundIndex = index;
      break;
    }
  }

  console.log(
    foundIndex > -1
      ? `Мы нашли карту: ${wantedCard}! Бинго!!`
      : `В колоде видимо нет, карты: ${wantedCard} :(`
  );

  return foundIndex;
}

let arrCards = ['2', 'Король', '10', 'Туз', '5', '6', 'Валет'];

let cardIndex = getCardIndex(arrCards);
console.log('// Индекс: ' + cardIndex); // 3

let cardIndex2 = getCardIndex(arrCards, 'Дама');
console.log('// Индекс: ' + cardIndex2); // -1

// ? или так.. два return

function getCardIndex2(cards, wantedCard = 'Туз') {
  console.log('В колоде ищем? карту.. ' + wantedCard + '!');

  for (let index in cards) {
    let card = cards[index];
    console.log(`Из колоды вытащили - ${card}!`);
    if (card === wantedCard) {
      console.log(`Мы нашли карту: ${wantedCard}! Бинго!!`);
      return index;
    }
  }

  console.log(`В колоде видимо нет, карты: ${wantedCard} :(`);

  return -1;
}

let arrCards2 = ['2', 'Король', '10', 'Туз', '5', '6', 'Валет'];

let cardIndex3 = getCardIndex2(arrCards);
console.log('// Индекс: ' + cardIndex3); // 3

let cardIndex4 = getCardIndex2(arrCards, 'Дама');
console.log('// Индекс: ' + cardIndex4); // -1
