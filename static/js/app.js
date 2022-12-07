// initialize aos
AOS.init();

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

    slidesPerView: 3,
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


// scroll to section
(function () {
    var btn = $('.js-scroll');
    btn.click(function () {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 1000,
        });
        return false;
    });
})();