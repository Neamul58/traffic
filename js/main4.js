$(document).ready(function(){

     $('.menu-trigger').on('click', function(){
         $('.off-canvas-menu').addClass("show-off-canvas-menu");
         $('.off-canvas-menu-shade').addClass("active");
     });
    
    $(".close-btn").on("click", function(){
        $(".off-canvas-menu").removeClass("show-off-canvas-menu");
        $('.off-canvas-menu-shade').removeClass("active");
    });


    $(".single-testimonial-box").on({mouseenter: function(){
        $(this).addClass("active");
    },
     mouseleave: function(){
        $(this).removeClass("active");
    }
    });


});