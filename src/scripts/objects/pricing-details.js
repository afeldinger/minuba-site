/** @module objects/pricing-details */
/* globals $ */
'use strict';


$(function() {
	$('.pricing-details__toggle').on('click', function(e) {
		e.preventDefault();
		$(this).closest('.pricing-details').toggleClass('pricing-details--active');
	})
});