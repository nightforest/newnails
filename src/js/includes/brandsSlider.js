import Swiper, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const brandsSlider = () => {
    new Swiper('.brands-slider__swiper', {
        modules: [Navigation],
        spaceBetween: 30,
        loop: false,
        centeredSlides: false,
        observer: true,
        speed: 400,
        observeParents: true,
        watchOverflow: true,
        navigation: {
            nextEl: ".brands-slider__next",
            prevEl: ".brands-slider__prev",
        },

        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 4,
            },
            1260: {
                slidesPerView: 6,
            },
        },
    });
}

export default brandsSlider;
