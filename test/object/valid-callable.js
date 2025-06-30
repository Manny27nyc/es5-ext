// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
"use strict";

module.exports = function (t, a) {
	var f = function () {};
	a(t(f), f, "Function");
	a.throws(function () { t({}); }, "Not Function");
};
