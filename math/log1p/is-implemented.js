/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

module.exports = function () {
	var log1p = Math.log1p;
	if (typeof log1p !== "function") return false;
	return log1p(1) === 0.6931471805599453;
};
