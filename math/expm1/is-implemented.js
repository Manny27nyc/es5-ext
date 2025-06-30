// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
"use strict";

module.exports = function () {
	var expm1 = Math.expm1;
	if (typeof expm1 !== "function") return false;
	return expm1(1).toFixed(15) === "1.718281828459045";
};
