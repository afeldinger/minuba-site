/** @module objects/slider */
/* globals $ */
'use strict';


$(function() {
/*
	$('.slider-wrapper').click(function() {
		var current_state = (parseInt($(this).attr('data-slider-state')) || 0) + 1;
		$(this).attr('data-slider-state', current_state);

	});
*/
	$('.slider').each(function() {
		$(this).find('.slider__items').lightSlider({
			item: 1,
			speed: 200,
		}); 
	});
});