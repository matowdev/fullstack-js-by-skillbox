document.addEventListener('DOMContentLoaded', () => {
  const mainDiv = document.createElement('div');
  const btn = document.createElement('button');

  let count = 0;

  mainDiv.classList.add('container', 'page__container');
  btn.classList.add('container__btn');

  function increment() {
    btn.textContent = count++; // постфиксная запись.. работа через предыдущее значение
  }

  increment(); // сразу отработка (+1 в памяти)

  btn.addEventListener('click', increment);

  mainDiv.append(btn);
  document.body.append(mainDiv);
});
