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
let works_slider = false;
let facts_slider = new Flickity(document.querySelector('.facts-slider'), {
    prevNextButtons: false,
    initialIndex: 2,
    wrapAround: true,
    freeScroll: true,
    autoPlay: 1300,
    pageDots: false
});

function initSliders() {
    if (window.innerWidth > 1024) {
        $('.works-slider').attr('style', '');
        works_slider = new Flickity(document.querySelector('.works-slider'), {
            cellAlign: 'right',
            contain: true,
            adaptiveHeight: false,
            setGallerySize: false,
            prevNextButtons: false,
            rightToLeft: true,
            initialIndex: 1,
            wrapAround: false,
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
        if (works_slider) {
            works_slider.destroy();
        }
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
}

function initAccordion() {
    $('#faq-accordion .accordion-item').each(function (index, item) {
        let title_height = $(this).find('.accordion-title').outerHeight();
        let content_height = $(this).find('.accordion-content').outerHeight();
        let final_height = title_height + content_height;
        $(this).attr('style', `height: ${title_height}px`);
        $(this).on('click', function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).attr('style', `height: ${title_height}px`);
            } else {
                $('#faq-accordion .accordion-item').each(function (index, item) {
                    let title_height = $(item).find('.accordion-title').outerHeight();
                    $(this).attr('style', `height: ${title_height}px`);
                    $(this).removeClass('active');
                })
                $(this).addClass('active');
                $(this).attr('style', `height: ${final_height}px`);
            }
        });
    });
}

$(document).ready(function () {
    initAccordion();
    initSliders();
});

$( window ).resize(function() {
    initSliders();
    setTimeout(function () {
        initAccordion();
    }, 1000)

});

$(function () {
    let successModal = new bootstrap.Modal(document.getElementById('successModal'));
    let orderModal = new bootstrap.Modal(document.getElementById('orderModal'));
    $('.feedback-form-form').on('submit', function (e) {
        e.preventDefault();
        orderModal.hide();
        successModal.show();
    })
});

$(function () {
    $('.burger').on('click', function () {
        $('.header-mob-inner').toggleClass('active');
        $(this).toggleClass('active');
        $('body').toggleClass('stop');
    })
});