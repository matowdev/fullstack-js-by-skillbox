let tabsBtn = document.querySelectorAll('.tabs__item-btn');
let tabsContent = document.querySelectorAll('.tabs-content__item');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) {
      btn.classList.remove('tabs__item-btn_active');
    });
    e.currentTarget.classList.add('tabs__item-btn_active');

    tabsContent.forEach(function (element) {
      element.classList.remove('tabs-content__item_active');
    });
    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add('tabs-content__item_active');
  });
});
