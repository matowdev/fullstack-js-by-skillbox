console.log('\nObject.hasOwnProperty() EXAMPLE:\n');

let computer2 = {
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

for (let key in computer2) {
  if (!computer2.hasOwnProperty(key)) {
    continue;
  }

  console.log(computer2[key]); // 8, AMD X570, 8. AMD..
}
