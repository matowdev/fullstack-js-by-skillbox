// ** подсчёт значений из данных массива (объектов), метод reduce()
const cartItems = [
  { name: 'Гречка, 500 г.', price: 50, quantity: 3 },
  { name: 'Сок яблочный, 900 мл.', price: 100, quantity: 1 },
  { name: 'Бананы, 1 кг.', price: 150, quantity: 1 },
];

// подсчёт итоговой суммы
const receipt = cartItems.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);
console.log(`Итого к оплате: ${receipt} рублей.`); // Итого к оплате: 400 рублей.

// ? альтернатива, без reduce()
let total = 0;

for (const item of cartItems) {
  total = total + item.price * item.quantity;
}

console.log(`Итого: ${total} рублей.`); // Итого: 400 рублей.
