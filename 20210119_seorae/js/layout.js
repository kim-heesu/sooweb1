$(document).ready(function(){
    /*fullscroll*/
    new fullScroll({
        displayDots: true,
        dotsPosition: 'Top',
        animateTime: 0.7,
        animateFunction: 'ease'
    });

    /*slick slide*/
    $(".center-slide").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        autoplay: true,
        infinite: true,
        dots: false,
        centerMode: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    variableWidth: true,
                    autoplay: true,
                    infinite: true,
                    centerMode: false,
                    dots: false,
                    arrows: false
                }
            }
        ]
    });

    /*modal*/
    $('.btn-modal-open').click(function(){
        $('.modal').addClass('open');
    });
    $('.btn-modal-close').click(function(){
        $('.modal').removeClass('open');
    });

    /*mobile menu*/
    $('.mobile-menu').click(function(){
        $('.overlay').toggleClass('menu-open');
        $('.dots').toggleClass('open');
    })
});