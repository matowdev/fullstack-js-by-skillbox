let computer = {
  usbPortCount: 8,
  chipset: 'AMD X570',
  coreCount: 8,
  cpuManufacture: 'AMD',
  socket: 'AM4',
  videoCardModel: 'Nvidia GeForce GTX 1060',
  videoMemory: 4096,
  ramType: 'DDR4',
  ramVolume: 8192,
  ramFrequency: 3200,
  price: 100000,
};

let arrKeys = Object.keys(computer);
let arrValues = Object.values(computer);
let arrEntries = Object.entries(computer);

console.log('KEYS:\n');

for (let key of arrKeys) {
  // console.log(`${key}: ${computer[key]}`); // usbPortCount: 8, chipset: AMD X570..
  console.log(key); // usbPortCount, chipset..
}

console.log('\nVALUES:\n');

for (let value of arrValues) {
  console.log(value); // 8, AMD X570, 8..
}

console.log('\nENTRIES:\n');

for (let entry of arrEntries) {
  // console.log(`${entry[0]}: ${entry[1]}`); // usbPortCount: 8, chipset: AMD X570..
  console.log(entry); // ['usbPortCount', 8], ['chipset', 'AMD X570']..
}

console.log('\nENTRIES with DESTRUCTURING:\n');

// *вариант деструктуризации массива
for (let [key, value] of arrEntries) {
  console.log(`${key}: ${value}`); // usbPortCount: 8, chipset: AMD X570..
}

console.log('\nOBJECT DESTRUCTURING:\n');

// *пример деструктуризации объекта
let { socket, videoCardModel, videoMemory } = computer;

console.log(socket); // AM4
console.log(videoCardModel); // Nvidia GeForce GTX 1060
console.log(videoMemory); // 4096
