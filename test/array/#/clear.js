/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

module.exports = function (t, a) {
	var arr = [1, 2, {}, 4];
	a(t.call(arr), arr, "Returns same array");
	a.deep(arr, [], "Empties array");
};
