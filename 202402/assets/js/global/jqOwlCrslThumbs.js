// --------------------------
// jqOwlCrslThumbs.js
// 大圖小圖 圖片輪播
// --------------------------
jQuery(document).ready(function ($) {

var $sync1 = $(".big-images"),
	$sync2 = $(".thumbs"),
	flag = false,
	duration = 300;

$sync1
	.owlCarousel({
		items: 1,
		margin: 10,
		nav: true,
		dots: true,
		navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		responsive:{
		  0 :{
			dots: true,
			nav:false,
		  },
		  768:{
			dots: false,
			nav:true,
		  }
		}
	})
	.on('changed.owl.carousel', function (e) {
		if (!flag) {
			flag = true;
			$sync2.trigger('to.owl.carousel', [e.item.index, duration, true]);
			flag = false;
		}
	});

$sync2
	.owlCarousel({
		margin: 4,
		items: 4,
		nav: false,
		center: false,
		dots: false,
		responsive:{
			0 :{
				margin: 4,
				items: 3
			},
			768 :{
				margin: 4,
				items: 4
			}
		}
	})
	.on('click', '.owl-item', function () {
		$sync1.trigger('to.owl.carousel', [$(this).index(), duration, true]);

	})
	.on('changed.owl.carousel', function (e) {
		if (!flag) {
			flag = true;        
			$sync1.trigger('to.owl.carousel', [e.item.index, duration, true]);
			flag = false;
		}
	});
});
