function checkPassword(password) {
  password = password.toString();
  if (
    password.length >= 4 &&
    (password.includes('-') || password.includes('_'))
  ) {
    return console.log('Ого, надёжный пароль! Вы ввели: ' + password);
  } else {
    return console.log('Внимание! Ненадёжный пароль.. Вы ввели: ' + password);
  }
}

checkPassword(123456789); // Внимание! Ненадёжный пароль.. Вы ввели: 123456789
checkPassword('1234-'); // Ого, надёжный пароль! Вы ввели: 1234-
checkPassword('4321_'); // Ого, надёжный пароль! Вы ввели: 4321_
checkPassword('qaz-xsw'); // Ого, надёжный пароль! Вы ввели: qaz-xsw
checkPassword('_zxd'); // Ого, надёжный пароль! Вы ввели: _zxd
checkPassword('_-a'); // Внимание! Ненадёжный пароль.. Вы ввели: _-a
checkPassword('qaz'); // Внимание! Ненадёжный пароль.. Вы ввели: qaz
checkPassword('_-3'); // Внимание! Ненадёжный пароль.. Вы ввели: _-3

console.log('');
