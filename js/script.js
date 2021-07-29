const burger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.menu__close'),
      menuOverlay = document.querySelector('.menu__overlay');

burger.addEventListener("click", () => menu.classList.add('active'));
close.addEventListener("click", () => menu.classList.remove('active'));
menuOverlay.addEventListener('click', ({target}) => menu.classList.remove('active'));

const progressBars = document.querySelectorAll('[percent]');
progressBars.forEach(el => el.style.width = el.getAttribute('percent') * 350 / 100 + 'px');



