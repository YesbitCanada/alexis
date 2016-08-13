/*jslint browser: true*/
/*global $, jQuery, alert*/
/* =================================
   PRE LOADER
=================================== */
// makes sure the whole site is loaded
jQuery(window).load(function () {
	
	'use strict';
        // will first fade out the loading animation
	jQuery(".status").fadeOut();
        // will fade out the whole DIV that covers the website.
	jQuery(".preloader").delay(1000).fadeOut("slow");
});

/* =================================
   ANIMATION
=================================== */
var wow = new WOW(
  {
    mobile: false  // trigger animations on mobile devices (default is true)
  }
);
wow.init();

/* ================================
===  VIDEO PLAY BUTTON         ====
================================= */
$('.play-button').click(function () {

	var url = $('#video-expand .embed-responsive-item').attr('src');
	url = url.replace('autoplay=0', 'autoplay=1');
	$('#video-expand .embed-responsive-item').attr('src', url);

	var collapsed = $(this).find('span').hasClass('icon-music-play-button');

	$('.play-button').find('span').removeClass('icon-arrows-circle-remove');

	$('.play-button').find('span').addClass('icon-music-play-button');

	if (collapsed) {
		$(this).find('span').toggleClass('icon-music-play-button icon-arrows-circle-remove');
	}
	if (!collapsed) {
		var urlstop = $('#video-expand .embed-responsive-item').attr('src');
		urlstop = urlstop.replace('autoplay=1', 'autoplay=0');
		$('#video-expand .embed-responsive-item').attr('src', urlstop);
	}
	
});

/* ================================
===  IN PAGE SCROLL OPTIONS    ====
================================= */
$(document).ready(function () {
	$('.smooth-scroll a, a.smooth-scroll').on('click', function (e) {
		//e.preventDefault();

		var target = this.hash;
		var $target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 900, 'swing', function () {
			window.location.hash = target;
		});
	});
});

$('#internal-scroll').onePageNav({
	currentClass: 'current',
	changeHash: false,
	scrollSpeed: 750,
	scrollThreshold: 0.5,
	filter: ':not(.external)'
});

/* ================================
===  MAILCHIMP SUBSCRIBE FORM  ====
================================= */

$('.mailchimp').ajaxChimp({
	callback: mailchimpCallback,
	url: "http://webdesign7.us6.list-manage.com/subscribe/post?u=9445a2e155b82208d73433060&amp;id=16dc80e353" //Replace this with your own mailchimp post URL. Don't remove the "". Just paste the url inside "".
});

function mailchimpCallback(resp) {
	if (resp.result === 'success') {
		$('.mailchimp-success').html(resp.msg).fadeIn(1000);
		$('.mailchimp-error').fadeOut(500);

	} else if (resp.result === 'error') {
		$('.mailchimp-error').html(resp.msg).fadeIn(1000);
	}
}

/* ================================
===  PROJECT LOADING           ====
================================= */
/*
jQuery(document).ready(function ($) {
	$('.more').on('click', function (event) {
		event.preventDefault();

		var href = $(this).attr('href') + ' .single-project',
			portfolioList = $('#portfolio-list'),
			content = $('#loaded-content');
prompt(href, href);
		portfolioList.animate({
			'marginLeft': '-120%'
		}, {
			duration: 400,
			queue: false
		});
		portfolioList.fadeOut(400);
		setTimeout(function () {
			$('#loader').show();
		}, 400);
		setTimeout(function () {
			content.load(href, function () {
				$('#loaded-content meta').remove();
				$('#loader').hide();
				content.fadeIn(600);
				$('#back-button').fadeIn(600);
			});
		}, 800);

	});

	$('#back-button').on('click', function (event) {
		event.preventDefault();

		var portfolioList = $('#portfolio-list')
		content = $('#loaded-content');

		content.fadeOut(400);
		$('#back-button').fadeOut(400);
		setTimeout(function () {
			portfolioList.animate({
				'marginLeft': '0'
			}, {
				duration: 400,
				queue: false
			});
			portfolioList.fadeIn(600);
		}, 800);
	});
});
*/
/* ================================
===  TESTIMONIALS              ====
================================= */

$(document).ready(function () {

	$("#feedbacks").owlCarousel({

		navigation: false, // Show next and prev buttons
		slideSpeed: 300,
		paginationSpeed: 400,
		singleItem: true

	});

	$("#project-slider").owlCarousel({

		navigation: false, // Show next and prev buttons
		slideSpeed: 300,
		paginationSpeed: 400,
		singleItem: true

	});


});

/* =================================
===  CONTACT FORM          ====
=================================== */
$("#contact-form").submit(function (e) {
	e.preventDefault();
	var name = $("#name").val();
	var email = $("#email").val();
	var budget = $("#budget").val();
	var subject = $("#subject").val();
	var message = $("#message").val();
	//var dataString = 'name=' + name + '&email=' + email + '&subject=' + subject + '&budget=' + budget + '&message=' + message;
	var dataString = 'name=' + name + '&email=' + email + '&message=' + message;
	



	function isValidEmail(emailAddress) {
		var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
		return pattern.test(emailAddress);
	};

	if (isValidEmail(email) && (message.length > 1) && (name.length > 1)) {

		$.ajax({
			type: "POST",
			url: "http://yes-bit.com/sendmail.php",
			data: dataString,
			success: function (result) {
				$("#contact-form").hide();
				$('.success').html("提交成功，我们会尽快与您联系！").fadeIn();
				//$('.success').fadeIn();
				$('.error').fadeOut();
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) { 
                    alert("Status: " + textStatus); 
					$('.error').html('发送失败，请直接联系+12269766258').fadeIn(1000);
					$('.success').fadeOut(500);
                } 
			
		});
		//prompt("ajax", dataString);

	} else {
		if (name.length < 2) {
			$('.error').html('Invalid Name - Please use your correct name').fadeIn(1000);
			$('.success').fadeOut(500);
		}
		if (message.length < 1) {
			$('.error').html('Message is too short. Should be more than 1 character').fadeIn(1000);
			$('.success').fadeOut(500);
		}

		if ((name.length < 2) && (message.length < 1)) {
			$('.error').html('Valid name & More than 1 characters in message is required').fadeIn(1000);
			$('.success').fadeOut(500);
		}
	}

	return false;
});


/* ================================
===  OTHER FIXES 		       ====
================================= */

$('input,textarea').focus(function () {
	$(this).data('placeholder', $(this).attr('placeholder'))
		.attr('placeholder', '');
}).blur(function () {
	$(this).attr('placeholder', $(this).data('placeholder'));
});

/* BOOTSTRAP FIX */

if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
	var msViewportStyle = document.createElement('style')
	msViewportStyle.appendChild(
		document.createTextNode(
			'@-ms-viewport{width:auto!important}'
		)
	)
	document.querySelector('head').appendChild(msViewportStyle)
}
