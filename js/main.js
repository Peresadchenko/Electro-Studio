$(function () {

    // _____________MENU________________

    $('.menu__btn').on('click', function () {
        $('.menu__list').toggleClass('menu__list--active');
        $('.menu').toggleClass('menu--open');
    });

    // _____________gallery-slider________________

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
        autoplay: true,
        autoplaySpeed: 2000
    });

    // _____________reviews-slider________________

    $('.reviews-slider__inner').slick({
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
        slidesToShow: 3,
        adaptiveHeight: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        waitForAnimate: false
    });

    // _____________info-slider________________

    $('.info-slider__inner').slick({
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
        slidesToShow: 1,
        fade: true,
        adaptiveHeight: true,
        speed: 1000,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        waitForAnimate: false
    });

    // _____________input tel________________

    $("input[type='tel']").click(function () {
        $(this).setCursorPosition(0);
    }).mask("+9 (999)-999-99-99");

    // _____________timer________________

    localStorage.getItem('timer')

    let time = 600;
    let timerTextOff = "Время истекло!";

    let timer = document.getElementById('timer');

    setInterval(сountDown, 1000);

    function сountDown() {
        let minutes = Math.floor(time / 60);
        let hours = Math.floor(minutes / 60);
        minutes = minutes - hours * 60;
        let seconds = time % 60;

        if (hours < 10)
            hours = "0" + hours;

        if (seconds < 10)
            seconds = "0" + seconds;

        if (minutes < 10)
            minutes = "0" + minutes;

        timer.innerHTML = `${hours}:${minutes}:${seconds}`;

        localStorage.setItem('timer', timer)

        if (time === 0) {
            document.getElementById('timerTextOff').innerHTML = timerTextOff;
            return;
        }

        if (time > 0)
            time--;

        if (time < 0)
            time = 0;

    }

    $(".footer__btn").on("click", function (e) {
        e.preventDefault();
        var id = $(this).attr("href"),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });

    $(".menu a").on("click", function (e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });
});

