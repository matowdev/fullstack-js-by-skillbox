// ** логическое преобразование, согласно: switch/case, Boolean() или двойного !! отрицания
function hasSomething(value) {
  // switch (typeof value) {
  //   // для boolean значения, возврат как/есть (true = 1, false = 0)
  //   case 'boolean':
  //     return value;
  //   // для чисел, проверка на ноль
  //   case 'number':
  //     return value !== 0;
  //   // для строк, проверка на непустую строку
  //   case 'string':
  //     return value !== '';
  //   // для объектов, проверка на null (объект не может быть нулевым, так/что "просто" для воображаемой ситуации)
  //   case 'object':
  //     return value !== null;
  //   // для функций, возврат true (это/как с объектами, они или есть или нет.. ссылки)
  //   case 'function':
  //     return true;
  //   // для undefined, очевидно.. возврат false
  //   case 'undefined':
  //     return false;
  // }

  // return Boolean(value);

  return !!value;
}
