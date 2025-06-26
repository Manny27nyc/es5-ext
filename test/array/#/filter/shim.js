/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
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
