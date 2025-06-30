// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
"use strict";

module.exports = function () {
	if (typeof Promise !== "function") return false;
	if (typeof Promise.prototype.finally !== "function") return false;
	return true;
};
