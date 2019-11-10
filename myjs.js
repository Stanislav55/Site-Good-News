// Слайдер для Good Новостей
$('.center').slick({
    centerMode: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    responsive: [
        {breakpoint: 768,
        settings: {
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 2
            }
        },
        {breakpoint: 480,
        settings: {
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
            }
        }
    ]
});

// Слайдер для Видеоновостей 
$('.lazy').slick({
    lazyLoad: 'ondemand',
    centerMode: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 500,
    dots: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});

// Слайдер для Ньюзмейкеров
$('.multiple-items').slick({
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    responsive: [
        {breakpoint: 768,
        settings: {
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 2
            }
        },
        {breakpoint: 480,
        settings: {
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
            }
        }
    ]
});
    

       