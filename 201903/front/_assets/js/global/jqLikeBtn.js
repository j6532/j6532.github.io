// ---------------------
// jqLikeBtn.js
// 加入喜愛按鈕
// ---------------------
$('.like_btn').click(function(){
  $(this).find('i').toggleClass('fa-heart').toggleClass('fa-heart-o');
});