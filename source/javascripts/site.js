// This is where it all goes :)

$(document).ready(function(){
    var $header = $('.header');

    var $hHeight = $header.height();

    var prevTop = $(window).scrollTop();

    // Scroll event
    $(window).on('scroll', function(e) {
        $('.icon').removeClass('active');
        $('#toggle').prop("checked",false);
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
    // $('.main-navigation ').click(function(){
    //     if ( $('#toggle').prop("checked") == false ){
    //         $('.icon').toggleClass('active');
    //         $('#toggle').prop("checked",true);
    //     }else{
    //         $('.icon').removeClass('active');
    //         $('#toggle').prop("checked",false);
    //     }
    //     //console.log($('#toggle').prop());
    // })
    //
    //
    // $('.icon').click(function(){
    //     $('.icon').toggleClass('active');
    // })

    function modifymenu() {
        if ( $('#toggle').prop("checked") == false ){
                    $('.icon').addClass('active');
                    $('#toggle').prop("checked",true);
        }else{
                    $('.icon').removeClass('active');
                    $('#toggle').prop("checked",false);
        }
    }

    var el = document.getElementById("navigation");
    el.addEventListener("click", modifymenu,false);

    



})
