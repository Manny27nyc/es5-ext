// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
"use strict";

module.exports = function () {
	var hypot = Math.hypot;
	if (typeof hypot !== "function") return false;
	return hypot(3, 4) === 5;
};
