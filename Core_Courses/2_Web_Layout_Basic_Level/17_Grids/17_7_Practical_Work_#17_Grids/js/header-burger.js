(() => {
  function setBurger(params) {
    const btn = document.querySelector(`.${params.btnClass}`);
    const menu = document.querySelector(`.${params.menuClass}`);
    const links = menu.querySelectorAll(`.${params.link}`);

    function scrollToSection(link) {
      console.log(link);
      const href = link.getAttribute('href').substring(1);
      const scrollTarget = document.getElementById(href);
      const elementPosition = scrollTarget.getBoundingClientRect().top;

      window.scrollBy({
        top: elementPosition,
        behavior: 'smooth',
      });
    }

    function onBtnClick() {
      console.log('click');
      // ! Don't forget to specify the actual screen resolution when starting the burger
      if (window.screen.width <= 536.98) {
        btn.classList.toggle(params.activeClass);

        if (
          !menu.classList.contains(params.activeClass) &&
          !menu.classList.contains(params.hiddenClass)
        ) {
          menu.classList.add(params.activeClass);
          document.body.style.overflow = 'hidden';
          btn.setAttribute('aria-expanded', true);
        } else {
          menu.classList.add(params.hiddenClass);
          document.body.removeAttribute('style');
          btn.setAttribute('aria-expanded', false);
        }
      }
    }

    // ! Don't work without @keyframes _file/logic
    menu.addEventListener('animationend', function () {
      if (this.classList.contains(params.hiddenClass)) {
        this.classList.remove(params.activeClass);
        this.classList.remove(params.hiddenClass);
      }
    });

    btn.setAttribute('aria-expanded', false);
    btn.addEventListener('click', onBtnClick);
    links.forEach((link) => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        onBtnClick();
        scrollToSection(this);
      });
    });
  }

  setBurger({
    // ! class "js-burger" need for main btn/hamburger
    btnClass: 'js-burger',
    menuClass: 'js-nav-wrap',
    activeClass: 'is-active',
    hiddenClass: 'is-closed',
    link: 'js-nav-link',
  });
})();

// ! And, of course, don't forget to include this file in the index.html
