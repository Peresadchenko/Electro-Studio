// ____________form email____________

"use strict"


document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        let formData = new FormData(form);

        if (error === 0) {
            form.classList.add('_sending');
            let response = await fetch('sendmail.php', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                let result = await response.json();
                alert(result.message);
                formPreview.innerHTML = '';
                form.reset();
                form.classList.remove('_sending');
            } else {
                alert('Ошибка');
                form.classList.remove('_sending');
            }
        } else {
            alert('Заполните обязательные поля');
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveEror(input);

            if (input.classList.contains('_email')) {
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
                formAddError(input);
                error++;
            } else {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            }

        }
        return error;
    }

    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveEror(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }
    function emailTest(input) {
        return !/^\w+([\.=]?\w+)*@\w+([\.=]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
});

$(function () {



    // _____________MENU________________

    const menuOpen = document.querySelector('.menu');
    const menuList = document.querySelector('.menu__list');

    function toggleMenuOpen() {
        menuOpen.classList.toggle('menu--open');
        menuList.classList.toggle('menu__list--active');

    }

    menuOpen.addEventListener('click', toggleMenuOpen);

    // _____________gallery-slider________________

    $('.gallery-slider__inner').slick({
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
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
                    centerMode: true,
                    centerPadding: '0px'
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

    // ________________________

    $(".footer__btn, .menu__link-id").on("click", function (e) {
        e.preventDefault();
        var id = $(this).attr("href"),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });




});

