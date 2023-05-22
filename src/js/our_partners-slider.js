import $ from 'jquery';
import 'slick-carousel';


// const carouselPartners = document.querySelector('.our_partners-list');


// const observer = new IntersectionObserver(entries => {
//     if (entries[0].isIntersecting) {
        
        
//     }
// }, {
//     threshold: 0.5 // Срабатывает при видимости элемента на 50%
// });

// // Добавляем элемент карусели в Intersection Observer
// observer.observe(carouselPartners);


$('.our_partners-list').slick({
            arrows: true, 

            dots: false, 
            infinite: true,
            slidesToShow: 6, 
            slidesToScroll: 1, 
            autoplay: true, 
            autoplaySpeed: 3000, 
            responsive: [
                {
                    breakpoint: 1199, 
                    settings: {
                        slidesToShow: 4, 
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3, 
                    }
                }
            ]
        });
