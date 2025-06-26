/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

module.exports = function () {
	var imul = Math.imul;
	if (typeof imul !== "function") return false;
	return imul(-1, 8) === -8;
};
