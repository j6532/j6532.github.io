// ------------------------
// jqNavScroll.js
// ------------------------
// Navbar add class 
// object : .navbar
// --------------------
$(document).ready(function(){
  var navH = 1;
  var navH = 10; // for fullpage
  $(window).scroll(function () {
    if ($(this).scrollTop() > navH) {
      $('.navbar').addClass('add_class') 
    } else {
      $('.navbar').removeClass('add_class')
    }
  })
});
// Navbar Fix Top (需在owl-carousel後面)
// object : .scroll_fix_top
// -----------------------
$(document).ready(function(){
  if ( $( ".scroll_fix_top" ).length ) {  
    // if .scroll_fix_top exist
    var $navMenu    = $('.scroll_fix_top'),
        navMenuH    = $navMenu.height(),
        $wrapper    = $('.scr_menu_wrapper'),
        navH        = $('.navbar').height(),
        anchorH     = $navMenu.offset().top - navH,
        drpListH    = Math.max.apply(null, $('.dsk_menu ul.dropdown-menu').map(function ()
                      {
                        return $(this).height();
                      }).get()); //取得.dropdown-menu中最高的

    // nav 滾動後加上class
    function nav_add_class() {
      if ($(this).scrollTop() > anchorH) {
        $navMenu.addClass('add_class');
        $navMenu.css('top',navH+'px');
      } else {
        $navMenu.removeClass('add_class');
        $navMenu.css('top','auto');
      }
    }
    // dropdown 滾動後加上class
    function drp_add_class() {
      if ($(this).scrollTop() >= anchorH-drpListH) {
        $navMenu.addClass('drp_add_class');
      } else {
        $navMenu.removeClass('drp_add_class');
      }
    }

    // 加上wrapper的高度，避免捲動時卡一下
    $wrapper.css('height', navMenuH+'px');

    // 依位置判斷
    nav_add_class(); //頁面loading時
    $(window).scroll(nav_add_class); //捲動時
    drp_add_class();
    $(window).scroll(drp_add_class);
  }
});




