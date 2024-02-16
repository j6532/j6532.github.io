// ---------------------------------------
// 這份檔案是將global資料夾裡面的所有(部分)js
// 用copy-global.bat複製起來
// ---------------------------------------// ------------------------
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
});// --------------------------
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


// --------------------------------
// jqCarouselRowsWrapper.js
// jQuery 包覆物件
// Note:
// 1. 在.owl-carousel上加.row_wrapper 
// 2. 要排列的物件: .inner
// 3. data-row-n="n"，n指定包覆數量
// 4. data-row-wrap="name"，name為包覆後的classname 
// --------------------------------



var rws_nm    = '.row_wrapper',
    rws_inr   = $(rws_nm).children().attr('class'),
    rws_itm   = rws_nm+' .'+rws_inr,
    rws_n     = $(rws_nm).data('row-n'),
    rws_wrp   = $(rws_nm).data('row-wrap') ;

for(var i = 0; i < rws_itm.length; i+=rws_n) {
  $(rws_itm).slice(i, i+rws_n).wrapAll("<div class='"+rws_wrp+"'></div>");
}
// datepicker
// ----------------------------------------
$('.datepicker').datepicker({
  language: 'zh-TW',
  format: 'yyyy-mm-dd',
  orientation: "bottom auto"
});// https://www.jqueryscript.net/demo/jQuery-Toggle-Visibility-Plugin
(function ($) {
  $.fn.toggleVisibility = function() {
    var changeFn = function() {
      if ($(this).is(':checkbox')) {
        var el = $($(this).data('toggle-element'));
        $(this).is(':checked') ? el.removeClass('hidden') : el.addClass('hidden');
      } else if ($(this).is(':radio')) {
        var els = $($(this).data('toggle-element'));
        var val = $(this).closest('form').find("input[name='" + $(this).attr('name') + "']:checked").val();
        els.each(function() {
          if ($(this).attr('data-toggle-element-value') == val) {
            $(this).removeClass('hidden');
          } else {
            $(this).addClass('hidden');
          }
        });
      } else if ($(this).is('select')) {
        var els = $($(this).data('toggle-element'));
        var val = $(this).val();
        if (val === '') {
          els.addClass('hidden');
          els.filter('[data-toggle-element-value-none]').removeClass('hidden');
        } else {
          els.filter('[data-toggle-element-value-none]').addClass('hidden');
          els.filter('[data-toggle-element-value-any]').removeClass('hidden');
          els.each(function() {
            if (!!$(this).attr('data-toggle-element-value')) {
              if ($(this).attr('data-toggle-element-value') == val) {
                $(this).removeClass('hidden');
              } else {
                $(this).addClass('hidden');
              }
            }
          });
        }
      }
    }

    // Set hidden/shown state on input change
    $(this).on('change', function (e) {
      changeFn.call(this);
    });

    // Set hidden/shown state on page load
    $(this).each(function() {
      changeFn.call(this);
    });
  };
})(window.jQuery);


// --------------------
// 產生Youtube影片縮圖
// --------------------
$('.youtube_thumb').each(function(){
  var src = $(this).attr('data-thumb-src');
  var id = src.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/).pop();
  if (id.length == 11) {
    $(this).attr({
      'style': 'background-image: url(//img.youtube.com/vi/'+id+'/0.jpg);'
    });
  }
});// --------------------
// 購物車 Pop Up
// --------------------

var cartPopup = '.cart_popup';
var cartBtnId = '#cart';
$(cartBtnId).click(function () {
    $(cartPopup).toggleClass('active');
});
$(document).click(function (e) {
    if (!$(e.target).parents().addBack().is(cartBtnId)) {
        $(cartPopup).removeClass("active");
    }
});
$(cartPopup).click(function (e) {
    e.stopPropagation();
});



// ------------------------
// jqMarquee.js
// 跑馬燈
// ------------------------
$(function () {
    if ( $( "#abgne_marquee" ).length ) {  // 如果#abgne_marquee存在
        // 先取得 div#abgne_marquee ul
        // 接著把 ul 中的 li 項目再重覆加入 ul 中(等於有兩組內容)
        // 再來取得 div#abgne_marquee 的高來決定每次跑馬燈移動的距離
        // 設定跑馬燈移動的速度及輪播的速度
        var $marqueeUl = $('#abgne_marquee ul'),
            $marqueeli = $marqueeUl.append($marqueeUl.html()).children(),
            _height = $('#abgne_marquee').height() * -1,
            scrollSpeed = 600,
            timer,
            speed = 1850 + scrollSpeed;

        // 幫左邊 $marqueeli 加上 hover 事件
        // 當滑鼠移入時停止計時器；反之則啟動
        $marqueeli.hover(function () {
            clearTimeout(timer);
        }, function () {
            timer = setTimeout(showad, speed);
        });

        // 控制跑馬燈移動的處理函式
        function showad() {
            var _now = $marqueeUl.position().top / _height;
            _now = (_now + 1) % $marqueeli.length;

            // $marqueeUl 移動
            $marqueeUl.animate({
                top: _now * _height
            }, scrollSpeed, function () {
                // 如果已經移動到第二組時...則馬上把 top 設 0 來回到第一組
                // 藉此產生不間斷的輪播
                if (_now == $marqueeli.length / 2) {
                    $marqueeUl.css('top', 0);
                }
            });

            // 再啟動計時器
            timer = setTimeout(showad, speed);
        }

        // 啟動計時器
        timer = setTimeout(showad, speed);

        $('a').focus(function () {
            this.blur();
        });
        }
});
