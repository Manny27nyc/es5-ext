/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

module.exports = function () {
	var fround = Math.fround;
	if (typeof fround !== "function") return false;
	return fround(1.337) === 1.3370000123977661;
};
