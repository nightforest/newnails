const fixHeight = () => {
    const changeHeight = () => {
        const vh = window.innerHeight * 0.01;
        const headerHeight = document.querySelector('.header').offsetHeight;

        document.documentElement.style.setProperty('--vh', `${vh}px`);
        document.documentElement.style.setProperty('--header-h', `${headerHeight}px`);
    };
    
    changeHeight();
    
    window.addEventListener('resize', () => {
        changeHeight();
    });
}

export default fixHeight;