import $ from 'jquery';
import 'slick-carousel';

$('.video-carousel').slick({
            arrows: true, 

            dots: true, 
            infinite: true,
            slidesToShow: 1, 
            slidesToScroll: 1, 
            autoplay: true, 
            autoplaySpeed: 3000,             
        });


// const videoCarousel = document.querySelector('video-carousel');
// // const observer = new IntersectionObserver(entries => {
//     // entries.forEach(entry => {
//     //     if (entry.isIntersecting) {
//     //         $(function () {
//     //             $('.video-carousel').slick({
//     //                 slidesToShow: 1,
//     //                 slidesToScroll: 1,
//     //                 autoplay: true,
//     //                 autoplaySpeed: 3000,
//     //                 arrows: true,
//     //                 dots: true,
//     //             });
//     //         });
//     //     } 
//     //     // else {
//     //     //     stopCarousel();
//     //     // }
//     // });
// // if (entries[0].isIntersecting) {
// //             $('.video-carousel').slick({
// //                     slidesToShow: 1,
// //                     slidesToScroll: 1,
// //                     autoplay: true,
// //                     autoplaySpeed: 3000,
// //                     arrows: true,
// //                     dots: true,
// //                 });
// //     }
// // }, {
// //     threshold: 0.5 // Срабатывает при видимости элемента на 50%
// // });
// const observer = new IntersectionObserver(entries => {
//     if (entries[0].isIntersecting) {
        
//         $('.video-carousel').slick({
//             arrows: true, 

//             dots: true, 
//             infinite: true,
//             slidesToShow: 1, 
//             slidesToScroll: 1, 
//             autoplay: true, 
//             autoplaySpeed: 3000,             
//         });
//     }
// }, {
//     threshold: 0.5 // Срабатывает при видимости элемента на 50%
// });



// observer.observe(videoCarousel);
