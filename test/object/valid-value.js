/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var numIsNaN = require("../../number/is-nan");

module.exports = function (t, a) {
	var x;
	a(t(0), 0, "0");
	a(t(false), false, "false");
	a(t(""), "", "''");
	a(numIsNaN(t(NaN)), true, "NaN");
	a(t((x = {})), x, "{}");

	a.throws(function () { t(); }, "Undefined");
	a.throws(function () { t(null); }, "null");
};
