var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

function getHeaderParams() {
  if(bodyWidth <= 1024) {
    if($("header").offset().top > 1) {
      $("header").addClass("bg");
    } else {
      $("header").removeClass("bg");
    }
  } else {
    $("header").removeClass("bg");
  }
}

$slickGreen = false;
function getArticlesSlider(){    
    if(bodyWidth <= 767){
        if(!$slickGreen){
            $(".articles_slider").slick({
              dots: true,
              arrows: false,
              // autoplay: true,
              autoplaySpeed: 4000,
              speed: 1200,
              slidesToShow: 1,
              slidesToScroll: 1,
              fade: true
            });
            $slickGreen = true;
        }
    } else if(bodyWidth > 767){
        if($slickGreen){
            $('.articles_slider').slick('unslick');
            $slickGreen = false;
        }
    }
};

$(window).load(function() {
});

$(window).resize(function() {
  bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
  getArticlesSlider();
});

$(document).scroll(function() {

  getHeaderParams();

});

$(document).ready(function() {

  getHeaderParams();
  getArticlesSlider();

    if( $(".main-slider").length > 0 ) {

      var swiper = new Swiper('.swiper-container', {
          loop: true,
          speed: 1400,
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          coverflowEffect: {
          rotate: -30,
          stretch: 0,
          depth: 180,
          modifier: 1,
          slideShadows : false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      });

    }

    if( $(".articles_slider").length > 0 ) {
        $(".articles_slider").not(".slick-initialized").slick({
            dots: true,
            arrows: false,
            // autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            responsive: [
              {
                breakpoint: 9999,
                settings: "unslick"
              },
              {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
              }
          ]
        });
    }

    $(".respmenubtn").click(function(e) {
        e.preventDefault();
        if( $("#resp_nav").is(":hidden") ) {
            $("#resp_nav").fadeIn(300);
            $(this).addClass("active");
        } else {
            $("#resp_nav").fadeOut(300);
            $(this).removeClass("active");
        }
    });
    $("#resp_nav .close_btn").on("click", function(e) {
        e.preventDefault();
        $("#resp_nav").fadeOut(300);
        $(".respmenubtn").removeClass("active");
    });
    $(this).keydown(function(eventObject){
        if (eventObject.which == 27 &&
            $("#resp_nav").is(":visible") &&
            bodyWidth <= 1024) {
                $("#resp_nav").fadeOut(300);
                $(".respmenubtn").removeClass("active");
        }
    });

    // ------------
    var topOffset;
    $('.main_nav a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      var hrefAttr = $(this).attr("href");
      if( hrefAttr.length > 0 && hrefAttr != "#" ) {
        if(bodyWidth <= 1024) {
          topOffset = -80;
        } else {
          topOffset = 2
        }
          $('html, body').stop().animate({
              'scrollTop': $(hrefAttr).offset().top+topOffset
          }, 500);
          $("#resp_nav").fadeOut(300);
          $(".respmenubtn").removeClass("active");
      }
    });

});