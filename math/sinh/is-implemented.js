/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

module.exports = function () {
	var sinh = Math.sinh;
	if (typeof sinh !== "function") return false;
	return sinh(1) === 1.1752011936438014 && sinh(Number.MIN_VALUE) === 5e-324;
};
