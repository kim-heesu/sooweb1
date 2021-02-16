$(document).ready(function() {
    /*fullscroll*/
    new fullScroll({
        displayDots: true,
        dotsPosition: 'Top',
        animateTime: 0.7,
        animateFunction: 'ease'
    });

    /*menu open*/
    $('.ico-menu').click(function(){
        $(this).toggleClass('open');
    });
});