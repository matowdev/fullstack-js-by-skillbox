// Определение чётности числа
function getEvenNumber(num) {
  if (num % 2 === 0) {
    console.log(`Число ${num} чётное!`);
  } else {
    console.log(`Число ${num} нечётное..`);
  }
}

getEvenNumber(2); // Число 2 чётное!
getEvenNumber(3); // Число 3 нечётное..
