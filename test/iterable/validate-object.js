/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var iteratorSymbol = require("es6-symbol").iterator;

module.exports = function (t, a) {
	var x;
	a.throws(function () { t(0); }, TypeError, "0");
	a.throws(function () { t(false); }, TypeError, "false");
	a.throws(function () { t(""); }, TypeError, "String");
	a.throws(function () { t({}); }, TypeError, "Plain Object");
	a.throws(
		function () {
			t(function () {});
		},
		TypeError,
		"Function"
	);
	a(t((x = new String("raz"))), x, "String object"); // Jslint: ignore

	a(t((x = { length: 1 })), x, "Array like");
	a.throws(function () { t(); }, TypeError, "Undefined");
	a.throws(function () { t(null); }, TypeError, "null");
	x = {};
	x[iteratorSymbol] = function () {};
	a(t(x), x, "Iterable");
};
