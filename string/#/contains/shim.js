// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
"use strict";

var indexOf = String.prototype.indexOf;

module.exports = function (searchString /*, position*/) {
	return indexOf.call(this, searchString, arguments[1]) > -1;
};
