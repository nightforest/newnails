const loadMore = () => {    
    const loadMoreTextAll = document.querySelectorAll('.seo-section__text');

    loadMoreTextAll?.forEach(item => {
        const loadMoreToggle = item.nextElementSibling;

        loadMoreToggle?.addEventListener('click', () => {
            item.classList.toggle('is-open');

            item.classList.contains('is-open')
                ? item.style.maxHeight = item.scrollHeight + 'px'
                : item.style.maxHeight = null;
            
            loadMoreToggle.remove();
            // loadMoreToggle.innerText === 'Читати все'
            //     ? loadMoreToggle.innerText = 'Згорнути все'
            //     : loadMoreToggle.innerText = 'Читати все';
        });
    });
}

export default loadMore;