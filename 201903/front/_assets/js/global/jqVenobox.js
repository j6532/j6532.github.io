// ---------------
// venobox
// ---------------
if (navigator.appVersion.indexOf("MSIE 10") !== -1 || navigator.appVersion.indexOf("MSIE 9") !== -1) {} else { // excepct IE9/IE10
  $('.venobox').venobox({
    // default: ''
    framewidth: '720px',
    frameheight: '405px',
    spinner: 'double-bounce',
    autoplay: true
  });
}