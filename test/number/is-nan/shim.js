// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
"use strict";

module.exports = function (t, a) {
	a(t(2), false, "Number");
	a(t({}), false, "Not numeric");
	a(t(NaN), true, "NaN");
};
