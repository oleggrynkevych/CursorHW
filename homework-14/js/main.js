'use strict';

console.log('test');

window.onload = function () {
    let preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
}

$(document).ready(function() {
    $('.review-slider').slick({
        autoplay: true,
        nextArrow: '.arrow-right',
        prevArrow: '.arrow-left'
    });
  });