/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

module.exports = function (t, a) {
	a(t({}), NaN, "NaN");
	a(t(-1), NaN, "Negative");
	a(t(0), NaN, "Zero");
	a(t(0.5), NaN, "Below 1");
	a(t(1), 0, "1");
	a(t(2), 1.3169578969248166, "Other");
	a(t(Infinity), Infinity, "Infinity");
};
