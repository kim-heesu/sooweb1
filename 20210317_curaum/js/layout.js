$(document).ready(function(){
    $(".main-visual").slick({
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: false,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 6000
    });

    /*menu*/
    $('.btn-open').on('click',function(){
        $(this).addClass('close').siblings('.btn-close').addClass('open');
        $('.menu-effect').removeClass('close').addClass('open');
        $('.menu-content').addClass('open');
    });
    $('.btn-close').on('click',function(){
        $(this).removeClass('open').siblings('.btn-open').removeClass('close');
        $('.menu-effect').addClass('close').removeClass('open');
        $('.menu-content').removeClass('open');
    });

    /*select*/
    $('.select span').on('click',function(){
        $(this).toggleClass('open');
        $(this).next('ul').slideToggle();
    });
    $('.option-list .option-value').on('click',function(){
        var optionValue = $(this).attr('data-value');
        $(this).parents('.option-list').slideUp();
        $(this).parents('.option-list').siblings('.selected-option').text(optionValue).removeClass('open');
    });

});