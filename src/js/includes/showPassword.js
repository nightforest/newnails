const showPassword = () => {
    const showPassButtonAll = document.querySelectorAll('.form__show-pass');

    showPassButtonAll?.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('is-active');
            
            const passwordInput = item.parentElement.querySelector('.input');

            passwordInput?.type === "password"
                ? passwordInput.type = "text"
                : passwordInput.type = "password";
        });
    });
}

export default showPassword;