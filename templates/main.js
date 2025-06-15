document.addEventListener('DOMContentLoaded', function() {
    const shortsContainer = document.querySelector('.shorts-container');
    const shorts = document.querySelectorAll('.shorts img');
    let currentIndex = 0;

    function showNextShort() {
        shorts[currentIndex].style.opacity = '0';
        shorts[currentIndex].style.transform = 'translateY(20px)';

        currentIndex = (currentIndex + 1) % shorts.length;

        shorts[currentIndex].style.opacity = '1';
        shorts[currentIndex].style.transform = 'translateY(0)';
        shorts[currentIndex].style.position = 'relative';

        const prevIndex = (currentIndex - 1 + shorts.length) % shorts.length;
        shorts[prevIndex].style.position = 'absolute';
    }
    let interval = setInterval(showNextShort, 10000);
    shortsContainer.addEventListener('mouseenter', function() {
        clearInterval(interval);
    });
    shortsContainer.addEventListener('mouseleave', function() {
        interval = setInterval(showNextShort, 10000);
    });
    shortsContainer.addEventListener('click', showNextShort);
});