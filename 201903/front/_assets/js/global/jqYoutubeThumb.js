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
});