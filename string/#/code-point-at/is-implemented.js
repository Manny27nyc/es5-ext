/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var str = "abc\uD834\uDF06def";

module.exports = function () {
	if (typeof str.codePointAt !== "function") return false;
	return str.codePointAt(3) === 0x1d306;
};
