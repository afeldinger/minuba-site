/** @module objects/list-filter */
/* globals $ */
'use strict';


$(function() {
	$('.list-filter').each(function() {

		var $filter_items = $(this).find('.list-filter__item > a').each(function() {
				$(this).data('parent', $(this).parents('li'));
			}),
			$list_container = $(this).siblings('[class$="__items"]'),
			$list_items = $list_container.find('li'),
			filter_list = function() {

				var $filters = {};

				// process selected filter items
				$filter_items.filter(function() {
					return $(this).data('parent').hasClass('selected');
				}).each(function() {
					var $data = $(this).data();
					for (var $key in $data) {

						// only process filters
						if ($key.substr(0,6) !== 'filter') continue;

						// register sub-filter array, if it doesn't exist yet
						if (!$filters[$key]) {
							$filters[$key] = [];
						}

						// merge filter values into main filter
						$.merge($filters[$key], $data[$key].split(', '));
					}
				});

				
				
				$list_items
				// remove all dom elements
				.remove()
				// filter array to only contain matching elements
				.filter(function() {
					// show all elements if filter is empty
					if ($.isEmptyObject($filters)) {
						return true;
					}

					for (var $prop in $filters) {
						var $values = $(this).data($prop).split(', ');
						for (var i=0; i<$values.length; i++) {
							if ($.inArray($values[i], $filters[$prop]) !== -1) return true;
						}
					}
					return false;
				})
				// add matching elements back into list
				.each(function() {
					$list_container.append($(this));
				});

			};
		
		// Suppress click default event and trigger filter handler
		$filter_items.on('click', function(e) {
			e.preventDefault();
			$(this).data('parent').toggleClass('selected');
			filter_list();
		});

		// Execute list filter on load
		filter_list();

	});
});