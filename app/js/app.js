import $ from 'jquery'
import slick from 'slick-slider'

$('.main-block-slider').slick({
    infinite: true,
    arrows: false,
    dots: true,
    autoplay: false,
    autoplaySpeed: 4000,
});

$(document).ready(function () {
    function animateMarquee(el, duration) {
        const innerEl = el.querySelector('.marquee__inner');
        const innerWidth = innerEl.offsetWidth;
        const cloneEl = innerEl.cloneNode(true);
        el.appendChild(cloneEl);

        let start = performance.now();
        let progress;
        let translateX;

        requestAnimationFrame(function step(now) {
            progress = (now - start) / duration;

            if (progress > 1) {
                progress %= 1;
                start = now;
            }

            translateX = innerWidth * progress;

            innerEl.style.transform = `translate3d(${translateX}px, 0 , 0)`;
            cloneEl.style.transform = `translate3d(${translateX}px, 0 , 0)`;
            requestAnimationFrame(step);
        });
    }

    const marquee1 = document.querySelector('#marquee1');

    animateMarquee(marquee1, 10000);
});