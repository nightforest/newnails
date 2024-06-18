const customerRadio = () => {
    const radioButtons = document.querySelectorAll('input[name="customer-radio"]');
    

    radioButtons?.forEach(item => {
        item.addEventListener('change', function() {
            const currentGroup = document.querySelector('.form-block.is-visible');
            const radioValue = item.getAttribute('value');
            const newGroup = document.querySelector(`[data-customer="${radioValue}"]`);

            currentGroup?.classList.remove('is-visible');
            newGroup?.classList.add('is-visible');
        });
    });
}

export default customerRadio;
