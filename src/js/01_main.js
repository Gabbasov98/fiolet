function mainSliderInit() {
    if (innerWidth > 992) {
        let mainSlider = null
    } else {
        function mainSlider() {
            var swiper = new Swiper('.main .swiper-container', {
                slidesPerView: 1,
                spaceBetween: 10,

                pagination: {
                    el: '.main .swiper-pagination',
                    type: 'bullets',
                    clickable: true,
                },
                breakpoints: {
                    320: {
                        allowTouchMove: true,
                        loop: false,
                    },
                    992: {
                        allowTouchMove: false,
                        loop: true,
                    },
                }
            })
        }
        mainSlider()
    }
}



function worksSlider() {
    var swiper = new Swiper('.works .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: '.works .swiper-button-next',
            prevEl: '.works .swiper-button-prev',
        },
        pagination: {
            el: '.works .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1200: {
                spaceBetween: 30,
                slidesPerView: 3,
            },
            1400: {
                spaceBetween: 90
            },
        }
    })
}

function feedbackSlider() {
    var swiper = new Swiper('.feedback .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: '.feedback .swiper-button-next',
            prevEl: '.feedback .swiper-button-prev',
        },
        pagination: {
            el: '.feedback .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    })
}

function mastersSlider() {
    var swiper = new Swiper('.masters .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        pagination: {
            el: '.masters .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    })
}




$(document).ready(function() {
    $('input[type="tel"]').mask('+7 (999) 999 99 99', { autoclear: false }, { placeholder: '+7            ' });


    mainSliderInit()
    worksSlider()
    feedbackSlider()
    mastersSlider()

    $(window).resize(function() {
        mainSliderInit()
    })

    $(".header__burger").click(function() {
        $(this).toggleClass("header__burger--active")
        $(".header__mob").toggleClass("header__mob--active")
        $("body").toggleClass("fixed-body")
    })


    $(".catalog__item-show").click(function() {
        let parent = $(this).parents(".catalog__items")
        $(parent).find(".catalog__item").removeClass("catalog__item--active")
        $(this).parents(".catalog__item").addClass("catalog__item--active")
    })

});