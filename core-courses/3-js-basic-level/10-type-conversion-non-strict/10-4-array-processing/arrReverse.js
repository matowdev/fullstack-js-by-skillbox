// ** организация обратного порядка/переворота массива, метод reverse()
const numArr = [0, 1, 2, 3, 4, 5];

const reverseNumArr = numArr.slice().reverse(); // без slice()/копии изменится исходный массив
console.log(reverseNumArr); // [5, 4, 3, 2, 1, 0]
