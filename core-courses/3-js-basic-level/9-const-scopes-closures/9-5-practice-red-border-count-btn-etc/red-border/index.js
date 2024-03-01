(() => {
  document.addEventListener('DOMContentLoaded', () => {
    const divBlocks = document.querySelectorAll('div'); // nodeList, статический псевдо-массив
    for (const el of divBlocks) el.style.border = '2px solid red';
  });
})();
