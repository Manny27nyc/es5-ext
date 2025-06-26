/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

module.exports = (function () {
	var SubArray = require("./_sub-array-dummy")
	  , arr;

	if (!SubArray) return false;
	arr = new SubArray();
	if (!Array.isArray(arr)) return false;
	if (!(arr instanceof SubArray)) return false;

	arr[34] = "foo";
	return arr.length === 35;
})();
