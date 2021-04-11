import $ from 'jquery'
import slick from 'slick-slider'
import './flickity.pkgd.min'

$('.main-block-slider').slick({
    infinite: true,
    arrows: false,
    dots: true,
    autoplay: false,
    autoplaySpeed: 4000,
});

$('.promos-slider').slick({
    infinite: false,
    arrows: true,
    dots: true,
    autoplay: false,
    autoplaySpeed: 4000,
    prevArrow: $('.promos-slider-buttons .left'),
    nextArrow: $('.promos-slider-buttons .right'),
});
$(document).ready(function () {
    let works_slider = false;
    if (window.innerWidth > 1024) {
        works_slider = new Flickity(document.querySelector('.works-slider'), {
            cellAlign: 'right',
            prevNextButtons: false,
            rightToLeft: true,
            initialIndex: '.last',
        });
        if (works_slider) {
            let works_slider_buttons = $('.works-slider-buttons');
            works_slider_buttons.find('.arrow').on('click', function () {
                if ($(this).hasClass('left')) {
                    works_slider.next(true);
                } else {
                    works_slider.previous(true);
                }
            });
        }
    } else {
        let works_elements = $('.works-slider');

        let height = 0;
        let global_index = 0;
        let how_much_to_show = 3;
        works_elements.find('.works-item').each((index, item) => {
            height += $(item).outerHeight();
            global_index++;
            if (index + 1 >= how_much_to_show) {
                works_elements.attr('style', `height: ${height}px`);
                return false;
            }
        });

        $('.works-show-more .button').on('click', function () {
            let counter = 0;
            works_elements.find('.works-item').each((index, item) => {
                if (index >= global_index) {
                    height += $(item).outerHeight();
                    counter++;
                    if (counter >= 3) {
                        works_elements.attr('style', `height: ${height}px`);
                        global_index = index;
                        return false;
                    }
                }
            });
            if (global_index + 1 >= works_elements.find('.works-item').length) {
                $(this).attr('style', 'display: none');
            }
        })
    }
});