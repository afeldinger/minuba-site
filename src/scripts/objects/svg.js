/** @module objects/svg */
/* globals $ */
'use strict';

/*
$(function() {
	window.svg4everybody({
	    nosvg: false, // shiv <svg> and <use> elements and use image fallbacks
	    polyfill: true // polyfill <use> elements for External Content
	});
});
*/

(function() {

	var polyfill = /\bEdge\/12\b|\bTrident\/[567]\b|\bVersion\/7.0 Safari\b/.test(navigator.userAgent) || (navigator.userAgent.match(/AppleWebKit\/(\d+)/) || [])[1] < 537;
	if (!polyfill) return;

	var uses = document.getElementsByTagName("use"),
		sprites = {};

	for (var use, i = 0; i < uses.length; i++ ) {
		use = uses[i];
		var src = use.getAttribute("xlink:href");
		var url = src.split("#"), url_root = url[0], url_hash = url[1];
		sprites[url_root] || (sprites[url_root] = []), sprites[url_root].push([ use, url_hash ]);
	};

	for(var sprite in sprites) {
		var xhr = new XMLHttpRequest();
		xhr.uses = sprites[sprite];
		xhr.open("GET", sprite, true);

		xhr.onreadystatechange = function(e) {
			if (xhr.readyState === 4) {
				var x = document.createElement("x");
				x.style.display = 'none';
				x.innerHTML = xhr.responseText;
				document.body.insertBefore(x, document.body.childNodes[0]);

				// Pass through and change references
				for (var use, i = 0; i < xhr.uses.length; i++) {
					use = xhr.uses[i][0], use.setAttribute("xlink:href", "#" + xhr.uses[i][1]);
				}
			}
		}

		xhr.send();

	};

})();