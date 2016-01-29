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

	var sprites = {};
	var re_sprite = /^[^#$]*/gi;
	$('use').each(function() {
		var url = $(this).attr('xlink:href').match(re_sprite)[0];
		sprites[url] = url;
	});


	$.each(sprites, function() {
		var ajax = new XMLHttpRequest();
		ajax.open("GET", this, true);
		ajax.send();
		ajax.onload = function(e) {
		  var div = document.createElement("div");
		  div.innerHTML = ajax.responseText;
		  document.body.insertBefore(div, document.body.childNodes[0]);
		}

	});