import Swiper from "swiper";
import { Autoplay, Navigation, EffectFade, Scrollbar, Grid, Thumbs } from "swiper/modules";
/**
 * @param swiperInit
 */
export function swiperInit() {
	swiperProduct();
	swiperBrand();
	swiperBanner();
	swiperAbout5();
	swiperAbout7();
	swiperHome9();
	swiperProductDetail();
	swiperProductDetail2();
}
function swiperBanner() {
	const swiper = new Swiper(".swiper-home-banner", {
		modules: [Autoplay, Navigation, EffectFade],
		spaceBetween: 12,
		slidesPerView: 1,
		speed: 1500,
		loop: true,
		// effect: "fade",
		autoplay: {
			delay: 3500,
		},
		navigation: {
			nextEl: ".home-1 .btn-next",
			prevEl: ".home-1 .btn-prev",
		},
		loop: true,
	});
}

function swiperProductDetail() {
	const colLeft = document.querySelector(".col-left");
	if (!colLeft) return;

	const thumb = colLeft.querySelector(".swiper-product-detail-thumb");
	const main = colLeft.querySelector(".swiper-product-detail");
	const prevBtn = colLeft.querySelector(".btn-prev");
	const nextBtn = colLeft.querySelector(".btn-next");

	const swiperThumb = new Swiper(thumb, {
		modules: [Autoplay],
		spaceBetween: 12,
		slidesPerView: 3.5,
		freeMode: true,
		observer: true,
		observeParents: true,
		watchSlidesProgress: true,
		loop: true,
		breakpoints: {
			768: {
				slidesPerView: 4,
				spaceBetween: 24,
				direction: "vertical",
			},
			1024: {
				spaceBetween: 15,
				slidesPerView: 5,
				direction: "vertical",
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 20,
				direction: "vertical",
			},
		},
	});

	const swiperDetail = new Swiper(main, {
		spaceBetween: 10,
		loop: true,
		observer: true,
		observeParents: true,
		modules: [Autoplay, Navigation, Thumbs],
		thumbs: {
			swiper: swiperThumb,
		},
		navigation: {
			nextEl: nextBtn,
			prevEl: prevBtn,
		},
	});

	window.productDetailSwiper = {
		element: colLeft,
		swiperThumb,
		swiperDetail,
	};

	const weightOptions = document.querySelectorAll(".product-detail-weight-list span");
	if (weightOptions.length > 0) {
		weightOptions[0].classList.add("active");
	}
}

function swiperBrand() {
	const swiper = new Swiper(".brand-swiper", {
		slidesPerView: 3,
		modules: [Autoplay, Navigation, Grid], // Đảm bảo đã import EffectFade
		loop: true,
		grid: {
			rows: 2, // Điều này sẽ tạo ra 2 hàng
			fill: "row",
		},
		// autoplay: {
		// 	delay: 3500,
		// 	disableOnInteraction: false,
		// },
		speed: 1500,
		navigation: {
			nextEl: ".home-8 .btn-next",
			prevEl: ".home-8 .btn-prev",
		},
		breakpoints: {
			768: {
				slidesPerView: 3,
			},
			1024: {
				slidesPerView: 5,
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 40,
			},
		},
	});
}

function swiperAbout7() {
	const swiper = new Swiper(".about-7-swiper", {
		slidesPerView: 3,
		modules: [Autoplay, Navigation, Grid], // Đảm bảo đã import EffectFade
		// loop: true,
		grid: {
			rows: 2, // Điều này sẽ tạo ra 2 hàng
			fill: "row",
		},
		autoplay: {
			delay: 3500,
			disableOnInteraction: false,
		},
		speed: 1500,
		navigation: {
			nextEl: ".about-7 .btn-next",
			prevEl: ".about-7 .btn-prev",
		},
		breakpoints: {
			768: {
				slidesPerView: 3,
			},
			1024: {
				slidesPerView: 4,
			},
			1200: {
				slidesPerView: 6,
				spaceBetween: 40,
			},
		},
	});
}

function swiperProductDetail2() {
	const swiper = new Swiper(".product-detail-2-swiper", {
		slidesPerView: 3,
		modules: [Autoplay, Navigation], // Đảm bảo đã import EffectFade
		loop: true,

		// autoplay: {
		// 	delay: 3500,
		// 	disableOnInteraction: false,
		// },
		speed: 1500,
		navigation: {
			nextEl: ".product-detail-2 .btn-next",
			prevEl: ".product-detail-2 .btn-prev",
		},
		breakpoints: {
			768: {
				slidesPerView: 3,
			},

			1200: {
				slidesPerView: 3,
				spaceBetween: 100,
			},
		},
	});
}

function swiperAbout5() {
	const swiper = new Swiper(".showroom-swiper", {
		slidesPerView: 3,
		modules: [Autoplay, Navigation], // Đảm bảo đã import EffectFade
		loop: true,

		autoplay: {
			delay: 3500,
			disableOnInteraction: false,
		},
		speed: 1500,
		navigation: {
			nextEl: ".about-5 .btn-next",
			prevEl: ".about-5 .btn-prev",
		},
		breakpoints: {
			768: {
				slidesPerView: 3,
			},

			1200: {
				slidesPerView: 2,
				spaceBetween: 40,
			},
		},
	});
}

function swiperHome9() {
	const swiper = new Swiper(".home-9-swiper", {
		slidesPerView: 2,
		modules: [Autoplay, Navigation], // Đảm bảo đã import EffectFade
		loop: true,
		// grid: {
		// 	rows: 2, // Điều này sẽ tạo ra 2 hàng
		// 	fill: "row",
		// },
		autoplay: {
			delay: 3500,
			disableOnInteraction: false,
		},
		speed: 1500,
		navigation: {
			nextEl: ".home-9 .btn-next",
			prevEl: ".home-9 .btn-prev",
		},
		breakpoints: {
			768: {
				slidesPerView: 3,
			},
			1024: {
				slidesPerView: 5,
			},
			1200: {
				slidesPerView: 6,
				spaceBetween: 40,
			},
		},
	});
}

function swiperProduct() {
	const swiper = new Swiper(".product-swiper", {
		slidesPerView: 3,
		modules: [Autoplay, Navigation, Scrollbar], // Đảm bảo đã import EffectFade
		// loop: true,
		scrollbar: {
			el: ".swiper-scrollbar",
			hide: false,
		},
		// autoplay: {
		// 	delay: 3500,
		// 	disableOnInteraction: false,
		// },
		speed: 1500,
		navigation: {
			nextEl: ".home-5 .btn-next",
			prevEl: ".home-5 .btn-prev",
		},
		breakpoints: {
			768: {
				slidesPerView: 3,
			},
			1024: {
				slidesPerView: 5,
			},
			1200: {
				slidesPerView: 3.95,
				spaceBetween: "40",
			},
		},
	});
}
