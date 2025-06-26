/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var is = require("../../../object/is");

module.exports = function (t, a) {
	a(is(t(0), +0), true, "+0");
	a(is(t(-0), -0), true, "-0");
	a(t({}), NaN, true, "NaN");
	a(t(-234234234), -1, "Negative");
	a(t(234234234), 1, "Positive");
};
