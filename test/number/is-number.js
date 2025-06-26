/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

module.exports = function (t, a) {
	a(t(0), true, "Zero");
	a(t(NaN), true, "NaN");
	a(t(Infinity), true, "Infinity");
	a(t(12), true, "Number");
	a(t(false), false, "Boolean");
	a(t(new Date()), false, "Date");
	a(t(new Number(2)), true, "Number object");
	a(t("asdfaf"), false, "String");
	a(t(""), false, "Empty String");
};
