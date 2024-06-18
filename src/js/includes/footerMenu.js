const footerMenu = () => {
    const changeAttr = () => {
        const footerMenuToggleAll = document.querySelectorAll('.footer-menu__toggle');
        const footerMenuAll = document.querySelectorAll('.footer-menu__inner');

        footerMenuToggleAll?.forEach(item => {
            item.setAttribute('aria-expanded', false);
        });

        footerMenuAll?.forEach(item => {
            item.setAttribute('aria-hidden', true);
        });
    };

    if (window.innerWidth < 768) {
        changeAttr();
    }
    
    window.addEventListener('resize', () => {
        if (window.innerWidth < 768) {
            changeAttr();
        }
    });
}

export default footerMenu;