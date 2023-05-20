// window.addEventListener('scroll', function() {
//   var parallax = document.querySelector('.section_bg_fixed');
//   var scrollPosition = window.scrollX;
  
//   parallax.style.backgroundSize = 10 + scrollPosition/5 + '%';
// });

// document.addEventListener('DOMContentLoaded', function() {
//     const navItems = document.querySelectorAll('.nav__item');
//     const contactLink = document.querySelector('a[href="#contacts"]');

//     // Обработчик клика для всех пунктов меню
//     navItems.forEach(function(item) {
//         item.addEventListener('click', function(event) {
//             event.preventDefault(); // Отменяем стандартное поведение ссылки
//             const target = this.getAttribute('href'); // Получаем целевой идентификатор якоря
//             const section = document.querySelector(target); // Находим соответствующую секцию
//             section.scrollIntoView({ behavior: 'smooth' }); // Плавно перемещаем страницу к секции
//         });
//     });

//     // Обработчик клика для ссылки "КОНТАКТНА IНФОРМАЦIЯ"
//     contactLink.addEventListener('click', function(event) {
//         event.preventDefault();
//         const target = this.getAttribute('href');
//         const section = document.querySelector(target);
//         const offset = section.offsetTop; // Получаем вертикальное смещение секции
//         window.scrollTo({ top: offset, behavior: 'smooth' }); // Плавно перемещаем страницу по вертикали
//     });
// });
