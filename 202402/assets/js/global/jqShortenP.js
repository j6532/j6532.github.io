// --------------------------
// from http://jsfiddle.net/iambriansreed/bjdSF/
// Shorten Paragraphe
// --------------------------
var minimized_elements = $('p.minimize-short');
  
minimized_elements.each(function(){
  var length = 30;
  var t = $.trim($(this).text());
  // $.trim() => ignore white space
  if(t.length < length) return;
  $(this).html(
    t.slice(0,length)+'<span>... </span>'+
    '<span style="display:none;">'
  );
});
var minimized_elements = $('p.minimize-medium');

minimized_elements.each(function(){
  var length = 80;
  var t = $.trim($(this).text());
  // $.trim() => ignore white space
  if(t.length < length) return;
  $(this).html(
    t.slice(0,length)+'<span>... </span>'+
    '<span style="display:none;">'
  );
});