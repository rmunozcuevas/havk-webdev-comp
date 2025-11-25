const ticker = document.querySelector('.ticker');


ticker.innerHTML += ticker.innerHTML;

let x = 0;
const speed = 1;

function scrollTicker() {
    x -= speed;
    if (x <= -ticker.scrollWidth / 2) {
        x = 0;
    }
    ticker.style.transform = `translateX(${x}px)`;
    requestAnimationFrame(scrollTicker);
}

scrollTicker();
