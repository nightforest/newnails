const closeAlert = () => {
    const alertAll = document.querySelectorAll('.alert');

    alertAll?.forEach(item => {
        item.addEventListener('click', function() {
            item.classList.remove('is-visible');
        });
    });
}

export default closeAlert;