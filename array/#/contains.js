// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
"use strict";

var indexOf = require("./e-index-of");

module.exports = function (searchElement /*, position*/) {
	return indexOf.call(this, searchElement, arguments[1]) > -1;
};
