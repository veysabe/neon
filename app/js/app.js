import $ from 'jquery'
import slick from 'slick-slider'

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
});