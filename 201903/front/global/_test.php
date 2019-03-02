<script type="text/javascript">
var loc = location.pathname.split('/').pop();

$(document).ready(function() {


  

  // 最新消息
  if (loc == 'news.php'||loc == 'newsIn.php') {
  }

  // // 更換連結
  // $('a[href="#newsIn"]').attr('href','../013/newsIn.php');

});

// =================================
// Shop
// =================================
// $(document).ready(function() {

  var folderPages = 'pages',
  folderPrd   = 'prd',
  folderCart  = 'cart',
  folderMmbr  = 'mmbr',
  folderArtc  = 'artc';

  if (frontVersion == 'v1') {
    folderPages = 'shop-v1',
    folderPrd = 'shop-v1';
    
  } else if(frontVersion == 'v2') {
    folderPages = 'shop-v2',
    folderPrd = 'shop-v2';
  } else if(frontVersion == 'v3') {
    folderPages = 'shop-v3',
    folderPrd = 'shop-v3';
  } else {
    // 首頁
    var hLink = 'index.php';
    newLinks(folderPages, {
      '#home': hLink,
      '#contact': hLink
    });
    // 商品
    newLinks(folderPages, {
      '#prdIn': hLink,
      '#prdList': hLink,
      '#brandPrd': hLink,
      '#buyTogether': hLink
    });
  }

  // 首頁
  newLinks(folderPages, {
    '#home': 'index.php'
  });

  // 商品
  newLinks(folderPrd, {
    '#prdIn':       'prdi.php',
    '#prdList':     'prdl.php',
    '#brandPrd':    'prdl-brand.php',
    '#buyTogether': 'prdl-buytogether.php'
  });

  // 購物車
  newLinks(folderCart, {
    '#cart': 'cart.php',
    // '#cart': 'cart-multiple.php'
  });

  // 會員
  newLinks(folderMmbr, {
    '#mmbr':          'mmbr.php',
    '#mmbr-register': 'register-email.php'
  });

  // 文章
  newLinks(folderArtc, {
    '#about':         'about.php',
    '#privacy':       'privacy.php',
    '#faq':           'faq.php',
    '#shopping-term': 'coming-term.php',
    '#return-policy': 'XXXXXX.php',
    '#order-sop':     'coming.php',
    '#news':          'news.php',
    '#contact':       'contact.php'
  });

  // 側邊欄
  sidebarName(0,
    ['BIRTHDAY', 
    '禮物花束', 
    '禮物植栽',
    '花禮推薦',
    'OCCASIONS',
    '康乃馨花束花禮',
    '全台當日送花',
    '蛋糕花禮花束',
    '冠軍設計花束',
    '浪漫求婚花束',
    '百合花束花禮',
    '向日葵花束花禮',
    '文心蘭花束花禮',
    '繡球花束花禮',
    '迷你精緻花束花禮',
    '綜合混搭花束花禮',
    'FLOWERS',
    '空飄汽球花束花禮',
    '浪漫香水花盒花禮',
    '愛情音樂花盒花禮',
    '心形浪漫花盒花禮',
    'PLANTS',
    '萬年青',
    '福祿桐盆栽',
    '象腳王蘭',
    '帝王蔓綠絨',
    'GIFTS',
    '特級花禮',
    '進口花禮',
    '經典盆花',
    '包月盆花'
    ]);

  // --------------------
  // version 2
  // --------------------
  if (frontVersion == 'v2') {
    // 首頁廣告1
    changeImages('.grid_ad_brick', 0, [
      'v2/ad_001.jpg', 
      'v2/ad_002.jpg', 
      'v2/ad_003.jpg', 
      'v2/ad_004.jpg']);
    // 首頁廣告2
    changeImages('.crsl_ad_checkerboard', 0, [
      'v2/ad_005.jpg', 
      'v2/ad_006.jpg', 
      'v2/ad_007.jpg', 
      'v2/ad_005.jpg', 
      'v2/ad_006.jpg', 
      'v2/ad_007.jpg']);

    // 商品列表
    $('.prdl_sidebar-body').eq(1).css('display', 'none');
    $('.prdl-header .title').html('文心蘭花束花禮');

    // 品牌商品列表
    $('.brand_banner .img_desktop').attr('src','../_images/v2/brand_banner_001.jpg');
    $('.brand_banner .img_mobile').attr('src','../_images/v2/brand_banner_001s.jpg');

    sidebarName(26, 
      ['BRANDS', '花好月圓', '錦上添花', '良辰吉時', '金玉滿堂']
    );
    for (var i = 26; i < (26+5); i++) {
      $('.prdl_sidebar-body a').eq(i).attr('href', '../shop-v2/prdl-brand.php');
    }

    if (loc == 'prdl-brand.php') {
      $('.prdl-header .title').html('錦上添花');
      var $sidebarLink = $('.prdl_sidebar-body a');
      $sidebarLink.parent('li')
        .removeClass('active')
        .removeClass('selected');
      $sidebarLink.eq(28).parent('li').addClass('active');
    }
  }
  // --------------------
  // version 3
  // --------------------
  if (frontVersion == 'v3') {
    changeImages('.slider', 0, [
      'v3/slider_001.jpg',
      'v3/slider_001.jpg']);
    console.log('v3');
  }

// });

// 更換連結
function newLinks($newFolder, $obj) {
  for (var i = 0; i < Object.values($obj).length; i++) {
    $('a[href="'+Object.getOwnPropertyNames($obj)[i]+'"]').attr('href', '../'+$newFolder+'/'+Object.values($obj)[i]);
  }
}
// 更換圖片
function changeImages($wrapper, $startN, $imgSrcs) {
  for (var i = $startN; i < ($startN+$imgSrcs.length); i++) {
    $($wrapper+' .item').eq(i)
      .find('.img')
        .attr('style','background-image: url(../_images/'+$imgSrcs[(i-$startN)]+');')
      .end()
      .find('img').attr('src','../_images/'+$imgSrcs[(i-$startN)]);
  }
}
// 更換名字
function sidebarName( $startN, $names) {
  for (var i = $startN; i < $startN+$names.length; i++) {
    $('.prdl_sidebar-body a').eq(i).html($names[(i-$startN)]);
  }
}

</script>


