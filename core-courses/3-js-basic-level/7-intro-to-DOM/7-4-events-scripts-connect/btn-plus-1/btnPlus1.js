document.addEventListener('DOMContentLoaded', function () {
  let countDisplay = document.querySelector('.count-display');
  let incrementBtn = document.querySelector('.increment-btn');

  function incrementCount() {
    let currentCount = parseInt(countDisplay.textContent);
    countDisplay.textContent = currentCount + 1;
  }

  incrementBtn = addEventListener('click', incrementCount);
});
