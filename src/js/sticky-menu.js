window.addEventListener('scroll', function () {
    const menu = document.querySelector('.sticky-menu');
    const menuMobile = document.querySelector('.mobile-menu-toggle');
    const scrollPosition = window.scrollY;

    if (scrollPosition >= 50) {
        menu.classList.add('visible');
    } else {
        menu.classList.remove('visible');
    }

    if (scrollPosition >= 100) {
        menuMobile.classList.add('visibleMobile');
    } else {
        menuMobile.classList.remove('visibleMobile');
    }
});

