import JustValidate from 'just-validate';

const subscribeFormValidation = () => {
    const form = document.querySelector('#subscribe-form');
    const errorAlert = document.querySelector('#alert-field-error');
    const successAlert = document.querySelector('#alert-field-success');

    if (form) {
        const validator = new JustValidate(form, {
            errorLabelCssClass: ['error-label'],
        });

        const inputAll = form.querySelectorAll('[required]');

        inputAll.forEach(item => {
            validator.addField(item, [
                {
                    rule: 'required',
                },
            ]);
        });

        validator.onFail(() => {
            errorAlert?.classList.add('is-visible');

            setTimeout(() => {
                errorAlert?.classList.remove('is-visible');
            }, 5000);
        });

        validator.onSuccess(( event ) => {
            successAlert?.classList.add('is-visible');

            setTimeout(() => {
                successAlert?.classList.remove('is-visible');
            }, 5000);

            // event.currentTarget.submit();
        });
    }
}

export default subscribeFormValidation;