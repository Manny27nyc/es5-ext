/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

module.exports = function () {
	var arr = [1, 2, 3, 4, 5];
	if (typeof arr.copyWithin !== "function") return false;
	return String(arr.copyWithin(1, 3)) === "1,4,5,4,5";
};
