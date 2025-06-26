/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

module.exports = function (t, a) {
	a(t({}), 0, "Not numeric");
	a(t(-4), 4294967292, "Negative");
	a(t(133432), 133432, "Positive");
	a(t(8589934592), 0, "Greater than maximum");
};
