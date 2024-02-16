// -------------------
// jqOffCanvas.js
// 手機板側邊menu
// -------------------

// Off Canvas, Side Menu
// --------------------------
$(".navbar-nav").clone().prependTo("#off-canvas");

$(function() {
  $(document).trigger("enhance");
});
 
$('#off-canvas').offcanvas({
// options
});

// 讓手機板的母選單不可點擊
$('#off-canvas .dropdown>a, #off-canvas .dropdown-submenu>a').removeAttr('href');


// 點擊開啟下拉選單
$('#off-canvas .dropdown>a').on("click", function(e){
  $(this).parent('.dropdown').toggleClass('open');
  $(this).parent('.dropdown').siblings('li').removeClass('open');
});
$('#off-canvas .dropdown-submenu>a').on("click", function(e){
  $(this).parent('.dropdown-submenu').toggleClass('open');
  $(this).parent('.dropdown-submenu').siblings('li').removeClass('open');
});