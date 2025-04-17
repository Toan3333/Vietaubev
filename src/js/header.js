import { headerSearch } from "../../plugins/ComponentsUi/HeaderSearch/HeaderSearch";
import { detectCloseElement } from "./helper";
/*==================== Header ====================*/
/**
 * @param header
 */
const vw = $(window).width();
export const header = {
	scrollActive: function () {
		let height = $("header").height();
		if ($(window).scrollTop() > height) {
			$("header").addClass("active");
		} else {
			$("header").removeClass("active");
		}
	},
	mobile: function () {
		$(".header-hambuger").on("click", function () {
			$(this).toggleClass("active");
			$("body").toggleClass("isOpenMenu");
		});

		$('.header-nav-mobile li[class*="menu-item-has-children"] > a').on("click", function (e) {
			e.preventDefault();

			const $link = $(this);
			const $submenu = $link.next("ul");

			// Toggle chính nó
			$link.toggleClass("dropdown-active");
			$submenu.slideToggle();

			// Ẩn các menu cùng cấp khác (không đụng tới cấp con)
			$link
				.parent() // li hiện tại
				.siblings(".menu-item-has-children") // các li cùng cấp khác
				.each(function () {
					$(this).children("a").removeClass("dropdown-active"); // chỉ children trực tiếp
					$(this).children("ul").slideUp(); // chỉ ẩn submenu trực tiếp
				});
		});
	},
	initVariable: function () {
		const $header = $("header.header"); // Chắc chắn đúng selector
		if ($header.length) {
			const height = $header.outerHeight(); // outerHeight có padding & border
			console.log("Header height:", height); // Debug cho chắc
			document.documentElement.style.setProperty("--header-height", `${height}px`);
		}

		const $footer = $("footer.footer"); // Chắc chắn đúng selector

		if ($footer.length) {
			const height = $footer.outerHeight(); // Lấy full height (có padding)
			console.log("Footer height:", height); // Debug kiểm tra

			// Cách 1: Dùng padding trực tiếp vào body
			document.body.style.paddingBottom = `${height}px`;

			// Cách 2 (nếu bạn xài biến CSS cho dynamic layout)
			document.documentElement.style.setProperty("--footer-height", `${height}px`);
		}
	},
	init: function () {
		headerSearch();
		header.scrollActive();
		header.mobile();
		header.initVariable();
	},
};
document.addEventListener(
	"scroll",
	function (e) {
		header.scrollActive();
	},
	true
);
