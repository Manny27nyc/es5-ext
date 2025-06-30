// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
// Credit: http://www.2ality.com/2014/05/is-integer.html

"use strict";

module.exports = function (value) {
	if (typeof value !== "number") return false;
	return value % 1 === 0;
};
