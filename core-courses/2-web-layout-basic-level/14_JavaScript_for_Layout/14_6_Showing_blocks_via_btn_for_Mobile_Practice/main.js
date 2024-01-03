// burger menu / mobile
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click', function () {
  burger.classList.toggle('burger_active');
  menu.classList.toggle('header__nav_active');
  document.body.classList.toggle('stop-scroll');
});

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('burger_active');
    menu.classList.remove('header__nav_active');
    document.body.classList.remove('stop-scroll');
  });
});

//  btn "show more" / articles
let btnMore = document.querySelector('.articles__btn');
let articlesItems = document.querySelectorAll('.articles__item');

btnMore.addEventListener('click', () => {
  articlesItems.forEach((el) => {
    el.classList.add('articles__item_visible');
  });
  btnMore
    .closest('.articles__btn-wrap')
    .classList.add('articles__btn-wrap_hidden');
});
