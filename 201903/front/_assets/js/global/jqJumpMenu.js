// -------------------------
// 跳躍的menu
// jqJumpMenu.js
// -------------------------
$('.jump>a').each(function (index) {
  var characters = $(this).text().split("");

  $this = $(this);
  $this.empty();
  $.each(characters, function (i, el) {
  $this.append("<span>" + el + "</span");
  });
});