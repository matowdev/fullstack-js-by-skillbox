// 1.
let block = document.querySelector('.block');
let clickCount = 0;

block.addEventListener('click', function () {
  clickCount++;
  if (clickCount % 2 === 1) {
    block.classList.add('block_translate');
  } else {
    block.classList.remove('block_translate');
  }
});
