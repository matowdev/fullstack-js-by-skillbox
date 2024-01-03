// 1.
console.log(document.querySelector('.text'));
// document.querySelector('.text').style.color = 'lightgray';

// 2.
// let text = document.querySelector('.text');
// text.style.color = 'lightgray';

// 3.
document.querySelectorAll('.text').forEach(function (element) {
  element.style.color = 'lightgray';
});

// 4.
let block = document.querySelector('.block');
block.classList.add('block_translate');
