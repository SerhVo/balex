import $ from 'jquery';
import 'slick-carousel';


// Получаем элемент карусели
const carousel = document.querySelector('#our-partners-carousel');

// Создаем Intersection Observer
const observer = new IntersectionObserver(entries => {
    // entries - это массив объектов IntersectionObserverEntry,
    // которые содержат информацию о каждом наблюдаемом элементе

    // Проверяем, что элемент на экране
    if (entries[0].isIntersecting) {
        // Здесь запускаем карусель, например, используя Slick Slider
        $('.our_partners-list').slick({
            arrows: true, // Показывать стрелки для прокрутки

            dots: false, // Не показывать точки пагинации
            infinite: true, // Бесконечная прокрутка
            slidesToShow: 6, // Сколько слайдов показывать одновременно
            slidesToScroll: 1, // Сколько слайдов прокручивать за раз
            autoplay: true, // Автопрокрутка
            autoplaySpeed: 3000, // Интервал автопрокрутки в миллисекундах
            responsive: [
                {
                    breakpoint: 1199, // Если ширина экрана меньше 768px
                    settings: {
                        slidesToShow: 4, // Показывать по 2 слайда
                    }
                },
                {
                    breakpoint: 767, // Если ширина экрана меньше 480px
                    settings: {
                        slidesToShow: 3, // Показывать по 1 слайду
                    }
                }
            ]
        });
    }
}, {
    threshold: 0.5 // Срабатывает при видимости элемента на 50%
});

// Добавляем элемент карусели в Intersection Observer
observer.observe(carousel);
