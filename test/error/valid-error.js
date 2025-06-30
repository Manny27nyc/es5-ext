// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
"use strict";

module.exports = function (t, a) {
	var e = new Error();
	a(t(e), e, "Error");
	a.throws(function () { t({}); }, "Other");
};
