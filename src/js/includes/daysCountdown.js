const daysCountdown = () => {
    function updateCountdown(element) {
        const endDate = new Date(element.getAttribute('data-enddate')).getTime();
        const now = new Date().getTime();
        const distance = endDate - now;

        if (distance < 0) {
            element.querySelector('.days').textContent = '00';
            element.querySelector('.time').textContent = '00:00:00';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        element.querySelector('.days').textContent = days.toString().padStart(2, '0');
        element.querySelector('.time').textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    function startCountdowns() {
        const countdownElements = document.querySelectorAll('.countdown');
        countdownElements.forEach(element => {
            updateCountdown(element);
            setInterval(() => updateCountdown(element), 1000);
        });
    }

    startCountdowns();
}

export default daysCountdown;
