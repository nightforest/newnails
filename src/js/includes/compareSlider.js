import Swiper, { Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar';

const compareSlider = () => {
    new Swiper('.compare-slider__swiper', {
        modules: [Scrollbar],
        spaceBetween: 30,
        loop: false,
        centeredSlides: false,
        observer: true,
        speed: 400,
        observeParents: true,
        watchOverflow: true,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
            draggable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1.5,
            },
            576: {
                slidesPerView: 2,
            },
        },
    });
}

export default compareSlider;