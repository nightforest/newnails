const timeCountdown = () => {
    function updateCountdown60(element) {
        let duration = parseInt(element.getAttribute('data-duration'));

        const interval = setInterval(() => {
            if (duration <= 0) {
                clearInterval(interval);
                element.textContent = '00';
            } else {
                duration--;
                element.textContent = duration.toString().padStart(2, '0');
            }
        }, 1000);
    }

    function startCountdowns60() {
        const countdownElements = document.querySelectorAll('.countdown-sec');
        countdownElements.forEach(element => {
            updateCountdown60(element);
        });
    }

    startCountdowns60();
}

export default timeCountdown;
