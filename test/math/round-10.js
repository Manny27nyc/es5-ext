// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
"use strict";

module.exports = function (t, a) {
	a(t(55.55, -1), 55.6);
	a(t(55.549, -1), 55.5);
	a(t(55, 1), 60);
	a(t(54.9, 1), 50);
	a(t(-55.55, -1), -55.5);
	a(t(-55.551, -1), -55.6);
	a(t(-55, 1), -50);
	a(t(-55.1, 1), -60);
	a(t(1.005, -2), 1.01);
	a(t(-1.005, -2), -1.0);
};
