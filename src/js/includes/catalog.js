import disableScroll from "./disableScroll";
import enableScroll from "./enableScroll";

const catalog = () => {
    const header = document.querySelector('.header');
    const catalog = document.querySelector(".catalog");
    const catalogToggleAll = document.querySelectorAll("[data-catalog-toggle]");
    const subMenuToggleAll = document.querySelectorAll("[data-sub-menu]");
    
    catalogToggleAll?.forEach(item => {
        item.addEventListener('click', e => {
            e.preventDefault();
            catalogShowHide();
        });
    });

    catalog?.addEventListener('click', e => {
        if (!e.target.closest('.catalog__sidebar') && !e.target.closest('.catalog__sub-wrap')) {
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
            disableScroll();
        } else {
            setTimeout(() => {
                enableScroll();
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
            const activeToggleAll = catalog?.querySelectorAll('[aria-expanded="true"]');
            const activeMenu = document.querySelector('.catalog-sub-menu[aria-hidden="false"]');

            e.preventDefault();
            
            if (isExpanded === 'false') {
                activeToggleAll?.forEach(toggle => {
                    toggle.setAttribute('aria-expanded', false);
                });
                activeMenu?.setAttribute('aria-hidden', true);
                
                item.setAttribute('aria-expanded', true);
                menu.setAttribute('aria-hidden', false);

                if (item.classList.contains('catalog-menu__link')) {
                    catalog?.querySelector('.catalog-menu__link.is-active')?.classList.remove('is-active');
                    item.classList.add('is-active');
                }
            } else {
                item.setAttribute('aria-expanded', false);
                menu.setAttribute('aria-hidden', true);
            }
        });
    });
}

export default catalog;
