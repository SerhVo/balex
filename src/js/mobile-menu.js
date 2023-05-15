document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  const html = document.querySelector('html');
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuClose = document.querySelector('.mobile-menu-close');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu__item');

  mobileMenuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    body.classList.toggle('open-menu');
    html.classList.toggle('open-menu');
  });

  mobileMenuClose.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    body.classList.remove('open-menu');
    html.classList.remove('open-menu');
  });

  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      body.classList.remove('open-menu');
      html.classList.remove('open-menu');
    });
  });
});
