/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

module.exports = function (t, a) {
	a(t(null), false, "Null");
	a(t(""), true, "Empty string");
	a(t(12), false, "Number");
	a(t(false), false, "Boolean");
	a(t(new Date()), false, "Date");
	a(t(new String("raz")), true, "String object");
	a(t("asdfaf"), true, "String");
};
