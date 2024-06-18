import Swiper, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const productsSlider = () => {
    const sliders = document.querySelectorAll('.products-slider__swiper');

    sliders.forEach(item => {
        new Swiper(item, {
            modules: [Navigation],
            loop: false,
            centeredSlides: false,
            observer: true,
            speed: 400,
            observeParents: true,
            watchOverflow: true,
            navigation: {
                nextEl: item.closest('.products-slider').querySelector('.swiper-nav-next'),
                prevEl: item.closest('.products-slider').querySelector('.swiper-nav-prev'),
            },

            breakpoints: {
                0: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            },
        });
    });
}

export default productsSlider;
