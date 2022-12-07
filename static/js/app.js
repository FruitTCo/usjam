// const simpleParallax = require('simple-parallax-js');

(function () {
    var parallax = $('.js-parallax');
    console.log(parallax.length);

    if (parallax.length) {
        parallax.each(function () {
            var _this = $(this),
                scale = _this.data('scale'),
                orientation = _this.data('orientation');

            new simpleParallax(_this[0], {
                scale: scale,
                orientation: orientation,
                delay: .5,
                overflow: false,
                transition: 'cubic-bezier(0,0,0,1)'
            });
        });
    }
})();

// initialize aos
AOS.init({
    once: false,
    // ffset: 80,
});

// hero section scroll 
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // load all images
    preloadImages: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // autoplay
    autoplay: {
        delay: 10000,
    },

    effect: 'coverflow',
    coverflowEffect: {
        rotate: 30,
        slideShadows: false,
    },
});


// hero section scroll 
const swiper1 = new Swiper('.swiper1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // load all images
    preloadImages: true,

    // autoplay
    autoplay: {
        delay: 5000,
    },

    slidesPerView: window.innerWidth < 1279 ? 1 : 2,
    grid: {
        rows: 1,
    },
    spaceBetween: 30,

    zoom: {
        maxRatio: 5,
    },

    // effect: 'coverflow',
    // coverflowEffect: {
    //     rotate: 30,
    //     slideShadows: false,
    // },
});

function scrollRemove() {
    var header = $('.js-header'),
        burger = header.find('.js-header-burger'),
        wrapper = header.find('.js-header-wrapper'),
        html = $('html'),
        body = $('body');
    header.removeClass('active');
    burger.removeClass('active');
    wrapper.removeClass('visible');
    html.removeClass('no-scroll');
    body.removeClass('no-scroll');
}

// scroll to section
(function () {
    var btn = $('.js-scroll');
    btn.click(function () {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 1000,
        });
        scrollRemove()
        return false;
    });
})();


// toggle header
// header
(function () {
    var header = $('.js-header'),
        burger = header.find('.js-header-burger'),
        wrapper = header.find('.js-header-wrapper'),
        html = $('html'),
        body = $('body');
    burger.on('click', function () {
        header.toggleClass('active');
        burger.toggleClass('active');
        wrapper.toggleClass('visible');
        html.toggleClass('no-scroll');
        body.toggleClass('no-scroll');
    });
})(); 


// navbar
document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          document.getElementById('header').classList.add('fixed-top');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('#header').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('header').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
  }); 