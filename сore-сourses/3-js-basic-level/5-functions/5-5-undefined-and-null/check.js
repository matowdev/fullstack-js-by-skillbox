let array = [1, 2, 3, false, null, undefined];

// проверка, а что/там с индексом 5
if (array[5] !== undefined) console.log('Такой индекс есть!'); // вывод сообщения не состоится, т.к. if/false
if (array.length > 5) console.log('Такой индекс есть!'); // вывод состоится, т.к. if/true
