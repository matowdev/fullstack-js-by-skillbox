const swiper = new Swiper('.js-hero-slider', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,

  pagination: {
    el: '.js-hero-slider-pagination',
    clickable: 'true',
    type: 'bullets',
  },

  a11y: {
    paginationBulletMessage: 'Перейти к слайду {{index}}',
  },
});
