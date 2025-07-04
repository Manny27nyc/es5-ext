// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
"use strict";

var fn = function (value) { return value > 3; };

module.exports = function () {
	var arr = [1, 2, 3, 4, 5, 6];
	if (typeof arr.findIndex !== "function") return false;
	return arr.findIndex(fn) === 3;
};
