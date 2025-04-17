import AOS from "aos";
import lozad from "lozad";
import {
	setBackgroundElement,
	detectCloseElement,
	buttonToTop,
	clickScrollToDiv,
	appendCaptchaASP,
	countUpInit,
} from "./helper";
import { header } from "./header";
import { showMenu } from "./header-mobile";
import { swiperInit } from "./swiper";

$(document).ready(function () {
	setBackgroundElement();
	header.init();
	swiperInit();
	showMenu();
	// countUpInit();
	indicatorSlide();
	toggleCheckbox();
	applyParallax();

	setTimeout(() => {
		console.log("init AOS");
		AOS.init({
			offset: 200,
			once: true,
		});
	}, 200);
	setTimeout(() => {
		console.log("refresh AOS");
		AOS.refresh();
	}, 1000);

	$(".product-item-heading").on("click", function () {
		$(this).next(".product-main").slideToggle();
		$(this).find(".icon-left i").toggleClass("fa-chevron-down fa-chevron-up");
	});
});

function applyParallax() {
	const elements = document.querySelectorAll(".parallax-img");

	window.addEventListener("scroll", () => {
		const scrollY = window.scrollY;
		elements.forEach((el) => {
			const speed = 0.05; // Độ mạnh của parallax
			const offset = el.getBoundingClientRect().top + window.scrollY;
			const yPos = (scrollY - offset) * speed;

			el.style.transform = `translateY(${yPos}px)`;
		});
	});
}

export function indicatorSlide() {
	if ($(".indicator-swipe").length > 0) {
		var callback = function (entries) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					entry.target.classList.add("active");
					setTimeout(function () {
						entry.target.classList.remove("active");
					}, 3000);
				}
			});
		};

		var observer = new IntersectionObserver(callback);
		var animationItems = document.querySelectorAll(".indicator-swipe");
		animationItems.forEach(function (item) {
			observer.observe(item);
		});
	}
}

export function toggleCheckbox() {
	document.querySelectorAll(".product-checkbox").forEach((checkbox) => {
		// Đảm bảo checkbox không có class "checked" khi mới load
		checkbox.classList.remove("checked");

		// Thêm sự kiện click để toggle class "checked"
		checkbox.addEventListener("click", function () {
			this.classList.toggle("checked");
		});
	});
}

// fancyfox popup
document.addEventListener("DOMContentLoaded", function () {
	Fancybox.bind("[data-fancybox]", {
		dragToClose: false,
		backdropClick: false,
		template: {
			closeButton:
				'<button class="fancybox-button fancybox-button--close" title="Close"><i class="fa-duotone fa-solid fa-xmark"></i></button>',
		},
	});
});

/*==================== Aos Init ====================*/

/*==================== Lazyload JS ====================*/
const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();
