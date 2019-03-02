

$(document).ready(function() {

  // 網頁設計作品
  // -----------------------
  $('#gridWebWork .item').click(function(){
    var $mask = $(this).find('.mask'),
        viewTop =  $mask.offset().top - $(window).scrollTop(),
        viewLeft = $mask.offset().left,
        $target = $('#'+$(this).attr('data-work-modal')),
        classOpen = 'open';

    $(this).addClass(classOpen);
    $target.addClass('open');
    $('body').addClass('disable-scroll');
    $mask.css({
      top: viewTop*-1 - 10,
      left: viewLeft*-1 - 10,
    })
    setTimeout(function(){
      $target.addClass('opened');
    }, 1000);



    console.log(viewTop+', '+viewLeft+', '+$(this).attr('data-work-modal'));
  });

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