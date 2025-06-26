/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

module.exports = function (value) {
	try { value = Number(value); }
	catch (e) { return false; }
	if (isNaN(value)) return false;
	if (Math.abs(value) > 8.64e15) return false;
	return true;
};
