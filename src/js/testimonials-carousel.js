


// Получаем элемент карусели
const videoCarousel = document.querySelector('.video-carousel');

// Создаем новый экземпляр Intersection Observer
const observer = new IntersectionObserver(entries => {
    // Перебираем все записи, возвращенные наблюдателем
    entries.forEach(entry => {
        // Если элемент находится в зоне видимости, включаем автопрокрутку
        if (entry.isIntersecting) {
            $(function () {
                $('.video-carousel').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    arrows: true,
                    dots: true,
                });
            });;
        } else {
            stopCarousel();
        }
    });
});

// Настраиваем параметры Intersection Observer
const options = {
    rootMargin: '0px',
    threshold: 0.5
};

// Начинаем наблюдение за элементом карусели
observer.observe(videoCarousel);
