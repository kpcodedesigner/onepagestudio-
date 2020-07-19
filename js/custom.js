
$().ready(function () {

    /************************ Project slider ********************************/

    $('.our_project_box').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: false,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });

    /************************ Team slider ********************************/

    $('.our_team_box').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: false,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });
  
    /************************ Testimonial Slider ********************************/

    $('.testimonial_desk').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });

   /************************ Header sticky ********************************/

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.header_menu').addClass('newClass');
        } else {
            $('.header_menu').removeClass('newClass');
        }
    });

    

});

