document.addEventListener('DOMContentLoaded', function () {
  function onClick() {
    console.log('Вы нажали на кнопку!');
  }

  let btn = document.querySelector('.container__btn');
  btn.addEventListener('click', onClick);
});
