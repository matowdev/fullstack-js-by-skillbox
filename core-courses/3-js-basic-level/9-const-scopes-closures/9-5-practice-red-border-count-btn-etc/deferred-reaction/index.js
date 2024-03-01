(() => {
  const WAIT_TIME_MS = 300;
  const mainDiv = document.createElement('div');
  const textInput = document.createElement('input');
  const display = document.createElement('div');

  let timeout;

  mainDiv.classList.add('container', 'page__container');
  textInput.classList.add('container__input');
  display.classList.add('container__input-text');

  textInput.addEventListener('input', () => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      display.textContent = textInput.value;
    }, WAIT_TIME_MS);
  });

  mainDiv.append(textInput, display);

  document.addEventListener('DOMContentLoaded', () => {
    document.body.append(mainDiv);
  });
})();
