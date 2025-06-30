// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
"use strict";

module.exports = function () {
	var log1p = Math.log1p;
	if (typeof log1p !== "function") return false;
	return log1p(1) === 0.6931471805599453;
};
