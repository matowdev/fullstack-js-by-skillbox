// ** преобразование/получение строки, функция String()
String(true); // 'true'
String(false); // 'false'

String(42); // '42'
String(3.14); // '3.14'

String(null); // 'null'
String(undefined); // 'undefined'

String({}); // '[object Object]'

String({
  toString() {
    return 'А если внутри объекта метод toString()??';
  },
}); // ? 'А если внутри объекта метод toString()??'

String([
  true,
  1,
  'строка',
  {},
  {
    toString() {
      return 'Хороший метод toString()';
    },
  },
  null,
  undefined,
]); // 'true,false,1,строка,[object Object],Хороший метод toString(),,,' - как видно строка, склеенная запятыми
