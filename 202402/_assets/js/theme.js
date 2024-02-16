

$(document).ready(function() {

  // 捲動後加menu樣式
  var changeTop = 10;
  $(window).scroll(function () {
    $scrollTop = $(this).scrollTop();
    if ($scrollTop <= changeTop) {
      $('.menu_wrapper').removeClass('add_class');
    } else {
      $('.menu_wrapper').addClass('add_class');
    }
  });

  // 網頁設計作品
  // -----------------------
  var $modalTrigger = $('#gridWebWork .item'),
      $modalClose   = $('.workModal .workModal_close');

  if ($(this).is('.btn_link')) {
    
  }

  $('.btn_link').click(function(e){
    e.stopPropagation();
  });

  $modalTrigger.click(function(){

    var $modal = $('#'+$(this).attr('data-work-modal'));

    $modalTrigger.css('pointer-events', 'none');
    $('body').addClass('disable-scroll');
    $modal.css('display', 'block');
    
    setTimeout(function(){
      $modal.addClass('open');
    }, 150);
    setTimeout(function(){
      $modalClose.css('pointer-events', 'auto');
    }, 1000);

  });

  $('.workModal .workModal_close').click(function(){
    var $modal = $(this).parents('.workModal');

    $modalClose.css('pointer-events', 'none');
    $modal.removeClass('open');
    setTimeout(function(){
      $('body').removeClass('disable-scroll');
    }, 350);
    setTimeout(function(){
      $modal.css('display', 'none');
      $modalTrigger.css('pointer-events', 'auto');
    }, 1000);

  });

  // filter
  var options = {
    filter: "all"
  };
  var filterizd = $(".grid_webWork").filterizr();
  filterizd.filterizr("setOptions", options);
  


  $('.webWrok_nav li').click(function() {
    $('.webWrok_nav li').removeClass('active');
    $(this).addClass('active');
  });
  
  
});
$(function() {
  
});



