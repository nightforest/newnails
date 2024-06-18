import Swiper, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const teamSlider = () => {
    new Swiper('.team-slider__swiper', {
        modules: [Navigation],
        spaceBetween: 30,
        loop: false,
        centeredSlides: false,
        observer: true,
        speed: 400,
        observeParents: true,
        watchOverflow: true,
        navigation: {
            nextEl: ".team-slider__next",
            prevEl: ".team-slider__prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        },
    });
}

export default teamSlider;