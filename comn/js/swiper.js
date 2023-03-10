var swiper1 = new Swiper(".main-video .swiper-container", {
	slidesPerView: 3,
    spaceBetween: 0,
	loopAdditionalSlides: 2,
	autoHeight: true,
	loop: true,
	speed: 1000,
	observer: true,
	observeParents: true,
	centeredSlides: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: ".main-video .swiper-button-next",
		prevEl: ".main-video .swiper-button-prev",
	},
	breakpoints: {
		991: {
			slidesPerView: 1.5,
			spaceBetween: 10,
		},
	},
});

$('.main-video .swiper-slide').on('mouseover', function(){
  swiper1.autoplay.stop();
});
$('.main-video .swiper-slide').on('mouseout', function(){
  swiper1.autoplay.start();
});


var swiper2 = new Swiper(".main-result .swiper-container", {
	slidesPerView: 6.5,
    spaceBetween: 0,
	loopAdditionalSlides: 1,
	loop: true,
	speed: 1000,
	observer: true,
	observeParents: true,
	centeredSlides: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".main-result .swiper-pagination",
		type: "fraction",
	},
	navigation: {
		nextEl: ".main-result .swiper-button-next",
		prevEl: ".main-result .swiper-button-prev",
	},
	breakpoints: {
		1200: {
			slidesPerView: 4.5,
			spaceBetween: 0,
		},
		991: {
			slidesPerView: 3.5,
			spaceBetween: 0,
		},
		767: {
			slidesPerView: 2.5,
			spaceBetween: 0,
		},
		500: {
			slidesPerView: 2.3,
			spaceBetween: 0,
		},
	},
});

var swiper3 = new Swiper(".main-map .swiper-container", {
	effect: "fade",
	slidesPerView: 1,
    spaceBetween: 0,
	loopAdditionalSlides: 1,
	loop: true,
	speed: 1000,
	observer: true,
	observeParents: true,
	centeredSlides: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".main-map .swiper-pagination",
		type: "fraction",
	},
	navigation: {
		nextEl: ".main-map .swiper-button-next",
		prevEl: ".main-map .swiper-button-prev",
	},
});

var swiper4 = new Swiper(".swiper01 .swiper-container", {
	slidesPerView: 1,
    spaceBetween: 0,
	loopAdditionalSlides: 1,
	loop: true,
	speed: 1000,
	observer: true,
	observeParents: true,
	centeredSlides: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: ".swiper01 .swiper-button-next",
		prevEl: ".swiper01 .swiper-button-prev",
	},
});
		
var swiper5 = new Swiper(".swiper02 .swiper-container", {
	slidesPerView: 1,
    spaceBetween: 0,
	loopAdditionalSlides: 1,
	loop: true,
	speed: 1000,
	observer: true,
	observeParents: true,
	centeredSlides: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: ".swiper02 .swiper-button-next",
		prevEl: ".swiper02 .swiper-button-prev",
	},
});

var swiper6 = new Swiper(".east-gallery .swiper-container", {
	slidesPerView: 4,
	initialSlides: 3,
    spaceBetween: 55,
	loopAdditionalSlides: 1,
	loop: true,
	speed: 1000,
	observer: true,
	observeParents: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: ".east-gallery .swiper-button-next",
		prevEl: ".east-gallery .swiper-button-prev",
	},
	breakpoints: {
		1500: {
			slidesPerView: 3,
			spaceBetween: 30,
			centeredSlides: true,
		},
		991: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		767: {
			slidesPerView: 1.5,
			spaceBetween: 10,
		},
	},
});

var swiper7 = new Swiper(".top-type-data .swiper-container", {
	slidesPerView: 4,
    spaceBetween: 25,
	loop: true,
	speed: 1000,
	observer: true,
	observeParents: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: ".top-type-data .swiper-button-next",
		prevEl: ".top-type-data .swiper-button-prev",
	},
	breakpoints: {
		1200: {
			slidesPerView: 3,
			spaceBetween: 15,
		},
		767: {
			slidesPerView: 2.3,
			spaceBetween: 10,
		},
	},
});

$(document).on("click", "map area" ,function(){
	var index = $(this).index()+2; 
	swiper3.slideTo(index);
});