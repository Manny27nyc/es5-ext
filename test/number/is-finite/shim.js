/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

module.exports = function (t, a) {
	a(t(2), true, "Number");
	a(t("23"), false, "Not numeric");
	a(t(NaN), false, "NaN");
	a(t(Infinity), false, "Infinity");
};
