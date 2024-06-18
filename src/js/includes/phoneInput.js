import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';

const phoneInput = () => {
    const tellInputAll = document.querySelectorAll(".tell-input");

    tellInputAll?.forEach(function(item) {
        intlTelInput(item, {
            preferredCountries:['ua','gb','us'],
            separateDialCode:!0,
            nationalMode:!0
        });
    });
}

export default phoneInput;