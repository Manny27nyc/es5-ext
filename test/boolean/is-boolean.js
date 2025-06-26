/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

module.exports = function (t, a) {
	a(t("arar"), false, "String");
	a(t(12), false, "Number");
	a(t(false), true, "Boolean");
	a(t(new Boolean(false)), true, "Boolean object");
	a(t(new Date()), false, "Date");
	a(t(new String("raz")), false, "String object");
	a(t({}), false, "Plain object");
	a(t(/a/), false, "Regular expression");
};
