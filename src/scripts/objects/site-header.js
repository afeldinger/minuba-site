/** @module objects/nav */
/* globals $ */
'use strict';


$(function() {
	$('.site-header__menu').each(function() {
		var menu = $(this),
			content = menu.find('.site-header__menu__content'),
			toggle = menu.find('.site-header__menu__toggle'),
			body = $(document.body),
			scrollTop = 0,
			isOpen,
			close = function() {
				menu.removeClass('menu--state-open');
				body.removeClass('body--menu-open');
				if (isOpen) {
					body.scrollTop(scrollTop);
				}
				isOpen = false;
			};


		// Close on clicks outside menu
		$(document).on('click', close);

		// Avoid close on clicks within menu
		menu.on('click', function (event) {
			event.stopPropagation();
		});

		// Toggle on burger click
		toggle.on('click', function (event) {
			event.preventDefault();

			isOpen = menu.hasClass('menu--state-open');

			if (!isOpen) {
				scrollTop = body.scrollTop();
				menu.addClass('menu--state-open');
				

				window.setTimeout(function() {
					body.addClass('body--menu-open');	
				}, 400);
			} else {
				close();
			}
		});

	});

});