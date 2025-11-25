const ticker = document.querySelector('.ticker');
const tickerWrapper = document.querySelector('.ticker-wrapper');

// Duplicate all images for seamless scroll
ticker.innerHTML += ticker.innerHTML;

let x = 0;
const speed = 1; // pixels per frame

function scrollTicker() {
    x -= speed;

    // Reset when half the width has scrolled
    if (x <= -ticker.scrollWidth / 2) {
        x = 0;
    }

    ticker.style.transform = `translateX(${x}px)`;
    requestAnimationFrame(scrollTicker);
}

scrollTicker();



