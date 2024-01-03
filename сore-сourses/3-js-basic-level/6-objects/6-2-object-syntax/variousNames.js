function printObjProp(obj, propName) {
  return console.log(obj[propName]);
}

let about = {
  name: 'Sergey',
  surname: 'Stuk',
  middle: 'N.',
  birthDate: { year: 1986, month: 8, day: 20 },
  occupation: 'unemployed',
  married: true,
};

printObjProp(about, 'name'); // Sergey
printObjProp(about, 'middle'); // N.
