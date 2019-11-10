// Слайдер для рейтига ньюзмейкеров
$('.center').slick({
    centerMode: true,
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

// Слайдер для видеоновостей
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
    

       