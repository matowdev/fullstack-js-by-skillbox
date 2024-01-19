document.addEventListener('DOMContentLoaded', function () {
  let colorInput = document.querySelector('.color-input');
  let colorBlock = document.querySelector('.color-block');
  let clearBtn = document.querySelector('.clear-color-btn');

  function paintBlock() {
    colorBlock.style.backgroundColor = colorInput.value;
  }

  colorInput.addEventListener('input', paintBlock);

  paintBlock();

  clearBtn.addEventListener('click', function () {
    colorBlock.style.removeProperty('background-color');
    colorInput.value = '';
  });
});
