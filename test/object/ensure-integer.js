/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

module.exports = function (t, a) {
	a.throws(function () { t(undefined); }, TypeError, "Undefined");
	a.throws(function () { t(null); }, TypeError, "Null");
	a(t(2), 2, "Number");
	a(t(-2), -2, "Negative");
	a.throws(function () { t(2.34); }, TypeError, "Float");
	a(t("23"), 23, "Numeric string");
	a.throws(function () { t(NaN); }, TypeError, "NaN");
	a.throws(function () { t(Infinity); }, TypeError, "Infinity");
};
