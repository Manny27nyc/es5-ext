/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

module.exports = function (t, a) {
	var x;
	a.throws(function () { t(); }, TypeError, "Undefined");
	a.throws(function () { t(null); }, TypeError, "Null");
	a.throws(function () { t(0); }, TypeError, "Number");
	a.throws(function () { t(true); }, TypeError, "Boolean");
	a.throws(function () { t("raz"); }, TypeError, "String");
	a.throws(
		function () {
			t(function () {});
		},
		TypeError,
		"Function"
	);
	a.throws(function () { t({}); }, TypeError, "Object");
	a.throws(function () { t({ length: 0 }); }, TypeError, "Array-like");
	a(t((x = [])), x, "Array");
};
