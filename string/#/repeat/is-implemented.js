// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
"use strict";

var str = "foo";

module.exports = function () {
	if (typeof str.repeat !== "function") return false;
	return str.repeat(2) === "foofoo";
};
