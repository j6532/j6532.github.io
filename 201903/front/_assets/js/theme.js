

$(document).ready(function() {

  // 網頁設計作品
  // -----------------------
  $('#gridWebWork .item').click(function(){
    var $item = $(this),
        $mask = $(this).find('.mask'),
        viewTop =  $mask.offset().top - $(window).scrollTop(),
        viewLeft = $mask.offset().left,
        $modal = $('#'+$(this).attr('data-work-modal'));

    $('#gridWebWork .item').css('pointer-events', 'none');
    $item
      .addClass('mask-show');
    $('body').addClass('disable-scroll');
    $modal.css('display', 'block');
    
    setTimeout(function(){
      
      $item
        .addClass('img-fade')
        .addClass('expand');
      $mask.css({
        'top': viewTop*-1 - 10,
        'left': viewLeft*-1 - 10,
      });
      
    }, 350);
    setTimeout(function(){
      $modal.addClass('open');
    }, 1100);


  });

  $('.workModal .workModal_close').click(function(){
    var $modal = $(this).parents('.workModal'),
        $item = $('[data-work-modal='+$modal.attr('id').replace('#','')+']'),
        $mask = $item.find('.mask');

    $('.workModal .workModal_close').css('pointer-events', 'none');

    $modal.removeClass('open');
    setTimeout(function(){
      $item.removeClass('img-fade');
    }, 450);
    setTimeout(function(){
      $item.removeClass('mask-show');
    }, 500);
    setTimeout(function(){
      $item.removeClass('expand');
      $mask.css({
        'top': 0,
        'left': 0,
      });
      $modal.css('display', 'none');
      $('body').removeClass('disable-scroll');
      $('.workModal .workModal_close').css('pointer-events', 'auto');
      $('#gridWebWork .item').css('pointer-events', 'auto');
    }, 1000);
    
    // $modal.removeClass('open');
    // $item.addClass('fading');
    // setTimeout(function(){
    //   $('body').removeClass('disable-scroll');
    //   $modal.css('display', 'none');
    //   $mask.css('display', 'none');
    // }, 400);
    // setTimeout(function(){
    //   $item.removeClass('open');
    //   $mask.css({
    //     'top': 0,
    //     'left': 0,
    //   });
    //   $item.removeClass('fading');
    // }, 750);
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