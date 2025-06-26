/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

module.exports = function () {
	var expm1 = Math.expm1;
	if (typeof expm1 !== "function") return false;
	return expm1(1).toFixed(15) === "1.718281828459045";
};
