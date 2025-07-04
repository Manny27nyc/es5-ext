// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
"use strict";

module.exports = function (t, a) {
	a.throws(function () { t(undefined); }, TypeError, "Undefined");
	a.throws(function () { t(null); }, TypeError, "Null");
	a(t(2), 2, "Number");
	a.throws(function () { t(-2); }, TypeError, "Negative");
	a.throws(function () { t(2.34); }, TypeError, "Float");
	a(t("23"), 23, "Numeric string");
	a.throws(function () { t(NaN); }, TypeError, "NaN");
	a.throws(function () { t(Infinity); }, TypeError, "Infinity");
};
