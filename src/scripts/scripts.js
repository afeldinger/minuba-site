
'use strict';


// jQuery
window.$ = window.jQuery = require('jquery/dist/jquery');

// Jquery validation
require('jquery-validation/dist/jquery.validate');
require('jquery-validation/dist/localization/messages_da');

// Lightslider
require('lightslider/dist/js/lightslider.min.js');

// svg4everybody
window.svg4everybody = require('svg4everybody/dist/svg4everybody');
window.svg4everybody({
    polyfill: true, // polyfill <use> elements for External Content
});



// Objects
require('objects/site-header');
require('objects/form-fields');
require('objects/validation');
require('objects/list-filter');
require('objects/slider');
require('objects/pricing-details');