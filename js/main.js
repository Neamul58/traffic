
//OWL CAROUSEL TESTIMONIAL SECTION
$(".testimonial-carousel").owlCarousel({
 
    navigation : false, // Show next and prev buttons

    // slideSpeed : 300,
    // paginationSpeed : 400,

    items : 1, 
    loop:true,
    autoplay:true,
    smartSpeed:500
    // itemsDesktop : false,
    // itemsDesktopSmall : false,
    // itemsTablet: false,
    // itemsMobile : false

});


// OWL CAROUSEL CASE STUDY-SECTION
$(".case-studies-carousel").owlCarousel({
 
    autoPlay: 3000, //Set AutoPlay to 3 seconds

    items : 4,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [979,3]

});

//OWL CAROUSEL LOGO SECTION
$(".logo-carousel").owlCarousel({
 
    navigation : false, // Show next and prev buttons

    // slideSpeed : 300,
    // paginationSpeed : 400,

    items : 6, 
    loop:true,
    autoplay:true,
    smartSpeed:500
    // itemsDesktop : false,
    // itemsDesktopSmall : false,
    // itemsTablet: false,
    // itemsMobile : false

});

// HOMEPAGE 3 SWIPER SLIDER

const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
  
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });


//   HOMEPAGE-3 CASE STUDY SECTION OWL CAROUSEL

$(".case-study-carousel").owlCarousel({
 
    autoPlay: 3000, //Set AutoPlay to 3 seconds

    items : 5,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [979,3]

});







