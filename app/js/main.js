$(function () {

    //MENU-------------------------

    $('.menu__btn').on('click', function () {
        $('.menu__list').toggleClass('menu__list--active');
        $('.menu').toggleClass('menu--open');
    });


    $('.gallery-slider__inner').slick({
        responsive: [
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '120px',
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '60px',
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '30px',
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ],
        arrows: false,
        dots: true,
        easing: 'ease',
        slidesToShow: 2,
        adaptiveHeight: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000
    });

    $('.gallery-slider__btnPrev').click(function (event) {
        $('.gallery-slider__inner').slick("slickPrev");
    });
    $('.gallery-slider__btnNext').click(function (event) {
        $('.gallery-slider__inner').slick("slickNext");
    });
});