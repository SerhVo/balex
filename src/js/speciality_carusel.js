$(function () {
    $('.our_speciality-list').slick({
        slidesToShow: 3, // Количество отображаемых слайдов на десктопе
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1199, // Планшет
                settings: {
                    slidesToShow: 2, // Количество отображаемых слайдов на планшете
                    autoplay: true,
                    autoplaySpeed: 3000,
                    arrows: false,
                }
            },
            {
                breakpoint: 767, // Мобильное устройство
                settings: {
                    slidesToShow: 1, // Количество отображаемых слайдов на мобильном устройстве
                    autoplay: true,
                    autoplaySpeed: 3000,
                    arrows: false,
                }
            }
        ]
    });
});