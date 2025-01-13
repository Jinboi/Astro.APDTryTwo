// assets/js/main.js
document.addEventListener('DOMContentLoaded', function() {
    const carouselItems = document.querySelectorAll('[data-carousel-item]');
    const indicators = document.querySelectorAll('[data-carousel-slide-to]');
    let currentIndex = 0;

    // Function to change slides
    function changeSlide(index) {
        carouselItems.forEach((item, idx) => {
            item.classList.add('hidden');
            if (idx === index) {
                item.classList.remove('hidden');
            }
        });
        indicators.forEach((indicator, idx) => {
            indicator.setAttribute('aria-current', idx === index ? 'true' : 'false');
        });
    }

    // Add event listeners to buttons
    indicators.forEach((button, idx) => {
        button.addEventListener('click', () => {
            currentIndex = idx;
            changeSlide(currentIndex);
        });
    });

    // Change slide every 3 seconds (optional)
    setInterval(() => {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        changeSlide(currentIndex);
    }, 3000);

    // Initialize the carousel
    changeSlide(currentIndex);
});
