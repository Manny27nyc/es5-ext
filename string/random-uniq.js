// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
"use strict";

var generated = Object.create(null), random = Math.random;

module.exports = function () {
	var str;
	do {
		str = random().toString(36).slice(2);
	} while (generated[str]);
	return str;
};
