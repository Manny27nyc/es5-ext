/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

module.exports = function () {
	var asinh = Math.asinh;
	if (typeof asinh !== "function") return false;
	return asinh(2) === 1.4436354751788103;
};
