/**
 * ViewBox
 * @author Pavel Khoroshkov aka pgood
 */
! function(i) {
	i.fn.viewbox = function(t) {
		function n() {
			w || (i("body").append(g), g.fadeIn(t.openDuration), w = !0);
			var n = o("body");
			n.css({
				"margin-left": -n.width() / 2,
				"margin-top": -n.height() / 2
			})
		}

		function e() {
			w && (g.fadeOut(t.closeDuration, function() {
				g.detach()
			}), w = !1)
		}

		function o(i) {
			return g.find(".viewbox-" + i)
		}

		function a(i, t) {
			o(i).html(t)
		}

		function c() {
			var i = -1;
			return h && f.each(function(t) {
				return h.is(this) ? (i = t, !1) : void 0
			}), i
		}

		function r() {
			if (!(f.length <= 1)) {
				var i = c() + 1;
				i >= f.length && (i = 0), f.eq(i).click()
			}
		}

		function d() {
			if (!(f.length <= 1)) {
				var i = c() - 1;
				0 > i && (i = f.length - 1), f.eq(i).click()
			}
		}

		function l(i) {
			return i.match(/(png|jpg|jpeg|gif)$/i)
		}

		function s(i) {
			return i.get(0).complete
		}

		function v(i) {
			i ? p.appendTo(o("body")) : p.detach()
		}

		function u(t) {
			var n = i('<div class="viewbox-button-default viewbox-button-' + t + '"></div>');
			return n.appendTo(g).get(0).insertAdjacentHTML("afterbegin", '<svg><use xlink:href="#viewbox-' + t + '-icon"/></svg>'), n
		}
		"undefined" == typeof t && (t = {}), t = i.extend({
			template: '<div class="viewbox-container"><div class="viewbox-body"><div class="viewbox-header"></div><div class="viewbox-content"></div><div class="viewbox-footer"></div></div></div>',
			loader: '<div class="loader"><div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div></div>',
			setTitle: !0,
			margin: 20,
			resizeDuration: 300,
			openDuration: 200,
			closeDuration: 200,
			closeButton: !0,
			navButtons: !0,
			closeOnSideClick: !0,
			nextOnContentClick: !0
		}, t);
		var h, f = i(this),
			g = i(t.template),
			p = i(t.loader),
			w = !1,
			b = !1;
		return i("body").get(0).insertAdjacentHTML("afterbegin", '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="viewbox-sprite" style="display:none"><symbol id="viewbox-close-icon" viewBox="0 0 50 50"><path d="M37.304 11.282l1.414 1.414-26.022 26.02-1.414-1.413z"/><path d="M12.696 11.282l26.022 26.02-1.414 1.415-26.022-26.02z"/></symbol><symbol id="viewbox-prev-icon" viewBox="0 0 50 50"><path d="M27.3 34.7L17.6 25l9.7-9.7 1.4 1.4-8.3 8.3 8.3 8.3z"/></symbol><symbol id="viewbox-next-icon" viewBox="0 0 50 50"><path d="M22.7 34.7l-1.4-1.4 8.3-8.3-8.3-8.3 1.4-1.4 9.7 9.7z"/></symbol></svg>'), f.click(function() {
			if (!b) {
				if ($e = i(this), a("header", t.setTitle && $e.attr("title") ? $e.attr("title") : ""), l($e.attr("href"))) {
					var e = i('<img class="viewbox-image" alt="">').attr("src", $e.attr("href"));
					h = $e, a("content", ""), n(), s(e) || v(!0);
					var c = o("body"),
						r = 0,
						d = o("content"),
						u = window.setInterval(function() {
							if (!s(e) && 1e3 > r) return void r++;
							window.clearInterval(u), v(!1), i("body").append(e);
							var n = c.width() - d.width() + 2 * t.margin,
								o = c.height() - d.height() + 2 * t.margin,
								a = i(window).width() - n,
								l = i(window).height() - o,
								h = e.width(),
								f = e.height();
							e.detach(), h > a && (f = f * a / h, h = a), f > l && (h = h * l / f, f = l), b = !0, c.animate({
								"margin-left": -(h + n) / 2 + t.margin,
								"margin-top": -(f + o) / 2 + t.margin
							}, t.resizeDuration), d.animate({
								width: h,
								height: f
							}, t.resizeDuration, function() {
								d.append(e), b = !1
							})
						}, s(e) ? 0 : 200)
				}
				return !1
			}
		}), o("body").click(function(i) {
			i.stopPropagation(), t.nextOnContentClick && r()
		}), t.closeButton && u("close").click(function(i) {
			i.stopPropagation(), e()
		}), t.navButtons && f.length > 1 && (u("next").click(function(i) {
			i.stopPropagation(), r()
		}), u("prev").click(function(i) {
			i.stopPropagation(), d()
		})), t.closeOnSideClick && g.click(e), this
	}
}(jQuery);