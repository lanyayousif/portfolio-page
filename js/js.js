// $('.project-area .grid .test-popup-link').magnificPopup({
//     type: 'image',
//     gallery: { enabled: true }
// });


 $(function(){
    $(window).scroll(function(){
      var winTop = $(window).scrollTop();
      if(winTop >= 10){
          $(".main_menu").addClass("navbar-fixed");
          $(".main_menu").removeClass("navbar-normal");
    }else{
        $(".main_menu").removeClass("navbar-fixed");
        $(".main_menu").addClass("navbar-normal");
        $(".navbar").css('box-shadow', 'none!important');
      }//if-else
    });//win func.
  });//ready func.

$('.site-main .about-area .owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        560: {
            items: 1
        },
        600: {
            items: 2
        }
    }
})




