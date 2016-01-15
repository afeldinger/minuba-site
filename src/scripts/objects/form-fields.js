/** @module objects/selectbox */
/* globals $ */
'use strict';


$(function() {

	// Add modifier to all disabled or required field wrappers
	$('.field:has(:disabled)').addClass('field--disabled');
	$('.field:has(:input[required])').addClass('field--required');

	// Add checkbox modifier for styling
	$('.field:not(.field--checkbox):has(.field__checkbox)').addClass('.field--checkbox');

	// Add selectbox wrapper for styling
	$('.field__select').filter(function() {
		return $(this).parent('.field__select__wrapper').length === 0;
	}).each(function() {
		$(this)
			.wrap('<div class="field__select__wrapper"></div>')
			.on('focus', function() {
				$(this).closest('.field__select__wrapper').addClass('focus');
			})
			.on('blur', function() {
				$(this).closest('.field__select__wrapper').removeClass('focus');	
			})
		;
	});
});