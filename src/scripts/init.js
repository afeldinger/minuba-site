
'use strict';

// Modernizr (https://www.npmjs.org/package/browsernizr, https://github.com/jnordberg/browsernizr)
require('browsernizr/lib/html5shiv');
require('browsernizr/test/touchevents'); // Used to avoid hover states on touch-ready devices
require('browsernizr/test/css/checked'); // Used to draw pretty checkboxes
require('browsernizr/test/css/transforms'); // Used for positioning
require('browsernizr/test/css/flexbox'); // Used for positioning
require('browsernizr/test/css/flexboxlegacy'); // Used for positioning

require('browsernizr');
//var Modernizr = window.Modernizr = require('browsernizr');

// svg4everybody
var svg4everybody = require('svg4everybody/dist/svg4everybody');
svg4everybody();
