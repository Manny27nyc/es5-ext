// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
"use strict";

var SubArray = require("../../../../array/_sub-array-dummy-safe");

module.exports = function (t, a) {
	var arr, x = {}, subArr, result;

	arr = ["foo", undefined, 0, "2d", false, x, null];

	a.deep(t.call(arr, Boolean), ["foo", "2d", x], "Plain array");

	subArr = new SubArray("foo", undefined, 0, "2d", false, x, null);

	result = t.call(subArr, Boolean);
	a(result instanceof SubArray, true, "Instance of subclass");
	a.deep(result, ["foo", "2d", x], "Result of subclass");
};
