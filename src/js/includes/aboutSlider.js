import Swiper, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const aboutSlider = () => {
    new Swiper('.about-slider__swiper', {
        modules: [Navigation],
        spaceBetween: 30,
        loop: false,
        centeredSlides: false,
        observer: true,
        speed: 400,
        observeParents: true,
        watchOverflow: true,
        navigation: {
            nextEl: ".about-slider__next",
            prevEl: ".about-slider__prev",
        },

        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 2.5,
            },
            1380: {
                slidesPerView: 3.5,
            },
        },
    });
}

export default aboutSlider;
