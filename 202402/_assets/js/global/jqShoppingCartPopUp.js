// --------------------
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


