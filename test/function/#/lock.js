// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
"use strict";

module.exports = function (t, a) {
	a(t.call(function () { return arguments.length; })(1, 2, 3), 0);
};
