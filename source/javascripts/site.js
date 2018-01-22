// This is where it all goes :)

$(document).ready(function(){
    var $header = $('.header');

    var $hHeight = $header.height();

    var prevTop = $(window).scrollTop();

    // Scroll event
    $(window).on('scroll', function(e) {
        st = $(this).scrollTop();
        if (st > prevTop && st > $hHeight) {
            $header.addClass('js-global-header-scrolling');
        } else {
            $header.removeClass('js-global-header-scrolling');
        }
        prevTop = st;
    });

    //scroll button
    $('a[href*=#]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 1000, 'linear');
    });


    //resp size icon
    $('.icon').click(function(){
        $('.icon').toggleClass('active');
    })

})
