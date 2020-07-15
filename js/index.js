$(document).ready(function () {
    $('a.target-burger').on('click', function (e) {
        $('.nav-menu, a.target-burger, .header').toggleClass('toggled');
        e.stopPropagation();
    });

    $('.header').on('click', function () {
        $('.nav-menu, a.target-burger, .header').removeClass('toggled');
    });


    $('.title-slider').tooltip({
        direction: "top",
        follow: true
    });

    var parallaxElements = document.querySelectorAll('.parallax-slide');
    for (var el of parallaxElements) {
        new Parallax(el,
            {
                relativeInput: true,
                clipRelativeInput: false,
            });
    }

    // Slider Swiper
    var paralaxSwiper = new Swiper('.paralax-slider', {
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
    })

    var titleSwiper = new Swiper('.title-slider', {
        loop: true,
        speed: 1300,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        controller: {
            control: paralaxSwiper
        },
        navigation: {
            nextEl: '.slider-button-next',
            prevEl: '.slider-button-prev',
        },
    })

    titleSwiper.on('slideChange', function () {
        var activeSlides = document.querySelectorAll('.swiper-slide');
        for (var activeSlide of activeSlides) {
            var realActiveSlide = activeSlide.getAttribute('data-swiper-slide-index');
            if (realActiveSlide == titleSwiper.realIndex) {
                var activeSlideTitle = activeSlide.querySelector('.slide-title');
                var text = activeSlideTitle.innerHTML;
                var styleBlock = document.querySelectorAll('.slide-style-text');
                for (var key of styleBlock) {
                    key.innerHTML = text;
                }
                break;
            }
        }
    });
});





