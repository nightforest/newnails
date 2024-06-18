import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const bannerSlider = () => {
    new Swiper('.banner-slider__swiper', {
        modules: [Navigation, Pagination],
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        centeredSlides: false,
        observer: true,
        speed: 400,
        observeParents: true,
        watchOverflow: true,
        navigation: {
            nextEl: ".banner-slider__next",
            prevEl: ".banner-slider__prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}

export default bannerSlider;
