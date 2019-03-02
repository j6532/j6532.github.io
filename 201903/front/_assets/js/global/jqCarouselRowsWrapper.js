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
