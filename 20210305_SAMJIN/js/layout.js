$(document).ready(function(){
    /*slick slide*/
    $(".main-slide").slick({
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 6000
    });

    $(".prod-slide").slick({
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1350,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    /*header fixed*/
    $(window).scroll(function(){
        $('header').addClass('fixed');
        var scrollValue = $(document).scrollTop();
        if(scrollValue===0) {
            $('header').removeClass('fixed');
        }
    });

    /*header menu two depth*/
    $('nav .one-depth > li').mouseover(function(){
        $(this).addClass('active');
        $(this).stop().children('.two-depth').slideDown(300);
        $('.overlay').show();
    });
    $('nav .one-depth > li').mouseleave(function(){
        $(this).removeClass('active');
        $(this).stop().children('.two-depth').slideUp(300);
        $('.overlay').hide();
    });
});