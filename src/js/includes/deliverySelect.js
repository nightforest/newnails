const deliverySelect = () => {
    const select = document.querySelector('select[name="orderSelectPostType"]');
    
    select?.addEventListener('change', function() {
        const currentGroup = document.querySelector('.form-block__grid.is-visible');
        const selectValue = select.value;
        const newGroup = document.querySelector(`[data-delivery="${selectValue}"]`);

        currentGroup?.classList.remove('is-visible');
        newGroup?.classList.add('is-visible');

        console.log(selectValue);
    });
}

export default deliverySelect;
