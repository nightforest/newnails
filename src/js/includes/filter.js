import { disablePageScroll, enablePageScroll } from 'scroll-lock';

const filter = () => {
    const body = document.querySelector('body');
    const filter = document.querySelector(".filter");
    const filterInner = document.querySelector(".filter__inner");
    const filterToggle = document.querySelector("[data-filter-toggle]");
    const filterClose = document.querySelector("[data-filter-close]");
    
    filterToggle?.addEventListener('click', e => {
        e.preventDefault();

        disablePageScroll(filterInner);
        filter?.classList.add('is-visible');
    });

    filter?.addEventListener('click', e => {
        if (!e.target.closest('.filter__sidebar')) {
            enablePageScroll(filterInner);
            filter?.classList.remove('is-visible');
        }
    });

    filterClose?.addEventListener('click', () => {
        enablePageScroll(filterInner);
        filter?.classList.remove('is-visible');
    });
}

export default filter;