(() => {
  const playfieldSizeOptions = document.querySelectorAll(
    '.playfield__options-item'
  );
  let selectedOption = null;

  playfieldSizeOptions.forEach((option) => {
    option.addEventListener('click', function () {
      if (this === selectedOption) {
        this.classList.remove('selected__options-item');
        selectedOption = null;
      } else if (selectedOption) {
        selectedOption.classList.remove('selected__options-item');
        this.classList.add('selected__options-item');
        selectedOption = this;
      } else {
        this.classList.add('selected__options-item');
        selectedOption = this;
      }
    });
  });
})();
