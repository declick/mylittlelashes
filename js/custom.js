
	//----------------------------------- Document ready -----------------------------------//
	$(document).ready(function () {
		"use strict";
	

		//fonction de défilement

		$('.page-scroll a').on('click', function (event) {
			let $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});

		// Fermer la barre de navigation lorsque vous cliquez à l'extérieur
		
		$(window).on('click', function(event){
			let clickOver = $(event.target)
			if ($('.navbar .navbar-toggler').attr('aria-expanded') == 'true' && clickOver.closest('.navbar').length === 0) {
				$('button[aria-expanded="true"]').click();
			}
		});
		
		//Retour Haut Lien

		let offset = 500;
		let duration = 500;
		$(window).scroll(function() {
			if ($(this).scrollTop() > offset) {
				$('.back-to-top').fadeIn(400);
			} else {
				$('.back-to-top').fadeOut(400);
			}
		});

		
	}); // document final prêt


	//----------------------------------- Fonction de chargement de fenêtre-----------------------------------//

	$(window).on('load', function(){
	"use strict";	
	
	
		//Curseur liss
		$('.slider-1').slick({
			dots: true,
			autoplaySpeed: 2000,
			slidesToShow: 1

		});
		$('.slider-2').slick({
			dots: true,
			autoplaySpeed: 2000,
			slidesToShow: 2,
			responsive: [{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
		$('.slider-3').slick({
			dots: true,
			autoplaySpeed: 2000,
			slidesToShow: 3,
			responsive: [{
					breakpoint: 991,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]

		});
		$('.slider-4').slick({
			dots: true,
			autoplaySpeed: 2000,
			slidesToShow: 4,
			responsive: [{
					breakpoint: 991,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]

		});
		
		
	   // Popup

		$('#lightbox-wrap').magnificPopup({
			delegate: 'a', 
			type: 'image',
			gallery: {
				enabled: true
			}
		});
				

	}); // fonction de fin de chargement de fenêtre

