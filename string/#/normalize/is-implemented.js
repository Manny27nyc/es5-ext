// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
"use strict";

var str = "æøåäüö";

module.exports = function () {
	if (typeof str.normalize !== "function") return false;
	return str.normalize("NFKD") === "æøåäüö";
};
