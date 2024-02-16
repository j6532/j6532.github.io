// --------------------------
// jqMenu.js  
// * 必須排在offCanvas後面 
// (offcanvas clone 自 bootstrap的nav，會吃到衝突的class)
// --------------------------


// Multiple Dropdown 第一層子選單
// --------------------------
$('#toggle-navbar-collapse .dropdown').on("click", function(e){
  var sibling = $(this).siblings('.dropdown');
  $(this).find('>a').next('ul').toggle();
  $(this).toggleClass('open');
  sibling.find('>a').next('ul').hide();
  sibling.removeClass('open');
  e.stopPropagation();
  // e.preventDefault();
});
// Multiple Dropdown 第二層子選單
// --------------------------
$('#toggle-navbar-collapse .dropdown-submenu').on("click", function(e){
  var sibling = $(this).siblings('.dropdown-submenu');
  $(this).find('>a').next('ul').toggle();
  $(this).toggleClass('open');
  sibling.find('>a').next('ul').hide();
  sibling.removeClass('open');
  e.stopPropagation();
  // e.preventDefault();
});


// Bootstrap Mobile Toggle 
// 讓手機板的母選單不可點擊
// --------------------------
var bootstraplistItem = $('#toggle-navbar-collapse .navbar-nav .dropdown>a,.dropdown-submenu>a');
mediaWidth = $(window).innerWidth();
if (mediaWidth < 768) {
  bootstraplistItem.removeAttr('href');
};


