/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

module.exports = function (t, a) {
	var x;
	a.throws(function () { t(0); }, TypeError, "0");
	a.throws(function () { t(false); }, TypeError, "false");
	a.throws(function () { t(""); }, TypeError, "''");
	a(t((x = {})), x, "Object");
	a(t((x = function () {})), x, "Function");
	a(t((x = new String("raz"))), x, "String object"); // Jslint: ignore
	a(t((x = new Date())), x, "Date");

	a.throws(function () { t(); }, TypeError, "Undefined");
	a.throws(function () { t(null); }, TypeError, "null");
};
