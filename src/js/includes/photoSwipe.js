import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

const photoSwipe = () => {
    const lightbox = new PhotoSwipeLightbox({
        gallery: '.gallery-slider',
        children: 'a',
        bgOpacity: 0.5,
        showHideAnimationType: 'fade',
        pswpModule: () => import('photoswipe')
    });

    lightbox.init();
}

export default photoSwipe;