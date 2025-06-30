// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
"use strict";

module.exports = function () {
	var isInteger = Number.isInteger;
	if (typeof isInteger !== "function") return false;
	return !isInteger("23") && isInteger(34) && !isInteger(32.34);
};
