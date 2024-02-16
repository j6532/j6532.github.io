
// --------------------------
// 用+/-控制input數字
// jqInputNo.js
// https://jsfiddle.net/268hu84r/1/
// --------------------------
(function() {
 
  window.inputNumber = function(el) {

    var min = el.attr('min') || false;
    var max = el.attr('max') || false;

    var els = {};

    els.dec = el.prev();
    els.inc = el.next();

    el.each(function() {
      init($(this));
    });

    function init(el) {

      els.dec.on('click', decrement);
      els.inc.on('click', increment);

      function decrement() {
        var value = el[0].value;
        value--;
        if(!min || value >= min) {
          el[0].value = value;
        }
        el.trigger('change');
      }

      function increment() {
        var value = el[0].value;
        value++;
        if(!max || value <= max) {
          el[0].value = value++;
        }
        el.trigger('change');
      }
    }
  }
})();
$(document).ready(function(){
  $('.input-number>input').each(function(){
    inputNumber($(this));
  });
});