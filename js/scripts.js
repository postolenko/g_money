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

// function getArticlesSlider() {

//     if( $(".articles_slider").length > 0 ) {
//       if(bodyWidth<= 767) {
//         $(".articles_slider").not(".slick-initialized").slick({
//             dots: false,
//             arrows: true,
//             // autoplay: true,
//             autoplaySpeed: 4000,
//             speed: 1200,
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             fade: true
//         });
//       } else {
//         $(".articles_slider").slick({destroy});
//       }

//     }

// }


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

    if( $(".slider").length > 0 ) {
        $(".slider").not(".slick-initialized").slick({
            dots: true,
            arrows: false,
            // autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 3,
            slidesToScroll: 1,
            // fade: true,
            // responsive: [
            //     {
            //       breakpoint: 900,
            //       settings: {
            //         slidesToShow: 2,
            //         slidesToScroll: 2
            //       }
            //     },
            //     {
            //       breakpoint: 540,
            //       settings: {
            //         slidesToShow: 1,
            //         slidesToScroll: 1
            //       }
            //     }
            //   ]
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

});