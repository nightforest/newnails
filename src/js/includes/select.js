import Choices from 'choices.js';
import 'choices.js/public/assets/styles/choices.min.css';

const select = () => {    
    const selectAll = document.querySelectorAll('.select');

    selectAll?.forEach(item => {
        new Choices(item, {
            allowHTML: true,
            placeholder: true,
            searchEnabled: false,
            shouldSort: false,
        });
    });
}

export default select;