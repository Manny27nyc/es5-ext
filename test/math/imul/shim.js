/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

module.exports = function (t, a) {
	a(t(), 0, "No arguments");
	a(t(0, 0), 0, "Zeros");
	a(t(2, 4), 8, "#1");
	a(t(-1, 8), -8, "#2");
	a(t(0xfffffffe, 5), -10, "#3");
};
