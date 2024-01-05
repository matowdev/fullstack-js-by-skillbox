let myComputer = {
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

console.log(Object.keys(myComputer)); // (11) ['usbPortCount', 'chipset', 'coreCount', 'cpuManufacture', 'socket', 'videoCardModel', 'videoMemory', 'ramType', 'ramVolume', 'ramFrequency', 'price']
console.log(Object.values(myComputer)); // (11) [8, 'AMD X570', 8, 'AMD', 'AM4', 'Nvidia GeForce GTX 1060', 4096, 'DDR4', 8192, 3200, 100000]
console.log(Object.entries(myComputer)); // (11) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)] - т.е. массивы из свойств или из ключей/значений, как ['usbPortCount', 8]
