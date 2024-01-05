let motherBoard = {
  usbPortCount: 8,
  chipset: 'AMD X570',
  socket: 'AM3/AM4',
};

let cpu = {
  coreCount: 8,
  cpuManufacture: 'AMD',
  socket: 'AM4', // одноимённое св-во, как у motherBoard (при соблюдении иерархии будет учитываться данное значение)
};

let videoCard = {
  videoCardModel: 'Nvidia GeForce GTX 1060',
  videoMemory: 4096,
};

let ram = {
  ramType: 'DDR4',
  ramVolume: 8192,
  ramFrequency: 3200,
};

// *формирование единого/общего объекта посредствам ...spread синтаксиса
let computer = {
  price: 100000, // данного/похожего свойства может и не быть
  ...motherBoard,
  ...cpu,
  ...videoCard,
  ...ram,
};

console.log(computer); // {price: 100000, usbPortCount: 8, chipset: 'AMD X570', socket: 'AM4', coreCount: 8, …}

// *альтернативный способ, с помощью статического метода Object.assign()
let computerWithAssign = Object.assign(
  // целевой объект, далее расширяемый (наличие не обязательно и так сформируется "общий")
  {
    price: 100000,
  },
  // добавляемые под-объекты
  motherBoard,
  cpu,
  videoCard,
  ram
);

console.log(computerWithAssign); // {price: 100000, usbPortCount: 8, chipset: 'AMD X570', socket: 'AM4', coreCount: 8, …}
