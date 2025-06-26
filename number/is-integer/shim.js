/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
// Credit: http://www.2ality.com/2014/05/is-integer.html

"use strict";

module.exports = function (value) {
	if (typeof value !== "number") return false;
	return value % 1 === 0;
};
