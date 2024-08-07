import { disablePageScroll, enablePageScroll } from 'scroll-lock';

const catalog = () => {
    const body = document.querySelector('body');
    const header = document.querySelector('.header');
    const catalog = document.querySelector(".catalog");
    const catalogSubWrap = catalog?.querySelector(".catalog__sub-wrap");
    const catalogInner = catalog?.querySelector(".catalog__inner");
    const catalogToggleAll = document.querySelectorAll("[data-catalog-toggle]");
    const paddingRight = window.innerWidth - document.documentElement.clientWidth;
    const subMenuToggleAll = document.querySelectorAll("[data-sub-menu]");
    
    catalogToggleAll?.forEach(item => {
        item.addEventListener('click', e => {
            e.preventDefault();
            catalogShowHide();
        });
    });

    catalog?.addEventListener('click', e => {
        if (!e.target.closest('.catalog__sidebar')) {
            catalogShowHide();
        }
    });

    function catalogShowHide() {
        const activeToggle = document.querySelector('.catalog-menu__link[aria-expanded="true"]');
        const activeMenu = document.querySelector('.catalog-sub-menu[aria-hidden="false"]');

        header?.classList.toggle('is-active');
        catalog?.classList.toggle('is-visible');

        catalogToggleAll?.forEach(item => {
            item.classList.toggle('is-active');
        });
        
        if (catalog.classList.contains('is-visible')) {
            disablePageScroll(catalogSubWrap);
            disablePageScroll(catalogInner);
        } else {
            setTimeout(() => {
                enablePageScroll(catalogSubWrap);
                enablePageScroll(catalogInner);
            }, 500);

            activeToggle?.setAttribute('aria-expanded', false);
            activeMenu?.setAttribute('aria-hidden', true);
        }
    }

    subMenuToggleAll?.forEach(item => {
        item.addEventListener('click', function(e) {
            const menuID = item.getAttribute('data-sub-menu');
            const menu = document.getElementById(menuID);
            const isExpanded = item.getAttribute('aria-expanded');
            const activeToggle = document.querySelector('.catalog-menu__link[aria-expanded="true"]');
            const activeMenu = document.querySelector('.catalog-sub-menu[aria-hidden="false"]');
            
            e.preventDefault();
            
            if (isExpanded === 'false') {
                activeToggle?.setAttribute('aria-expanded', false);
                activeMenu?.setAttribute('aria-hidden', true);
                
                item.setAttribute('aria-expanded', true);
                menu.setAttribute('aria-hidden', false);
            } else {
                item.setAttribute('aria-expanded', false);
                menu.setAttribute('aria-hidden', true);
            }

            changeHeight();
        });
    });
}

export default catalog;
