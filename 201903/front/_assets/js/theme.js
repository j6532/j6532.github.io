

$(document).ready(function() {
  // 首頁 產品區塊二
  // -----------------------
  $(".owl-carousel.crsl_homeprd_md").owlCarousel({
    loop: false,
    margin: 15,
    touchDrag: true,
    mouseDrag: true,
    stagePadding: 5,
    dots: false,
    nav: true,
    items: 4,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    // autoplay: true,
    autoplayTimeout: 8000,
    responsive: {
      0: {
        dots: true,
        nav: false,
        items: 1
      },
      576: {
        dots: true,
        nav: false,
        items: 2
      },
      768: {
        items: 3
      },
      1200: {
        items: 2
      },
      1600: {
        items: 3
      }
    }
  });


  
});