function checkParity(num) {
  num = +num;
  num % 2 === 0
    ? console.log(num + ' - число чётное!')
    : console.log(num + ' - число НЕ чётное..');
}

checkParity('10'); // 10 - число чётное!
checkParity(2); // 2 - число чётное!
checkParity(5); // 5 - число НЕ чётное..
checkParity(8); // 8 - число чётное!
checkParity(11); // 11 - число НЕ чётное..
