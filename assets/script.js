$(document).ready(function(){
	var x = document.getElementsByTagName("BODY")[0];
	$(".home-isabel").addClass("home-isabelt");
	$(".home-llacer").addClass("home-llacert");

	$(".home-button").click(function(event) {
		$(".sidebar").addClass("sidebar-show");
		event.stopPropagation();

		$(".sidebar").click(function(event) {
			event.stopPropagation();
		});

		$(window).scroll(function () {
		 	var height = $(window).scrollTop();
		 	if (height >= 768) {
		 		if ($(".sidebar").hasClass("sidebar-show")) {
		 			$(".sidebar").removeClass("sidebar-show");
		 		}
		 	}
		});

		$(".x-button").click(function() {
				$(".sidebar").removeClass("sidebar-show");
		});

		$(".home-container").click(function() {
				$(".sidebar").removeClass("sidebar-show");
		});
	});

	$(".sidebar-about").hover(function() {
		$(".underline1").addClass("sidebar-show");
	}, function() {
		$(".underline1").removeClass("sidebar-show");
	});

	$(".sidebar-work").hover(function() {
		$(".underline2").addClass("sidebar-show");
	}, function() {
		$(".underline2").removeClass("sidebar-show");
	});

	$(".sidebar-contact").hover(function() {
		$(".underline3").addClass("sidebar-show");
	}, function() {
		$(".underline3").removeClass("sidebar-show");
	});

	$(".sidebar-about").click(function() {
		$(window).scrollTop(768);
	});
	$(".sidebar-work").click(function() {
		$(window).scrollTop(1306);
	});
	$(".sidebar-contact").click(function() {
		$(window).scrollTop(4356);
	});



	$(window).scroll(function () {
		var height = $(window).scrollTop();
		if (height < 768) {
			$(".navbar-line1").removeClass("navbar-line1-active");
			$(".navbar").removeClass("navbar-fixed");
			$(".logo-container").removeClass("navbar-fixed");
		}
		if (height >= 668 && height <= 1306) {
			$(".navbar-line1").addClass("navbar-line1-active");
			$(".navbar-line2").removeClass("navbar-line2-active");
		}
		if (height >= 768) {
			$(".navbar").addClass("navbar-fixed");
			$(".logo-container").addClass("navbar-fixed");
		}
		if (height >= 1006 && height < 4056) {
			$(".navbar-line1").addClass("background-white");
			$(".navbar-about").addClass("white");
			$(".navbar-work").addClass("white");
			$(".navbar-contact").addClass("white");
			$(".navbar-line2").removeClass("background-black");
			$(".about-logo-white").addClass("opacity-one");
		}
		if (height < 1006) {
			$(".navbar-line1").removeClass("background-white");
			$(".navbar-about").removeClass("white");
			$(".navbar-work").removeClass("white");
			$(".navbar-contact").removeClass("white");
			$(".about-logo-white").removeClass("opacity-one");
		}
		if (height >= 4056) {
			$(".navbar-about").removeClass("white");
			$(".navbar-work").removeClass("white");
			$(".navbar-contact").removeClass("white");
			$(".navbar-line2").addClass("background-black");
			$(".about-logo-white").removeClass("opacity-one");
		}
		if (height >= 1206 && height < 4256) {
			$(".navbar-line1").removeClass("navbar-line1-active");
			$(".navbar-line2").addClass("navbar-line2-active");
			$(".navbar-line3").removeClass("navbar-line3-active");
		}

		if (height > 4256) {
			$(".navbar-line2").removeClass("navbar-line2-active");
			$(".navbar-line3").addClass("navbar-line3-active");
		}
	});

	$(".navbar-about").click(function() {
		$(window).scrollTop(768);
	});
	$(".navbar-work").click(function() {
		$(window).scrollTop(1306);
	});
	$(".navbar-contact").click(function() {
		$(window).scrollTop(4356);
	});

	$(".eyeshadow").click(function(event) {
		$(".eyeshadow").removeClass("eyeshadow-hover");
		$(".eyeshadow").addClass("eyeshadow-active");
		$(window).scrollTop(1586);
		$('html, body').css('overflowY', 'hidden'); 

		event.stopPropagation();
		$(".overlay").addClass("overlay-active");

		$(".eyeshadow").click(function(event) {
			event.stopPropagation();
		});

		$(".overlay").click(function() {
				$(".eyeshadow").removeClass("eyeshadow-active");
				$(".overlay").removeClass("overlay-active");
				$("body").removeClass("stop-scroll");
				$('html, body').css('overflowY', 'visible');
				$(".eyeshadow").addClass("eyeshadow-hover"); 
		});
	});

	$(".cone").click(function(event) {
		$(".cone").removeClass("cone-hover");
		$(".cone").addClass("cone-active");
		$(window).scrollTop(1586);
		$('html, body').css('overflowY', 'hidden'); 

		event.stopPropagation();
		$(".overlay").addClass("overlay-active");

		$(".cone").click(function(event) {
			event.stopPropagation();
		});

		$(".overlay").click(function() {
				$(".eyeshadow").addClass("cone-hover");
				$(".cone").removeClass("cone-active");
				$(".overlay").removeClass("overlay-active");
				$("body").removeClass("stop-scroll");
				$('html, body').css('overflowY', 'visible'); 
		});
	});

	$(".deer").click(function(event) {
		$(".deer").removeClass("deer-hover");
		$(".deer").addClass("deer-active");
		$(window).scrollTop(1956);
		$('html, body').css('overflowY', 'hidden'); 
		$(".x-overlay2").addClass("x-overlay2-active");

		event.stopPropagation();
		$(".overlay").addClass("overlay-active");

		$(".deer").click(function(event) {
			event.stopPropagation();
		});

		$(".overlay").click(function() {
				$(".deer").addClass("deer-hover");
				$(".deer").removeClass("deer-active");
				$(".x-overlay2").removeClass("x-overlay2-active");
				$(".overlay").removeClass("overlay-active");
				$("body").removeClass("stop-scroll");
				$('html, body').css('overflowY', 'visible'); 
		});
	});



});
